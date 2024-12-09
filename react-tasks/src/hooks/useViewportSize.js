import { useCallback, useEffect, useState } from 'react';

function useWindowEvent(type, listener, options) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options]);
}

export function useViewportSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const setParams = useCallback((e) => {
        setWidth(e.target.innerWidth)
        setHeight(e.target.innerHeight)
    }, [])

    useWindowEvent('resize', setParams)

    return { height, width }
}