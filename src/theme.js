import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Press Start 2P', cursive",
    body: "'Press Start 2P', cursive",
  },
  styles: {
    global: {
      'html, body': {
        overflow: 'hidden', // Prevent scrolling
        height: '100%', // Ensure the body takes up the full height of the screen
        bg:"#ffde8b", // Your background color
        position: 'relative', // For positioning child elements
      },
      '*': {
        margin: 0,
        padding: 0,
      },
      '.logo-container': {
        position: 'fixed',  // Fix the logo in the center
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Center the logo
        zIndex: '-1', // Keep the logo behind other elements
        pointerEvents: 'none', // Allow clicks to pass through the logo
      },
      '.logo': {
        width: '200px', // Adjust the logo size
        opacity: '0.2', // Optional: make it semi-transparent
      },
    },
  },
});

export default theme;
