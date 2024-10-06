import React from 'react';
import { Box } from '@chakra-ui/react';

const MenuButton = ({ onClick, children }) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      height="40px"
      width="150px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      px="16px"
      borderRadius="0"
      fontSize="14px"
      fontWeight="semibold"
      bg="gray.100"
      color="black"
      boxShadow="3px 3px 0px #888"
      _hover={{ bg: 'gray.200' }}
    >
      {children}
    </Box>
  );
};

export default MenuButton;
