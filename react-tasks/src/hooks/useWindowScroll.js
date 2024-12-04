import { useEffect, useState } from 'react';

function useWindowEvent(type, listener, options) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}

export function useWindowScroll() {
    const [scroll, setScroll] = useState({x: window.scrollX, y: window.scrollY});

    useWindowEvent('scroll', ()=>{
        setScroll({
            ...scroll,
            x: window.scrollX, y: window.scrollY
        })
    }, [scroll])

    const scrollTo = ({y}) => {
        window.scrollTo(scroll.x, y)
    }

    return [scroll, scrollTo]
}