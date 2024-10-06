import React from 'react';
import { Image, Text, VStack, Flex, useBreakpointValue } from '@chakra-ui/react';
import "@lottiefiles/lottie-player";
import services from '../../assets/services.png';
import servicesData from './constants';
import WindowBox from '../WindowBox/WindowBox';

const ServicesWindow = ({isWindowOpen, toggleWindow, zIndex, bringToFront }) => {
  const windowSize = useBreakpointValue({
    base: { width: "380px", height: "600px" },
    md: { width: "500px", height: "600px" },
    lg: { width: "700px", height: "600px" },
  });
  return(
    <>
    {isWindowOpen && (
      <WindowBox
        title="Services"
        minWidth={windowSize.width}
        minHeight={windowSize.height}
        backgroundColor="white"
        content={
          <VStack spacing={3} backgroundColor="white" p={3}>
            <Image src={services} boxSize={20} alt="Services" />

            {servicesData.map((service, index) => (
              <Flex key={index} textAlign="left" flexDirection="column" gap={2}>
                <Text fontWeight="bold">- {service.title}:</Text>
                <Text fontSize="md">{service.description}</Text>
              </Flex>
            ))}
          </VStack>
        }
        onClose={toggleWindow}
        zIndex={zIndex}  // Pass zIndex to WindowBox
        bringToFront={bringToFront}  // Bring to the front when clicked
      />
    )}
    </>
  )
}
export default ServicesWindow;
