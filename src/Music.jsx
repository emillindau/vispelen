import React from "react";
import { useEffect } from "react";
import bgMusic from "./music.mp3";
import { useState } from "react";

export const Music = () => {
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const audio = new Audio(bgMusic);

    const handleClick = ({ clientX, clientY }) => {
      console.log("trying to play", hasPlayed);
      if (!hasPlayed) {
        audio.loop = true;
        audio.play();
        // setHasPlayed(true);
      }
    };
    // audio.addEventListener("loadeddata", () => {
    // });

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      audio.pause();
      setHasPlayed(false);
    };
  }, [hasPlayed]);

  return <div></div>;
};
