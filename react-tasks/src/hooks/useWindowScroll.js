import { useCallback, useEffect, useState } from 'react';

function useWindowEvent(type, listener, options) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options]);
}

export function useWindowScroll() {
    const [scroll, setScroll] = useState({x: window.scrollX, y: window.scrollY});

    const resizeScroll = useCallback(() => {
        setScroll({
            ...scroll,
            x: window.scrollX, y: window.scrollY
        })
    }, [scroll])

    useWindowEvent('scroll', resizeScroll)

    const scrollTo = ({y}) => {
        window.scrollTo(scroll.x, y)
    }

    return [scroll, scrollTo]
}