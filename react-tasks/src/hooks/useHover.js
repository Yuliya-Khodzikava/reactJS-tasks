import { useRef, useState, useEffect } from "react"

export function useHover() {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);

    const handleMouseOver = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);

    useEffect(() => {
        console.log('hello');
        const node = ref.current;
        if (node) {
          node.addEventListener("mouseover", handleMouseOver);
          node.addEventListener("mouseout", handleMouseOut);
    
          return () => {
            node.removeEventListener("mouseover", handleMouseOver);
            node.removeEventListener("mouseout", handleMouseOut);
          };
        }
      }, [ref]);

    return { hovered, ref }
}