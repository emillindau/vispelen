import { useState, useEffect } from "react";

export function useImage(start, stop) {
  const [image, setImage] = useState(start);

  useEffect(() => {
    const handle = setInterval(() => {
      setImage((prevNumber) => {
        if (prevNumber === stop) {
          return start;
        }
        return ++prevNumber;
      });
    }, 4500);

    return () => clearInterval(handle);
  }, [start, stop]);

  const nextImage = image + 1 > stop ? start : image + 1;

  return {
    image: `${image}`,
    nextImage: `${nextImage}`,
  };
}
