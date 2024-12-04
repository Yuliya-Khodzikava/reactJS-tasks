import { useEffect, useState } from 'react';

function useWindowEvent(type, listener, options) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}

export function useViewportSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useWindowEvent('resize', (e)=>{
        setWidth(e.target.innerWidth)
        setHeight(e.target.innerHeight)
    }, [width, height])

    return { height, width }
}