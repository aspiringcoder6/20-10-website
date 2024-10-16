import React, { useState, useEffect } from "react";

export default function Bee({ butterfly }) {
  const [facingRight, setFacingRight] = useState(false);
  const [beePosition, setBeePosition] = useState({
    top: 0,
    left: 0,
  });
  const generateRandomPosition = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const randomLeft = Math.floor(Math.random() * windowWidth * 0.8);
    const randomTop = Math.floor(Math.random() * windowHeight * 0.8);
    return { left: randomLeft, top: randomTop };
  };
  useEffect(() => {
    const moveBee = () => {
      const newPos = generateRandomPosition();

      // Determine if the bee is moving right or left
      if (newPos.left > beePosition.left) {
        setFacingRight(true);
      } else {
        setFacingRight(false);
      }

      setBeePosition(newPos);
    };

    const intervalId = setInterval(moveBee, 3000 + Math.random() * 1000);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [beePosition]);
  if (!butterfly) {
    return (
      <img
        src={facingRight ? "./bee-right.png" : "./bee-left.png"}
        className={`bee`}
        style={{
          top: `${beePosition.top}px`,
          left: `${beePosition.left}px`,
          transition: "top 3s ease-out, left 3s ease-out",
        }}
      />
    );
  } else {
    return (
      <img
        src={"./butterfly.gif"}
        className={`bee`}
        style={{
          width: "80px",
          top: `${beePosition.top}px`,
          left: `${beePosition.left}px`,
          transition: "top 3s ease-out, left 3s ease-out",
        }}
      />
    );
  }
}
