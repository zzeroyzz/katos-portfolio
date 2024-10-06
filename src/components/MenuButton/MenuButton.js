import React from 'react';
import { Box } from '@chakra-ui/react';

const MenuButton = ({ onClick, children }) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      height="40px"  // Adjust height to match the design
      width="150px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      px="16px"  // Padding for the button
      borderRadius="0"  // No border-radius for sharp corners
      fontSize="14px"
      fontWeight="semibold"
      bg="gray.100"  // Light gray background
      color="black"  // Black text
      boxShadow="3px 3px 0px #888"  // Shadow effect to make it appear raised
      _hover={{ bg: 'gray.200' }}  // Slightly darker on hover
    >
      {children}
    </Box>
  );
};

export default MenuButton;
