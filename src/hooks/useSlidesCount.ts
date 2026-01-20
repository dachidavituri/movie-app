import { useState, useEffect } from "react";

export function useSlidesCount(max = 6) {
  const [slides, setSlides] = useState(max);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;

      if (w < 480) setSlides(1);
      else if (w < 768) setSlides(2);
      else if (w < 1024) setSlides(3);
      else if (w < 1280) setSlides(4);
      else setSlides(max);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [max]);

  return slides;
}
