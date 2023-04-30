import { useState, useEffect, useRef } from "react";

export default function useVisible() {
  const [value, setValue] = useState(false);
  const elemRef = useRef(null);

  useEffect(() => {
    const ref = elemRef.current;

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-300px",
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

  return { value, setValue, elemRef };
}
