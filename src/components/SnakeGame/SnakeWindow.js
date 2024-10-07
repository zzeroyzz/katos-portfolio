import { Box, useBreakpointValue } from '@chakra-ui/react';
import WindowBox from '../WindowBox/WindowBox';
import SnakeGameIframe from './SnakeGameIframe';

const SnakeWindow =({isWindowOpen, toggleWindow, zIndex, bringToFront}) =>{
  const windowSize = useBreakpointValue({
    base: { width: "380px", height: "700px" },
    md: { width: "700px", height: "700px" },
    lg: { width: "900px", height: "700px" },
  });
  console.log(zIndex, 'zIndex')
  return(
<>
{isWindowOpen && (
        <WindowBox
          title="SNAKE GAME"
          backgroundColor="#f4c2c2"
          minWidth={windowSize.width}
          minHeight={windowSize.height}
          content={
            <Box overflow="hidden">
              <SnakeGameIframe/>
          </Box>
        }
          onClose={toggleWindow}
          zIndex={zIndex}
          bringToFront={bringToFront}
        />
      )}</>
  )
};

export default SnakeWindow;
