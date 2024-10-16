import React, { useState } from "react";
import "./Compliment.css";

export default function ComplimentStack({ messages, name, senders }) {
  const [index, setIndex] = useState(0); // Track the top postcard
  const [isSwiping, setIsSwiping] = useState(false);
  const handleSwipe = () => {
    if (index < messages.length && !isSwiping) {
      setIsSwiping(true);
      setTimeout(() => {
        setIsSwiping(false);
        setIndex((prevIndex) => prevIndex + 1);
      }, 500);
    }
  };
  let nameArray = name.split(" ");
  let lastTwoWords = nameArray.slice(-2).join(" ");

  return (
    <div className="stackContainer">
      {messages.slice(index, index + 5).map((message, index) => (
        <div
          key={index}
          className={`postCardHolder ${
            index === 0 && isSwiping ? "swipe" : ""
          }`}
          style={{
            transform: `rotate(${index * 3 - 6}deg)`,
            zIndex: messages.length - index,
          }}
          onClick={index === 0 ? handleSwipe : null}
        >
          <div style={{ position: "relative" }}>
            <img
              src="/postcard.png"
              alt="postcard"
              style={{ height: "280px" }}
            />
            <p>{message.replace(/{name}/g, lastTwoWords)}</p>
            <div className="info">
              <p>From: Anonymous</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
