// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './theme';  // Import the custom theme
import { createRoot } from 'react-dom/client'; // Import from react-dom/client

// ReactDOM.render(
//   <React.StrictMode>
//       <ChakraProvider theme={theme}>  {/* Chakra UI Theme Provider */}
//         <App />
//       </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const root = createRoot(document.getElementById('root')); // Create a root.
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>

  </React.StrictMode>
);
