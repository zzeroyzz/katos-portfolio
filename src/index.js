import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './theme';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>

  </React.StrictMode>
);
