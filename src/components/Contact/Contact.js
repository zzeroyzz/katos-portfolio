import { useState } from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import mail from '../../assets/mail.png';
import ContactWindow from './ContactWindow';

const ContactButton = ({ zIndex, bringToFront }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const toggleWindow = () => {
    setIsWindowOpen((prev) => !prev);
    bringToFront();
  };

  return (
    <>
      <Box
        as="button"
        display="flex"
        flexDirection="column"
        alignItems="center"
        bg="transparent"
        border="none"
        cursor="pointer"
        _hover={{ bg: 'none' }}
        onClick={toggleWindow}
      >
        <VStack spacing={1}>
          <Image src={mail} boxSize={20} alt="Contact" />
          <Text>CONTACT</Text>
        </VStack>
      </Box>

    <ContactWindow isWindowOpen={isWindowOpen} toggleWindow={toggleWindow} zIndex={zIndex} bringToFront={bringToFront}/>
    </>
  );
};

export default ContactButton;
