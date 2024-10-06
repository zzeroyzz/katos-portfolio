import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';
import MenuButton from '../MenuButton/MenuButton';
import Menu from '../Menu/Menu';
import CustomDivider from '../CustomDivider/CustomDivider';
import PortfolioWindow from '../Portfolio/PortfolioWindow';
import ServicesWindow from '../Services/ServicesWindow';
import ContactWindow from '../Contact/ContactWindow';
import SnakeWindow from '../SnakeGame/SnakeWindow';
import AboutWindow from '../About/AboutWindow';
import useZindexManager from '../../hooks/useZIndexManager';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeWindows, setActiveWindows] = useState({
    portfolio: false,
    services: false,
    contact: false,
    snakey: false,
    about: false,
  });
  const isMobile = useBreakpointValue({ base: true, md: false });

  const { bringToFront, windowZIndexes } = useZindexManager();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleMenu = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    setIsMenuOpen((prev) => !prev);
  };

  const toggleWindow = (window) => {
    setActiveWindows((prev) => ({
      ...prev,
      [window]: !prev[window],
    }));
    bringToFront(window);
  };

  const handleMenuItemClick = (componentLabel) => {
    toggleWindow(componentLabel.toLowerCase());
  };

  const renderComponent = () => {
    return (
      <>
        {activeWindows.portfolio && (
          <PortfolioWindow
            isPortfolioWindowOpen={activeWindows.portfolio}
            togglePortfolioWindow={() => toggleWindow('portfolio')}
            bringToFront={() => bringToFront('portfolio')}
            zIndex={windowZIndexes.portfolio}
          />
        )}
        {activeWindows.services && (
          <ServicesWindow
            isWindowOpen={activeWindows.services}
            toggleWindow={() => toggleWindow('services')}
            bringToFront={() => bringToFront('services')}
            zIndex={windowZIndexes.services}
          />
        )}
        {activeWindows.contact && (
          <ContactWindow
            isWindowOpen={activeWindows.contact}
            toggleWindow={() => toggleWindow('contact')}
            bringToFront={() => bringToFront('contact')}
            zIndex={windowZIndexes.contact}
          />
        )}
        {activeWindows.snakey && (
          <SnakeWindow
            isWindowOpen={activeWindows.snakey}
            toggleWindow={() => toggleWindow('snakey')}
            bringToFront={() => bringToFront('snakey')}
            zIndex={windowZIndexes.snakey}
          />
        )}
        {activeWindows.about && (
          <AboutWindow
            isWindowOpen={activeWindows.about}
            toggleWindow={() => toggleWindow('about')}
            bringToFront={() => bringToFront('about')}
            zIndex={windowZIndexes.about}
          />
        )}
      </>
    );
  };

  return (
    <>
      <Box
        as="footer"
        width="100%"
        height="60px"
        bg="gray.200"
        boxShadow="0px -2px 4px rgba(0, 0, 0, 0.1)"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="0 20px"
        position="fixed"
        bottom="0"
        left="0"
      >
        <Flex alignItems="center">
          <MenuButton onClick={toggleMenu}>MENU</MenuButton>
          <CustomDivider />
        </Flex>

        <Box
        w="100%"
        overflow="hidden"
        borderRadius="md"
        bg="gray.200"
        my={4}
      >
        <Text
          display={ !isMobile ? "inline-block": "none"}
          whiteSpace="nowrap"
          fontSize="lg"
          fontWeight="bold"
          animation="scroll 10s linear infinite"
          px={2}
        >
          ** Welcome to my portfolio! Check out my work! **
        </Text>
      </Box>
        <Flex alignItems="center" width="300px">
          <CustomDivider />
          <Icon as={FaClock} w={5} h={5} mr={2} />
          <Text fontSize="xs">{currentTime.toLocaleTimeString()}</Text>
        </Flex>
      </Box>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} onMenuItemClick={handleMenuItemClick} />
      {renderComponent()}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
};


export default Footer;
