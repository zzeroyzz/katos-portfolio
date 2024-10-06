import { useState } from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import tetris from '../../assets/tetris.png';
import WindowBox from '../WindowBox/WindowBox';
import SnakeGameIframe from './SnakeGameIframe';
import SnakeWindow from './SnakeWindow';

const SnakeGame = ({ zIndex, bringToFront }) => {
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
        overflow="hidden"
      >
        <VStack spacing={1}>
          <Image src={tetris} boxSize={20} alt="Tetris" />
          <Text>SNAKEY</Text>
        </VStack>
      </Box>

      <SnakeWindow isWindowOpen={isWindowOpen} toggleWindow={toggleWindow} bringToFront={bringToFront} zIndex={zIndex}/>
    </>
  );
};

export default SnakeGame;
