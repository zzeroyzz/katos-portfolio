// PortfolioWindow.js

import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Grid,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Flex,
  useBreakpointValue } from '@chakra-ui/react';
import websites from '../../assets/websites.png';
import resume from '../../assets/resume.png';
import googledrive from '../../assets/googledrive.png';
import { portfolioItems, resumeLink } from './constants';
import WindowBox from '../WindowBox/WindowBox';

const PortfolioWindow = ({
  isPortfolioWindowOpen,
  togglePortfolioWindow,
  toggleWebsitesWindow,
  toggleResumeWindow,
  zIndex,
  bringToFront,
  isWebsitesWindowOpen,
  isResumeWindowOpen,
}) => {
  const handleBoxClick = (url) => {
    window.open(url, '_blank');
  };

  const windowSize = useBreakpointValue({
    base: { width: "380px", height: "400px" },
    md: { width: "500px", height: "400px" },
    lg: { width: "500px", height: "400px" },
  });

  return (
    <>
      {isPortfolioWindowOpen && (
        <WindowBox
          title="Portfolio"
          minWidth={windowSize.width}
          minHeight={windowSize.height}
          backgroundColor="white"
          content={
            <HStack spacing={3} align="start" backgroundColor="white" height="100%">
              <Box
                as="button"
                display="flex"
                flexDirection="column"
                alignItems="center"
                bg="transparent"
                border="none"
                cursor="pointer"
                _hover={{ bg: 'none' }}
                onClick={toggleWebsitesWindow}
              >
                <Image src={websites} boxSize={60} alt="Websites Folder" />
              </Box>

              <Box
                as="button"
                display="flex"
                flexDirection="column"
                alignItems="center"
                bg="transparent"
                border="none"
                cursor="pointer"
                _hover={{ bg: 'none' }}
                onClick={toggleResumeWindow}
              >
                <Image src={resume} boxSize={60} alt="Resume Folder" />
              </Box>
            </HStack>
          }
          onClose={togglePortfolioWindow}
          zIndex={zIndex}
          bringToFront={bringToFront}
        />
      )}

      {isWebsitesWindowOpen && (
        <WindowBox
          title="Websites"
          minWidth="700"
          minHeight="600"
          backgroundColor="white"
          content={
            <VStack spacing={3} align="start" backgroundColor="white" height="100%" minH="50vh" p={10}>
              <Text fontSize="lg" fontWeight="bold">
                Websites I've designed and developed
              </Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                {portfolioItems.map((item, index) => (
                  <Box key={index} cursor="pointer" onClick={() => handleBoxClick(item.url)} maxWidth="400px">
                    <Card border="1px solid black" borderRadius="8px" boxShadow="md" maxW="md" maxH="sm" minH="sm">
                      <CardBody>
                        <Image src={item.image} alt={item.title} borderRadius="lg" width="100%" minWidth="100px" />
                        <Stack mt="6" spacing="3">
                          <Heading size="xs">{item.title}</Heading>
                          <Text fontSize="xs">{item.description}</Text>
                        </Stack>
                      </CardBody>
                      <CardFooter></CardFooter>
                    </Card>
                  </Box>
                ))}
              </Grid>
            </VStack>
          }
          onClose={toggleWebsitesWindow}
          zIndex={zIndex}
          bringToFront={bringToFront}
        />
      )}

      {isResumeWindowOpen && (
        <WindowBox
          title="Resume"
          minWidth="500"
          minHeight="400"
          backgroundColor="white"
          content={
            <Flex
              backgroundColor="white"
              overflow="hidden"
              cursor="pointer"
              onClick={() => handleBoxClick(resumeLink)}
              justifyContent="center"
              alignItems="center"
              h="100%"
            >
              <Image src={googledrive} alt="Google Drive" w="50%" />
            </Flex>
          }
          onClose={toggleResumeWindow}
          zIndex={zIndex}
          bringToFront={bringToFront}
        />
      )}
    </>
  );
};

export default PortfolioWindow;
