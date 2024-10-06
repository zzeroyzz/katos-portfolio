import { useState } from 'react';

const useZIndexManager = () => {
  const [topZIndex, setTopZIndex] = useState(10);
  const [windowZIndexes, setWindowZIndexes] = useState({
    portfolio: 1,
    services: 2,
    contact: 3,
    snakey: 4,
    about: 5,
  });

  const bringToFront = (windowName) => {
    setTopZIndex((prevZIndex) => prevZIndex + 1);
    setWindowZIndexes((prev) => {
      console.log(`Bringing ${windowName} to front with zIndex: ${topZIndex + 1}`);
      return {
        ...prev,
        [windowName]: topZIndex + 1,
      };
    });
  };


  return { windowZIndexes, bringToFront };
};

export default useZIndexManager;
