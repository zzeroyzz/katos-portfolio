import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Footer from '../Footer/Footer';
import IconButtons from '../IconButtons/IconButtons';
import porfoliologo from '../../assets/portfolio-logo-transparent.png';

const Home = () => {

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="flex-start"
    >
      <Box
        className="logo-container"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="1"
      >
      <Image src={porfoliologo} />
      </Box>
<IconButtons/>
<Footer/>
    </Box>
  );
};

export default Home;
