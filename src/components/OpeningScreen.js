import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";

import "./OpeningScreen.css";

const GirlImage = ({ src, name, top, left }) => {
  return (
    <div className="girlImageHolder" style={{ top: top, left: left }}>
      <img src="./pictureHolder.png" className="frame" />
      <img src={src} />
      <p>{name}</p>
    </div>
  );
};
const OpeningScreen = ({ onFadeOutComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFading(true);
    }, 5000);

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  // Once the fade-out completes, trigger the callback to hide this screen
  useEffect(() => {
    if (isFading) {
      const fadeOutTimeout = setTimeout(() => {
        onFadeOutComplete();
      }, 1000); // Match the CSS animation duration

      return () => clearTimeout(fadeOutTimeout);
    }
  }, [isFading, onFadeOutComplete]);

  return (
    <div className={`opening-screen ${isFading ? "fade-out" : ""}`}>
      <div className="opening-text">
        From IT-E10 with love to all 4 of our princesses!
      </div>
      <GirlImage
        src={"./thucuyen.jpg"}
        top={20}
        left={20}
        name={"Nghiêm Thục Uyên"}
      />
      <GirlImage
        src={"./minhanh.jpg"}
        top={20}
        left={"60%"}
        name={"Nguyễn Minh Anh"}
      />
      <GirlImage
        src={"./quynhhoa.jpg"}
        top={"60%"}
        left={20}
        name={"Lưu Quỳnh Hoa"}
      />
      <GirlImage
        src={"./minhthao.jpg"}
        top={"60%"}
        left={"60%"}
        name={"Vũ Đỗ Minh Thảo"}
      />
      <img src="./Heart.png" className="heart" />
    </div>
  );
};

export default OpeningScreen;
