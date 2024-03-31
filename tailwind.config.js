module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        clifford: "#da373d", // Your custom color, if needed
        // Grayscale palette applied universally
        gray: {
          900: "#121212", // Very dark gray, almost black, for backgrounds
          800: "#1A1A1A", // Darker gray, for lower elevation surfaces
          700: "#232323", // Dark gray, for UI elements and lower elevation surfaces
          600: "#2C2C2C", // Mid dark gray, for components and cards
          500: "#353535", // Neutral dark gray, for secondary elements and accents
          400: "#3E3E3E", // Medium gray, for hover states and subtle accents
          300: "#474747", // Lighter gray, for text and icons on dark backgrounds
          200: "#525252", // Very light gray, for borders and dividers on dark surfaces
          100: "#8C8C8C", // Lightest gray, for contrast against dark backgrounds
        },
        purple: {
          900: "#4B367C", // Very dark Twitch purple, for backgrounds
          800: "#5F4D8B", // Darker Twitch purple, for lower elevation surfaces
          700: "#725C9A", // Dark Twitch purple, for UI elements and lower elevation surfaces
          600: "#8670A9", // Mid dark Twitch purple, for components and cards
          500: "#7A5E9A", // Darker Twitch purple, more aligned with Twitch's iconic branding for secondary elements and accents
          400: "#8E7CA8", // Medium Twitch purple, for hover states and subtle accents
          300: "#A398B7", // Lighter Twitch purple, for text and icons on dark backgrounds
          200: "#B7B4C6", // Very light Twitch purple, for borders and dividers on dark surfaces
          100: "#CBC0D5", // Lightest Twitch purple, for contrast against dark backgrounds
        },
        blue: {
          900: "#4B367C", // Very dark Twitch purple, for backgrounds
          800: "#5F4D8B", // Darker Twitch purple, for lower elevation surfaces
          700: "#725C9A", // Dark Twitch purple, for UI elements and lower elevation surfaces
          600: "#8670A9", // Mid dark Twitch purple, for components and cards
          500: "#7A5E9A", // Darker Twitch purple, more aligned with Twitch's iconic branding for secondary elements and accents
          400: "#8E7CA8", // Medium Twitch purple, for hover states and subtle accents
          300: "#A398B7", // Lighter Twitch purple, for text and icons on dark backgrounds
          200: "#B7B4C6", // Very light Twitch purple, for borders and dividers on dark surfaces
          100: "#CBC0D5", // Lightest Twitch purple, for contrast against dark backgrounds
        },
      },
      // Further extend other theme properties as needed
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
