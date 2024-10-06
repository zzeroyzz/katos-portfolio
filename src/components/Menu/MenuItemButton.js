import { Button } from '@chakra-ui/react';

const MenuItemButton = ({ children, icon, ...props }) => {
  return (
    <Button
      variant="ghost"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      w="100%"
      borderRadius="0px"
      px="10px"
      _hover={{ bg: 'gray.200' }}
      _focus={{ boxShadow: 'none' }}
      {...props}
      minHeight="40px"

    >
      {icon && <span style={{ marginRight: '10px' }}>{icon}</span>}
      {children}
    </Button>
  );
};

export default MenuItemButton;
