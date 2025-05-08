// https://medium.com/@hamzamakh/typewriter-effect-in-react-a103a4f385c9

import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 75) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <p className="typewriter_p">{displayText}</p>;
};

export default Typewriter;
