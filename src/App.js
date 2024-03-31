import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";

const DownloadComponent = () => {
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleDownloadClick = () => {
    setShowPolicyModal(true);
  };

  const handleAgreeClick = () => {
    setShowPolicyModal(false);
  };

  const handleCancelClick = () => {
    setShowPolicyModal(false);
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto my-8 p-8 text-white border border-gray-800 rounded-xl shadow-md text-center">
      <h2 className="text-3xl font-semibold mb-6">
        Join Our Early Adopter Program
      </h2>

      <div >
      <div className="flex flex-col md:flex-row items-center justify-around w-full">
  {/* Windows */}
  <div className="flex flex-col items-center justify-center md:w-1/3 mb-4 md:mb-0 mx-auto">
    <h3 className="text-xl mb-2">Windows</h3>
    <img
      src={`${process.env.PUBLIC_URL}/win.png`}
      alt="Windows"
      className="w-24 h-24 mb-4"
    />
    <button
      onClick={handleDownloadClick}
      className="bg-purple-500 text-white px-6 py-3 rounded hover:bg-purple-600 transition duration-300"
    >
      Join Early Adopter
    </button>
  </div>

  {/* Mac and Linux */}
  {["Mac", "Linux"].map((platform) => (
    <div key={platform} className="flex flex-col items-center justify-center md:w-1/3 mb-4 md:mb-0 mx-auto">
      <h3 className="text-xl mb-2">{platform}</h3>
      <img
        src={`${process.env.PUBLIC_URL}/${platform.toLowerCase()}.png`}
        alt={platform}
        className="w-24 h-24 mb-4"
      />
     
      <button
        href="https://t.me/your_telegram_group"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-500 text-white px-6 py-3 rounded hover:bg-purple-600 transition duration-300"
      >
        Coming soon
      </button>
    </div>
  ))}
</div>

        {/* Policy Modal */}
        {showPolicyModal && (
          <div
            style={{ width: "100vw" }}
            className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-75 overflow-y-auto z-50 pt-10"
          >
            <div className="max-w-3xl w-full mx-auto my-8 p-8 bg-gray-800 text-white rounded-lg shadow-lg overflow-y-auto max-h-80vh">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Trust message
              </h2>
              <div className="mb-4 overflow-y-auto max-h-60vh text-justify">
                <p>
                  Our application is new and hasn't built up a reputation
                  according to Microsoft's criteria yet. This is why you might
                  see a warning from Microsoft Defender SmartScreen.
                </p>
                <p>
                  We assure you that our application is safe to use. We have
                  already issued an OV certificate and are in the process of
                  building our reputation. Soon, this message will no longer
                  appear.
                </p>
                <p>
                  If you see the warning, here's what you need to do:
                  <ol className="list-decimal list-inside">
                    <li>
                      Click on "More info" in the warning message. This will
                      expand the message and reveal additional options.{" "}
                      <img
                        src="/screen1.png"
                        alt="Screen1"
                        className="w-80 mx-auto my-2"
                      />
                    </li>
                    <li>
                      Click on "Run anyway". This will close the warning and
                      allow the application to run.{" "}
                      <img
                        src="/screen2.png"
                        alt="Screen2"
                        className="w-80 mx-auto my-2"
                      />
                    </li>
                  </ol>
                  Please note that this action only bypasses the warning for
                  this particular run. You may see the warning again the next
                  time you run the application. We're working on building our
                  reputation to eliminate this warning in the future.
                </p>
                <p>
                  We understand that seeing a warning message can be concerning.
                  That's why we're being transparent about this issue and
                  providing these instructions. We appreciate your understanding
                  and patience as we work through this early adopter phase.
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleAgreeClick}
                  className="bg-blue-500 text-white px-6 py-3 mr-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Agree & Join
                </button>
                <button
                  onClick={handleCancelClick}
                  className="text-gray-500 px-6 py-3 rounded-full hover:text-gray-300 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const blogs = [
  {
    id: 1,
    image: "/octo.jfif",
    title: "Unleashing the Power of Agentify: A Multitude of Use Cases",
    intro:
      "Agentify is a powerful tool for automating browser tasks. Its versatility spans from web scraping to testing applications, monitoring Bitcoin transactions.",
    content: `<div>
    <h2 class="text-xl font-bold mb-4">1. Web Scraping Bots</h2>
    <p>Web scraping bots can be programmed to visit websites and collect data that you're interested in. For example, you could create a bot to scrape e-commerce sites for product prices, descriptions, and images. This data can then be used for competitive analysis or price comparison.</p>

    <h2 class="text-xl font-bold my-4">2. Automation Work</h2>
    <p>Automation work can range from simple tasks like form filling to more complex ones like automating the entire checkout process on an e-commerce site. For instance, if you regularly order the same items, you could create a bot to automate this process, saving you time and effort.</p>

    <h2 class="text-xl font-bold my-4">3. Testing Purposes</h2>
    <p>For testing purposes, you can use Agentify to simulate user interactions and ensure your web application behaves as expected. For example, you could create a bot to test the sign-up process of your website, checking that all form validations work correctly and the user is successfully registered at the end.</p>

    <h2 class="text-xl font-bold my-4">4. Bitcoin Watchers</h2>
    <p>A Bitcoin watcher could be set up to monitor the price of Bitcoin on various exchanges. Whenever the price hits a certain threshold, the bot could send you an alert. This way, you can stay updated on price changes without having to constantly check yourself.</p>

    <h2 class="text-xl font-bold my-4">5. Server-side API</h2>
    <p>Running Agentify as an API on a server allows other applications to interact with it. For example, you could have a mobile app that sends requests to the Agentify API to perform certain tasks, like scraping data or automating tasks.</p>

    <h2 class="text-xl font-bold my-4">6. User-generated Presets</h2>
    <p>User-generated presets allow you to leverage the collective knowledge of the Agentify community. For instance, if you're not sure how to create a bot for a particular task, you can download a preset created by another user and modify it to suit your needs.</p>

    <h2 class="text-xl font-bold my-4">7. Customizable with JavaScript</h2>
    <p>With JavaScript, you can customize your bots to do almost anything you can imagine. For example, you could create a bot that interacts with a web page's DOM to extract specific elements, or a bot that uses AJAX to send and receive data from a server.</p>

    <p class="my-4">Each of these use cases demonstrates the power and flexibility of Agentify, making it a valuable tool for anyone looking to automate browser-based tasks.</p>


    </div>`,
    link: "https://example.com/blog1",
  },
  {
    id: 2,
    image: "/store.jfif",
    title: "The Agentify Preset Store: A Hub for Open-Source Automation",
    intro:
      " A community-driven platform for open-source automation presets. Dive in and elevate your automation tasks.",
    content: `   
    <p class="text-lg mb-4">Welcome to the Agentify Preset Store, a unique platform where users can upload, share, and utilize open-source presets for automating tasks across popular platforms.</p>

    <h2 class="text-2xl font-bold my-4">1. A Community of Innovators</h2>
    <p class="text-lg mb-4">The Preset Store is more than just a repository; it’s a thriving community of innovators. Users can upload their own presets, sharing their innovative solutions with others. This collaborative environment fosters creativity and problem-solving, as users can build upon each other’s ideas.</p>

    <h2 class="text-2xl font-bold my-4">2. Open-Source Automation</h2>
    <p class="text-lg mb-4">All presets in the store are fully open-source. This means that users can not only use these presets but also modify them to suit their specific needs. Whether you’re looking to automate tasks on social media platforms, e-commerce sites, or any other popular platform, chances are you’ll find a preset that can help.</p>

    <h2 class="text-2xl font-bold my-4">3. We’re Just Getting Started</h2>
    <p class="text-lg mb-4">While we’re proud of what we’ve achieved so far, we’re just getting started. We invite all users to join us in this journey, to contribute their own presets, and to help us build a comprehensive library of automation tools.</p>

    <p class="text-lg mb-4">In conclusion, the Agentify Preset Store is not just a tool, but a platform for collaboration, innovation, and reward. So why wait? Start exploring the Preset Store today, and take your automation game to the next level.</p>
`,
    link: "https://example.com/blog2",
  },
  {
    id: 3,
    image: "/fingre.jfif",
    title: "Mastering Chrome Fingerprinting for Undetectable Bots",
    intro:
      "Using advanced Chrome fingerprinting techniques, offers undetectable bots that seamlessly automate tasks, evading all bot detection systems. This blog explores this unique feature.",
    content: `

    <p class="text-lg mb-4">In the world of automation, the ability to operate undetected by bot detection systems is a significant advantage. Agentify has mastered this art using advanced Chrome fingerprinting techniques.</p>

    <h2 class="text-2xl font-bold my-4">1. The Power of Chrome Fingerprinting</h2>
    <p class="text-lg mb-4">Chrome fingerprinting involves collecting data about a browser’s settings and characteristics, which can be as unique as a human fingerprint. Agentify leverages this technique to mimic human-like browser behavior, making its bots virtually undetectable.</p>

    <h2 class="text-2xl font-bold my-4">2. Evading Bot Detection Systems</h2>
    <p class="text-lg mb-4">Bot detection systems are designed to identify and block automated activities. They analyze various factors, such as mouse movements, keystrokes, and browsing patterns. Agentify’s bots are designed to mimic these human behaviors, thereby evading detection.</p>

    <h2 class="text-2xl font-bold my-4">3. Seamless Automation Experience</h2>
    <p class="text-lg mb-4">By using Chrome fingerprinting techniques, Agentify ensures a seamless automation experience. Users can run their bots without worrying about being blocked or flagged, allowing for uninterrupted operation.</p>

    <h2 class="text-2xl font-bold my-4">4. A Step Ahead in the Automation Game</h2>
    <p class="text-lg mb-4">Agentify’s undetectable bots give users an edge in the automation game. Whether it’s web scraping, data collection, or any other automated task, users can carry out their operations smoothly and efficiently.</p>

    <p class="text-lg mb-4">In conclusion, Agentify’s use of Chrome fingerprinting techniques represents a significant advancement in the field of automation. It not only ensures undetectability but also guarantees a seamless and efficient automation experience.</p>
`,
    link: "https://example.com/blog3",
  },
];

const BlogCard = ({ blog, onReadMore }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-gray-800">
      <img className="w-full h-64 object-cover" src={blog.image} alt="Blog" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{blog.title}</div>
        <p className="text-white text-base">{blog.intro}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => onReadMore(blog)}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

const BlogList = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const blogContentRef = useRef(null);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  useEffect(() => {
    if (selectedBlog && blogContentRef.current) {
      blogContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedBlog]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onReadMore={handleReadMore} />
        ))}
      </div>
      {selectedBlog && (
        <div
          ref={blogContentRef}
          className=" mx-auto mt-8  border border-gray-900 p-6 rounded-lg shadow-lg "
        >
          <h2 className="text-2xl font-bold mb-4 text-white">
            {selectedBlog.title}
          </h2>
          <div
            ref={blogContentRef}
            className=" mx-auto mt-8  border border-gray-900 p-6 rounded-lg shadow-lg "
          >
            <div
              className="text-white"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

const BetaHeader = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-r from-black to-grey-600 text-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start md:items-center">
        <div className="col-span-1 md:col-span-1 space-y-4">
          <img src="/logo.png" alt="Logo" className="w-16 h-auto" />
          <h2 className="text-4xl font-bold">
            Welcome to Agentify Beta Release!
          </h2>
          <p>
            We are excited to introduce our beta version. Your feedback is
            crucial to improving our service. Try it out and let us know what
            you think.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full z-10"
              title="Beta Video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

function CreditInfo() {
  return (
    <div className="max-w-6xl mx-auto my-8 p-6 bg-gray-800 text-white rounded-xl border border-white shadow-md">
      <h2 className="text-3xl font-bold mb-4">Our Service</h2>
      <p className="mb-4">
        Welcome to our cutting-edge, code-driven automation platform, a revolutionary tool designed for businesses and developers seeking unparalleled control and customization over their online tasks. Unlike traditional automation services, our platform offers a code-based approach, granting users the freedom to tailor automations to the minutest detail. This ensures that every automation perfectly aligns with your operational needs and objectives.
      </p>
      <p className="mb-4">
        Our service operates on a credit system. You buy credits and use them to run your automation code on multiple browsers (instances). Each instance utilizes an IPv4 address, ensuring smooth and secure operations. The cost of running these instances is deducted from your credits. The more credits you have, the more instances you can run, enhancing your scalability and efficiency.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Credit Packages</h2>
      <p className="mb-4">
        We offer a variety of credit packages to suit your specific automation needs. Whether you're automating web scraping, data entry, or complex workflows, our packages provide the flexibility and resources needed to achieve your goals efficiently. Custom packages are also available, allowing you to purchase credits that align precisely with your project requirements.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Optimizing Your Automation</h2>
      <p className="mb-4">
        With our platform, you can run multiple instances simultaneously, automate tasks across various web applications, and integrate seamlessly with your existing systems via REST API. Our built-in proxy support ensures your operations remain anonymous and protected. For extensive tasks, ensure your system has the necessary resources, or consider upgrading to a cloud machine for additional capacity.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Future Enhancements</h2>
      <p className="mb-4">
        We're continuously improving our platform to bring you more value and capabilities. Stay tuned for future updates, including the integration of IPv6 proxies, which will provide even greater scalability and cost efficiency for your automation projects.
      </p>

      <p>
        Explore the full potential of code-driven automation with our platform. Check our <a href="https://www.example.com/documentation" className="text-blue-500 underline">documentation</a> for detailed guides on getting started, optimizing your automations, and planning your resource usage effectively.
      </p>
    </div>
  );
}



const FreeTrial = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGetFreeTrial = async () => {
    try {
      const response = await fetch('/freeTrial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Free trial request successful. Check your email for the serial code.');
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-8 p-6 border border-gray-800 text-white rounded-xl shadow-md">
      <h2 className="text-3xl mb-4 font-semibold text-white">
        Get 1000 Free Trial Credits
      </h2>
      <p className="mb-4">
        Enter your email to get started with a free trial of 1000 credits:
      </p>
      <label
        htmlFor="email"
        className="block text-lg font-medium text-white mb-2"
      >
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        className="mt-1 block w-full rounded-md bg-gray-700 text-white shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
      />
      <button
        onClick={handleGetFreeTrial}
        className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Get Free Trial Credits
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};


const HeroComponent = () => {
  return (
    <div className="relative -mt-64 h-screen max-h-[1000px] w-full md:-mt-80 min-h-[500px] lg:min-h-[600px] overflow-hidden">
      <div className="relative h-full w-full">
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10">
          <img
            src="https://images.openai.com/blob/8264d3d7-922c-4343-b43d-6665e44bcb91/paper-airplanes.jpg?trim=0,0,0,0&amp;width=10&amp;height=10&amp;quality=50"
            alt="Paper Airplanes"
            className="h-full w-full object-cover"
          />
        </div>
        <video
          aria-hidden="true"
          muted
          className="relative z-10 h-full w-full object-cover transition-opacity duration-300 pointer-events-none opacity-100"
          autoPlay
          loop
          playsInline
        >
          <source src="/background2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-30 bg-black bg-opacity-50 flex items-center justify-center text-center text-white">
        <div style={{ width: "50vw", marginTop: "150px" }} className=" mx-auto">
          {" "}
          {/* Adjusted width and horizontal margins */}
          <img src="/logo.png" alt="Logo" className="w-24  mb-4 mx-auto" />
          <h1 className="text-4xl">Welcome to Agentify</h1>
          <p className="mt-4 text-lg">
            Your ultimate bot-making solution with advanced fingerprinting
            capabilities. Download presets from our vibrant user community,
            perfect for marketing, SEO, and automation.
          </p>
          {/* <ul className="mt-6 flex flex-row flex-wrap items-center justify-center">
            <li className="mr-4 mb-2">
              <a
                href="/Agentify"
                className="inline-block py-1 px-2 border hover:bg-black hover:text-white hover:border-blue-500"
                aria-label="Explore Agentify"
              >
                Explore Agentify
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/blogs"
                className="inline-block py-1 px-2 border hover:bg-black hover:text-white hover:border-blue-500"
                aria-label="Read Our Blogs"
              >
                Read Our Blogs
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [totalEuros, setTotalEuros] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [customPackage, setCustomPackage] = useState("");
  const [totalCredits, setTotalCredits] = useState(0); // Add this line
  const [showSerialCode, setShowSerialCode] = useState(false);
  const [serialCode_state, setSerialCode_state] = useState(false);
  const serialCodeRef = useRef(null);
  const [email, setEmail] = useState("");

  const copyToClipboard = () => {
    const serialCode = serialCodeRef.current;
    if (serialCode) {
      navigator.clipboard.writeText(serialCode.textContent);
    }
  };

  const sendSerialToEmail = () => {
    // Here you can implement the functionality to send the serial code to the user's email
    console.log(`Sending serial code to ${email}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("session_id");
    const serialCode = urlParams.get("serialCode");
    setSerialCode_state(serialCode);
    const amount = urlParams.get("credits");
    console.log(urlParams, sessionId, serialCode);
    if (sessionId && serialCode) {
      fetch("/success", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ session_id: sessionId, serialCode, amount }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response
          console.log(data);
          if ((data.message = "Payment successful. Session added.")) {
            setShowSerialCode(true);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);

  useEffect(() => {
    let money = calculateCredits(totalEuros);
    let credits = money.totalCredits;
    setTotalCredits(credits);
  }, [totalEuros]);

  const handleCheckout = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: totalCredits,
        serialCode: serialCode_state,
        // Add any other data you need to send
      }),
    });

    const data = await response.json();
    if (data.url) {
      window.open(data.url, "_blank");
    }
    // Handle the response
    console.log(data);
  };

  const calculateCredits = (euros) => {
    const costPerMinute = 0.001;
    const conversionRate = 1 / costPerMinute;
    const totalCredits = euros * conversionRate;
    const creditsFor1Proxy = 60;
    const hoursFor1Proxy = totalCredits / (creditsFor1Proxy * 25);
    const hoursFor75Proxy = totalCredits / (creditsFor1Proxy * 75);
    const hoursFor100Proxies = totalCredits / (creditsFor1Proxy * 100);

    const costPerProxy = 0.2;
    const maxProxies = Math.floor(euros / costPerProxy);

    return {
      totalCredits: totalCredits.toFixed(0),
      maxProxies,
      details: [
        { proxies: '1 to 25', hours: hoursFor1Proxy.toFixed(2) },
        { proxies: 75, hours: hoursFor75Proxy.toFixed(2) },
        { proxies: 100, hours: hoursFor100Proxies.toFixed(2) },
      ],
    };
  };

  const renderPackage = (euros, packageName, setTotalCredits) => {
    const { totalCredits, maxProxies, details } = calculateCredits(euros);

    return (
      <div className="p-6  text-white rounded-md shadow-lg">
        <Modal
          isOpen={showSerialCode}
          onRequestClose={() => setShowSerialCode(false)}
          contentLabel="Serial Code"
          className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-black bg-opacity-50 z-50"
          style={{ overlay: { zIndex: 50000 } }}
        >
          <div
            style={{ width: "80%" }}
            className="bg-purple-800 text-white rounded-lg "
          >
            <div className="flex flex-col items-start p-4">
              <div className="flex items-center w-full">
                <div className="text-white font-medium text-lg">
                  Payment Successful
                </div>
                <svg
                  onClick={() => setShowSerialCode(false)}
                  className="ml-auto fill-current text-white w-6 h-6 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path d="M18 1.3L16.7 0 9 7.6 1.3 0 0 1.3 7.6 9 0 16.7 1.3 18 9 10.4l7.7 7.6 1.3-1.3L10.4 9z" />
                </svg>
              </div>
              <hr className="border-purple-600" />
              <div className="my-4">
                <p className="text-lg overflow-x-auto whitespace-nowrap">
                  Your serial code is:{" "}
                  <span
                    ref={serialCodeRef}
                    className="font-bold text-purple-400"
                  >
                    {serialCode_state}
                  </span>
                </p>
                <button
                  onClick={copyToClipboard}
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Copy to Clipboard
                </button>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-4 w-full px-3 py-2 text-gray-700 bg-gray-200 rounded outline-none focus:shadow-outline"
                  placeholder="Enter your email..."
                />
                <button
                  onClick={sendSerialToEmail}
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Send Serial to My Email
                </button>
                <p className="mt-4 text-gray-300">
                  Please save this serial code in a safe place. If you lose it,
                  contact us and we can recover it for you.
                </p>
              </div>
            </div>
          </div>
        </Modal>
        <h3 className="text-xl mb-4 font-bold">
          Total Credits: {totalCredits}
        </h3>
        <h3 className="text-xl mb-6 font-bold">Total unique proxies: {maxProxies}</h3>

        <div className="w-full mb-6 flex flex-col">
          <div className="flex justify-between text-gray-400 mb-4">
            <div>Simultaneous Instances</div>
            <div>Hours</div>
          </div>
          {details.map((item, index) => (
            <div key={index} className="flex justify-between py-2">
              <div>{item.proxies}</div>
              <div>{item.hours}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setSelectedPackage(packageName)}
          className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        >
          Select this Package
        </button>
      </div>
    );
  };

  return (
    <div className=" text-white bg-black">
      {/* <div id="stars"></div>
      <div id="stars2"></div> */}

      {/* <HeroComponent /> */}

      <div className=" p-6 text-white max-w-6xl m-auto">
        {/* <BetaHeader /> */}
        {/* <CreditInfo /> */}
        {/* <BlogList blogs={blogs} /> */}
        <FreeTrial />
        <div className="max-w-6xl overflow-auto">
          {serialCode_state && (
            <>
              <div className="text-2xl font-bold text-purple-600">
                You are going to upgrade serial:
              </div>
              <div className="text-md font-bold text-white">
                {serialCode_state}
              </div>
            </>
          )}
        </div>
        <div className="max-w-6xl mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-6 bg-gray-800 border border-white text-white rounded-xl shadow-md">
            <h2 className="text-3xl mb-4 font-semibold text-white">
              Credit Package 10
            </h2>
            <p className="mb-4">
              This package costs €10 and includes the following:
            </p>
            {renderPackage(10, "Basic", setTotalCredits)}
          </div>
          <div className="p-6 bg-gray-800 border border-white text-white rounded-xl shadow-md">
            <h2 className="text-3xl mb-4 font-semibold text-white">
              Credit Package 25
            </h2>
            <p className="mb-4">
              This package costs €20 and includes the following:
            </p>
            {renderPackage(25, "Premium", setTotalCredits)}
          </div>
          <div className="p-6 bg-gray-800 border border-white text-white rounded-xl shadow-md">
            <h2 className="text-3xl mb-4 font-semibold text-white">
              Custom Credit Package
            </h2>
            <label
              htmlFor="totalEuros"
              className="block text-lg font-medium text-white mb-2"
            >
              Total euros:
            </label>
            <input
              type="number"
              id="totalEuros"
              name="totalEuros"
              value={totalEuros}
              onChange={(e) => setTotalEuros(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-700 text-white shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
            />
            <button
              onClick={() =>
                setCustomPackage(
                  renderPackage(totalEuros, "Custom", setTotalCredits)
                )
              }
              className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Calculate
            </button>
            <div className="mt-4 text-lg text-white">{customPackage}</div>
          </div>
        </div>

        {selectedPackage && (
          <div className="mt-8 text-lg text-white max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-3xl mb-4 font-semibold text-white">
              Selected Package: {selectedPackage}
            </h2>
            <button
              onClick={handleCheckout}
              className="mt-4 w-64 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mx-auto block"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
        {/* <DownloadComponent />
        <BlogList blogs={blogs} /> */}
      </div>
    </div>
  );
}

export default App;
