const express = require("express");
const nodemailer = require('nodemailer');
const path = require('path');


const stripe = require("stripe")(
  "sk_test_51FqRDiArHu3DdIthsIF6xQTRG9Ktazoq0WPK3WqWlAd2j6vCs0mA3icfRruZe8m9utmd9n5fvkOYEbCC1pGeVjc400uN1XvhNI"
);
const crypto = require("crypto");
const { MongoClient } = require("mongodb");




// Function to encrypt text
function encrypt(text, secretKeyHex) {
  const iv = crypto.randomBytes(16); // Generate a random IV
  const secretKey = Buffer.from(secretKeyHex, 'hex'); // Convert hex string back to bytes
  if (secretKey.length !== 32) {
      throw new Error('Invalid key length: ' + secretKey.length);
  }
  const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted; // IV:encryptedData
}

function decrypt(encryptedData, secretKeyHex) {
  const parts = encryptedData.split(':');
  const iv = Buffer.from(parts.shift(), 'hex');
  const encryptedText = Buffer.from(parts.join(':'), 'hex');
  const secretKey = Buffer.from(secretKeyHex, 'hex');
  
  const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  
  return decrypted.toString();
}

const app = express();
app.use(express.json());

const url = "mongodb+srv://agentify:421142Dcdc.@cluster0.fvhhyqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "yourDatabase";
const client = new MongoClient(url);

const config = {
    imap: {
        user: 'user1@inboxverse.site',
        password: '421142Dcdc.',
        host: 'imap.inboxverse.site',
        port: 993,
        tls: true,
        authTimeout: 3000
    }
};

function generateSerial() {
    return crypto.randomBytes(64).toString('hex');
  }

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

connectDB();

app.post("/success", async (req, res) => {
    let { session_id, serialCode, amount } = req.body;
    amount = Number(amount);
  
    if (!session_id || !serialCode) {
      return res.status(400).send("Session ID and serial code are required.");
    }
  
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id);
      if (session.payment_status === "paid") {
        const db = client.db(dbName);
        const collection = db.collection("documents");
  
        let doc = await collection.findOne({ _id: serialCode });
  
        if (doc) {
          // Check if session_id is already in the array
          if (doc.session_id.includes(session_id)) {
            return res.status(400).send("This session ID has already been redeemed.");
          }
  
          // Ensure 'credits' is a number
          if (typeof doc.credits === 'string') {
            doc.credits = Number(doc.credits);
            await collection.updateOne({ _id: serialCode }, { $set: { credits: doc.credits } });
          }
  
          // Add session_id to the array and increment credits
          await collection.findOneAndUpdate(
            { _id: serialCode },
            { $push: { session_id }, $inc: { credits: amount } },
            { returnOriginal: false }
          );
  
          // Retrieve the document again after the update
          doc = await collection.findOne({ _id: serialCode });
  
          const totalCredits = doc.credits;
          const totalEuros = creditsToMoney(totalCredits);
          const newMaxInstances = calculateMaxInstances(totalEuros);
  
          await collection.updateOne(
            { _id: serialCode },
            { $set: { maxInstances: newMaxInstances } }
          );
        } else {
          const totalEuros = creditsToMoney(amount);
          const maxInstances = calculateMaxInstances(totalEuros);
  
          await collection.insertOne({
            _id: serialCode,
            credits: amount,
            session_id: [session_id], // Initialize session_id as an array
            maxInstances,
          });
        }
  
        res.json({ message: "Payment successful. Session added." });
      } else {
        res.status(400).send("Payment not successful or session not found.");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send(`Error: ${err.message}`);
    }
  });



  app.post("/freeTrial", async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).send("Email is required.");
    }
  
    try {
      const db = client.db(dbName);
      const collection = db.collection("documents");
  
      // Check if email already exists in the database
      let doc = await collection.findOne({ email: email });
  
      if (doc) {
        return res.status(400).send("This email has already been used for a free trial.");
      }
  
      // Generate a unique serial code
      const serialCode = generateSerial();
  
      // Insert a new document with the email, serial code, credits, and maxInstances
      await collection.insertOne({
        _id: serialCode,
        email: email,
        credits: 1000, // Set the number of credits for the free trial
        maxInstances: 15, // Set the maxInstances for the free trial
      });
  
      // Create a transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: 'mail.inboxverse.site',
        port: 465,
        secure: true,
        auth: {
          user: 'user1@inboxverse.site',
          pass: '421142Dcdc.'
        }
      });
  
      // Setup email data with unicode symbols
      const mailOptions = {
        from: 'user1@inboxverse.site',
        to: email,
        subject: 'Your Free Trial Details',
        text: `Congratulations on starting your free trial! Here is your unique serial code: ${serialCode}`
      };
  
      // Send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send('Failed to send email.');
        } else {
          console.log('Email sent: ' + info.response);
          res.json({message: 'Free trial request successful. Email sent.'});
        }
      });
    } catch (err) {
      console.error(err);
      res.status(500).send(`Error: ${err.message}`);
    }
  });

const creditsToMoney = (credits) => {
  const costPerMinute = 0.001;
  const conversionRate = 1 / costPerMinute;
  const euros = credits / conversionRate;
  return euros;
};

const calculateMaxInstances = (euros) => {
  const costPerInstance = 0.2;
  return Math.floor(euros / costPerInstance);
};

const generateSerialCode = () => {
  return crypto.randomBytes(48).toString("hex");
};

app.post("/create-checkout-session", async (req, res) => {
  console.log("dddddddddddddddd");
  let { amount, serialCode } = req.body;

  if (!amount || amount <= 0) {
    console.log("Amount is required and should be greater than 0.",amount,req.body);
    return res
      .status(400)
      .send("Amount is required and should be greater than 0.");
  }

  const euros = creditsToMoney(amount);
  const maxInstances = calculateMaxInstances(euros);

  if (!serialCode) {
    serialCode = generateSerialCode();
    console.log("serialCode", serialCode);
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Service Payment",
            },
            unit_amount: Math.round(euros * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000?session_id={CHECKOUT_SESSION_ID}&serialCode=${serialCode}&credits=${amount}&instances=${maxInstances}`,
      cancel_url: "http://localhost:3000",
    });

    res.send({ url: session.url, maxInstances, serialCode });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});
const secretKeyHex = 'd94238f2125b6b2ed55a7a00571bb5659eda664f38d69264ccce445a555ff9c6'; // The AES key

app.post("/current", async (req, res) => {
  const { serialCode, requestId } = req.body;
  if (!serialCode) {
    return res.status(400).send("Serial code is required.");
  }
  if (!requestId) {
    return res.status(400).send("Request ID is required.");
  }

  try {
    const db = client.db(dbName);
    const collection = db.collection("users");

    const doc = await collection.findOne({ _id: serialCode });
    if (!doc) {
      return res.status(404).send("Document not found.");
    }

    const { credits, maxInstances } = doc;

    // Include the requestId in the data to be encrypted
    const dataString = JSON.stringify({ credits, maxInstances, requestId });

    // Encrypt the data including the requestId
    const encryptedData = encrypt(dataString, secretKeyHex);

    res.send(encryptedData); // Send encrypted data as response
  } catch (err) {
    console.error(err);
    // Consider including the requestId in error responses if applicable
    const errorMessage = { error: `Error: ${err.message}`, requestId };
    res.status(500).send(encrypt(JSON.stringify(errorMessage), secretKeyHex));
  }
});




app.post("/deduct-credits", async (req, res) => {
  // Extract encrypted data from the request body
  const encryptedData = req.body.encryptedData;
  if (!encryptedData) {
    return res.status(400).send("Encrypted data not provided.");
  }

  // Decrypt the request body
  console.log(encryptedData, "encryptedData");
  const decryptedBody = decrypt(encryptedData, secretKeyHex);
  // Make sure to extract the requestId from the decrypted body
  const { serial, amount, requestId } = JSON.parse(decryptedBody);

  try {
    const db = client.db(dbName);
    const collection = db.collection("users");

    const userDoc = await collection.findOne({ _id: serial });
    if (!userDoc) {
      throw new Error("User not found.");
    }

    let credits = userDoc.credits - amount;
    credits = Math.max(0, credits);

    await collection.updateOne({ _id: serial }, { $set: { credits } });

    // Include the requestId in the response, encrypt, and send it back
    // Replace 'key: "success4211"' with 'requestId' to ensure consistency and security
    const encryptedResponse = encrypt(JSON.stringify({ credits, requestId }), secretKeyHex);
    res.send(encryptedResponse);
  } catch (err) {
    console.error(err);
    // When sending back an error, consider including the requestId if applicable
    // This ensures the client can match errors to specific requests
    const encryptedError = encrypt(JSON.stringify({ error: err.message, requestId }), secretKeyHex);
    res.status(500).send(encryptedError);
  }
});


app.post('/add-preset', async (req, res) => {
  try {
    // Connect to the MongoDB server
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Select the database
    const db = client.db('yourDatabase');

    // Select the "auditpresset" collection
    const collection = db.collection('presets');

    // Insert the document into the "auditpresset" collection
    const result = await collection.insertOne(req.body);

    // Close the connection
    await client.close();

    res.status(201).json(result);
  } catch (error) {
    console.log('error:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET endpoint to retrieve all documents from the "presets" collection
app.get('/presets', async (req, res) => {
  try {
    // Connect to the MongoDB server
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Select the database
    const db = client.db(dbName);

    // Select the "presets" collection
    const collection = db.collection('presets');

    // Find all documents in the "presets" collection
    const presets = await collection.find({}).toArray();

    // Close the connection
    await client.close();

    res.status(200).json(presets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.use(express.static(path.join(__dirname, 'build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
