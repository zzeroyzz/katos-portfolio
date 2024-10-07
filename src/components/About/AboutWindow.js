import React from 'react';
import { Image, Text, VStack, Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import "@lottiefiles/lottie-player";
import kato from '../../assets/kato.png';
import aboutData from './constants';
import WindowBox from '../WindowBox/WindowBox';

const AboutWindow = ({isWindowOpen, toggleWindow, zIndex, bringToFront}) => {
  const windowSize = useBreakpointValue({
    base: { width: "380px", height: "400px" },
    md: { width: "500px", height: "600px" },
    lg: { width: "700px", height: "600px" },
  });
  return (
    <>
      {isWindowOpen && (
        <WindowBox
          title="About"
          minWidth={windowSize.width}
          minHeight={windowSize.height}
          backgroundColor="white"
          content={
            <VStack spacing={3} backgroundColor="white" p={3}>
              <Box backgroundColor="pink" borderRadius='full'>
              <Image src={kato} boxSize={40} alt="About"  borderRadius='full'/>
</Box>
              {aboutData.map((service, index) => (
                <Flex key={index} textAlign="left" flexDirection="column" gap={2}>
                  <Text fontWeight="bold">{service.title}</Text>
                  <Text fontSize={{base: "xs",lg:"md"}}>{service.description}</Text>
                </Flex>
              ))}
            </VStack>
          }
          onClose={toggleWindow}
          zIndex={zIndex}
          bringToFront={bringToFront}
        />
      )}
    </>
  );
};

export default AboutWindow;
