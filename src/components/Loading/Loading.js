import React, { useState, useEffect } from 'react';
import { Box, Text, Progress, Flex, Image } from '@chakra-ui/react';
import kato from '../../assets/kato.png';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [loadingDots, setLoadingDots] = useState('');  // State to control dots

  // Simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return oldProgress;
        }
        return Math.min(oldProgress + 5, 100);  // Slower increment for smoother sync
      });
    }, 200);  // Progress every 200ms

    return () => clearInterval(interval);
  }, []);

  // Animate the loading dots
  useEffect(() => {
    const dotInterval = setInterval(() => {
      setLoadingDots((prevDots) => {
        if (prevDots.length < 3) {
          return prevDots + '.';
        } else {
          return '';  // Reset after three dots
        }
      });
    }, 500);  // Adjust speed of dot appearance here (500ms)

    return () => clearInterval(dotInterval);
  }, []);

  // Move loadingMessages inside useEffect to avoid dependency issues
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
            newMessages.shift(); // Keep only the latest 4 messages
          }
          return newMessages;
        });
        messageIndex += 1;
      }
    }, 300);  // Adjust message speed to match the progress bar

    return () => clearInterval(messageInterval);
  }, []);  // Empty dependency array ensures it runs only once

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
      {/* Image at the top */}
      <Image src={kato} alt="Kato" boxSize="100px" mb={4} />

      {/* Loading Text with Dots */}
      <Text fontSize="lg" mb={4}>
        LOADING{loadingDots}  {/* Dots will appear here */}
      </Text>

      {/* Progress Bar and Percentage */}
      <Flex width="30%" justifyContent="space-between" alignItems="center">
        <Box flex="2">
          {/* Fatter and tan-colored progress bar */}
          <Progress
            value={progress}
            size="lg"  // Make the bar "fatter"
            height="16px"  // Increase height for more thickness
            colorScheme="orange"  // Adjust color to tan-like appearance
            hasStripe
            isAnimated
          />
          <Text mt={2} textAlign="right">{progress}%</Text>
        </Box>
      </Flex>

      {/* Loading Messages */}
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
