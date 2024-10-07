import React from 'react';
import { Text, Heading, Flex, useBreakpointValue } from '@chakra-ui/react';
import WindowBox from '../WindowBox/WindowBox';
import ContactForm from './ContactForm';

const ContactWindow = ({isWindowOpen, toggleWindow, zIndex, bringToFront}) =>{
  const windowSize = useBreakpointValue({
    base: { width: "380px", height: "400px" },
    md: { width: "500px", height: "600px" },
    lg: { width: "700px", height: "600px" },
  });
  return(
  <>
  {isWindowOpen && (
    <WindowBox
      title="Contact"
      minWidth={windowSize.width}
      minHeight={windowSize.height}
      backgroundColor="white"
      content={
        <Flex gap={4}  p={6} flexDirection="column" justifyContent="center" alignItems="center">
          <Heading> Get In Touch </Heading>
          <Text fontSize={{base: "xs",lg:"md"}} textAlign="center">
            Have a project in mind, or need help with web development,
            animations, or IT support? Fill out the form below.
          </Text>
          <ContactForm />
        </Flex>
      }
      onClose={toggleWindow}
      zIndex={zIndex}
      bringToFront={bringToFront}
    />
  )}

  </>
)
};
export default ContactWindow;
