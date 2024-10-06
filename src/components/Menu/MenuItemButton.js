import { Button } from '@chakra-ui/react';

const MenuItemButton = ({ children, icon, ...props }) => {
  return (
    <Button
      variant="ghost"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      w="100%"
      borderRadius="0px"  // Removes border radius
      px="10px"
      _hover={{ bg: 'gray.200' }}  // Customize hover effect if needed
      _focus={{ boxShadow: 'none' }}  // Removes focus box shadow
      {...props}
      minHeight="40px"
      
    >
      {icon && <span style={{ marginRight: '10px' }}>{icon}</span>}  {/* Optional icon */}
      {children}
    </Button>
  );
};

export default MenuItemButton;
