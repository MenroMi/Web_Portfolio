import { useState, useEffect, useRef } from 'react';
import useWindowSize from './useWIndowSize';

export default function useVisible() {
  const [value, setValue] = useState(false);
  const [rootMargin, setRootMargin] = useState('-300px');
  const elemRef = useRef(null);

  useEffect(() => {
    const ref = elemRef.current;

    const options = {
      root: null,
      threshold: 0,
      rootMargin: rootMargin,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setValue(false);
          return;
        }

        setValue(true);
      });
    }, options);

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [elemRef]);

  return { value, setValue, elemRef, setRootMargin, rootMargin };
}
