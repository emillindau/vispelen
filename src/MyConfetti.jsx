import React from "react";
import Confetti from "react-dom-confetti";
import { useEffect } from "react";
import { useState } from "react";

export default () => {
  const [pos, setPos] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const handleClick = ({ clientX, clientY }) => {
      setPos({ x: clientX, y: clientY, active: true });
      setTimeout(() => {
        setPos({ x: 0, y: 0, active: false });
      }, 2000);
    };
    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return <Confetti active={pos.active} />;
};
