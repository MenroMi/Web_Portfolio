import { useEffect, useState, useRef } from "react";

const toType = ["HI, I AM A"];
const typingDelay = 500;

export default function useTyped() {
  const [end, setEnd] = useState(false);
  const [txt, setTxt] = useState("");
  const timeoutRef = useRef(null);

  const startTyping = () => {
    let delta = 200 - Math.random() * 100;
    let i = 0 % toType.length; // 0
    let fullText = toType[i];

    if (txt.length === fullText.length) {
      setEnd(true);
    }

    if (end) {
      return;
    } else {
      setTxt((txt) => fullText.substring(0, txt.length + 1));
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(startTyping, delta);
    }
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(startTyping, typingDelay);
  }, []);

  return { txt };
}
