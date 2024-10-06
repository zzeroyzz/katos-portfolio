import React, { useState, useEffect } from 'react';
import { Box, Text, Progress, Flex, Image } from '@chakra-ui/react';
import kato from '../../assets/kato.png';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [loadingDots, setLoadingDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return oldProgress;
        }
        return Math.min(oldProgress + 5, 100);
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setLoadingDots((prevDots) => {
        if (prevDots.length < 3) {
          return prevDots + '.';
        } else {
          return '';
        }
      });
    }, 500);
    return () => clearInterval(dotInterval);
  }, []);

  useEffect(() => {
    const loadingMessages = [
      "Establishing secure connection...",
      "Scanning for vulnerabilities...",
      "Loading user interface...",
      "Executing startup procedures...",
      "Initializing database connections...",
      "Finalizing security protocols...",
      "Performing system checks...",
      "Synchronizing modules...",
      "Applying configuration settings...",
      "Optimizing memory allocation...",
      "Loading assets and resources...",
      "Preparing graphical interface...",
      "Completing background tasks...",
      "Finalizing database entries...",
      "Securing system integrity...",
      "Almost done, wrapping up..."
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < loadingMessages.length) {
        setVisibleMessages((prev) => {
          const newMessages = [...prev, loadingMessages[messageIndex]];
          if (newMessages.length > 4) {
            newMessages.shift();
          }
          return newMessages;
        });
        messageIndex += 1;
      }
    }, 300);

    return () => clearInterval(messageInterval);
  }, []);
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="black"
      color="white"
      fontFamily="'Courier New', Courier, monospace"
    >
      <Image src={kato} alt="Kato" boxSize="100px" mb={4} />

      <Text fontSize="lg" mb={4}>
        LOADING{loadingDots}
      </Text>
      <Flex width="30%" justifyContent="space-between" alignItems="center">
        <Box flex="2">
          <Progress
            value={progress}
            size="lg"
            height="16px"
            colorScheme="orange"
            hasStripe
            isAnimated
          />
          <Text mt={2} textAlign="right">{progress}%</Text>
        </Box>
      </Flex>

      <Box align="start" minHeight="100px" mt={4}>
        {visibleMessages.map((message, index) => (
          <Text key={index} fontSize="sm">{message}</Text>
        ))}
      </Box>

      <Box mt={4}>
        <Text fontSize="sm">⚠ CAUTION, Do not turn off.</Text>
      </Box>
    </Box>
  );
};

export default LoadingScreen;
