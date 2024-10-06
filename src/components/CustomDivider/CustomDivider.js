import React from 'react';
import { Box } from '@chakra-ui/react';

const CustomDivider = () => {
  return (
    <Box position="relative" height="40px" width="6px" marginX="16px">
      <Box
        position="absolute"
        top="2px"
        left="2px"
        height="100%"
        width="3px"
        bg="gray.400"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width="3px"
        bg="white"
      />
    </Box>
  );
};

export default CustomDivider;
