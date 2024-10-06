import { useEffect, useRef } from 'react';
import { Box, Text, Flex, Divider, Icon } from '@chakra-ui/react';
import MenuItemButton from './MenuItemButton';
import { menuItems } from './constants';

const Menu = ({ isOpen, onClose, onMenuItemClick }) => {
  const menuRef = useRef(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-button')) {
        onClose(); // Close the menu when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <Box
      ref={menuRef}  // Attach the ref to the menu box
      className="menu-container"
      position="absolute"
      bottom="60px"  // Just above the footer
      left="20px"   // Align with the left edge of the screen
      bg="gray.50"
      boxShadow="lg"
      width="250px"
      height="300px"
      borderRadius="sm"
      display="flex"
      zIndex="9999" 
    >
      <Box
        bg="pink.200"
        width="60px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Text transform="rotate(-90deg)" position="absolute" top="10%">Menu</Text>
      </Box>

      {/* Right side menu items */}
      <Flex align="left" gap={1} padding="15px" width="100%" flexDirection="column">
        {menuItems.slice(0, 4).map((item, index) => (
          <MenuItemButton key={index} icon={<Icon as={item.icon} />} onClick={() => {
              onMenuItemClick(item.label);
              onClose(); // Close menu after selection
            }}>
            <Text>{item.label}</Text>
          </MenuItemButton>
        ))}

        <Divider my={2} />

        {menuItems.slice(4).map((item, index) => (
          <MenuItemButton key={index} icon={<Icon as={item.icon} />} onClick={() => {
              onMenuItemClick(item.label);
              onClose(); // Close menu after selection
            }}>
            <Text>{item.label}</Text>
          </MenuItemButton>
        ))}
      </Flex>
    </Box>
  );
};

export default Menu;
