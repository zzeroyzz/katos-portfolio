import { useState } from 'react';
import { Box, Image, Text, VStack, Flex } from '@chakra-ui/react';
import "@lottiefiles/lottie-player";
import support from '../../assets/support.png';
import services from '../../assets/services.png';
import servicesData from './constants';
import WindowBox from '../WindowBox/WindowBox';
import ServicesWindow from './ServicesWindow';

const Services = ({ zIndex, bringToFront }) => {
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
          <Image src={support} boxSize={20} alt="Services" />
          <Text>SERVICES</Text>
        </VStack>
      </Box>
<ServicesWindow toggleWindow={toggleWindow} isWindowOpen={isWindowOpen} bringToFront={bringToFront} zIndex={zIndex}/>

    </>
  );
};

export default Services;
