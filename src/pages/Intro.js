import "./Intro.css";
import React, { useState, useEffect } from "react";
import OpeningScreen from "../components/OpeningScreen";
import { useNavigate } from "react-router-dom";
import { ZIndex } from "tsparticles-engine";
import FlowerField from "../components/FlowerField";
import ComplimentStack from "../components/ComplimentStacks";
import Bee from "../components/Bee";
export default function Intro() {
  const [isLighter, setIsLighter] = useState(false);
  const [isOpeningScreenVisible, setOpeningScreenVisible] = useState(true);

  const [name, setName] = useState("");
  const [reveal, setReveal] = useState(false);
  const handleFadeOutComplete = () => {
    setOpeningScreenVisible(false);
  };
  const handleButtonClick = () => {
    setIsLighter(!isLighter);
    setTimeout(() => {
      setReveal(true);
    }, 1000);
  };
  const cloudImages = [
    "cloud1.png", // replace with your cloud image paths
    "cloud2.png",
    "cloud3.png",
    "cloud4.png",
    // add more cloud images as needed
  ];
  const [clouds, setClouds] = useState([]);
  useEffect(() => {
    const createCloud = () => {
      const randomCloud =
        cloudImages[Math.floor(Math.random() * cloudImages.length)];
      const startPosition = Math.random() * 5;
      const endPosition = 0;

      const newCloud = {
        id: Math.random().toString(36).substring(7),
        src: randomCloud,
        style: {
          position: "absolute",
          top: `${startPosition}vh`,
          animation: `floatCloud 15s linear`,
          transform: `translateX(${endPosition}vw)`,
          zIndex: 10,
        },
      };

      setClouds((prevClouds) => [...prevClouds, newCloud]);

      // Remove the cloud after 15 seconds
      setTimeout(() => {
        setClouds((prevClouds) =>
          prevClouds.filter((cloud) => cloud.id !== newCloud.id)
        );
      }, 15000);
    };

    // Create an initial cloud immediately
    createCloud();

    // Set up the interval to create clouds every 15 seconds after the first one
    const interval = setInterval(() => {
      createCloud();
    }, 15000);

    return () => {
      clearInterval(interval);
    }; // Cleanup on component unmount
  }, []);
  return (
    <>
      {isOpeningScreenVisible && (
        <OpeningScreen onFadeOutComplete={handleFadeOutComplete} />
      )}
      <div className={`mainPage`}>
        <div className="sky">
          {clouds.map((cloud) => (
            <img
              key={cloud.id}
              src={cloud.src}
              className="cloud"
              style={cloud.style}
              alt="Cloud"
            />
          ))}
          {reveal && (
            <ComplimentStack
              messages={[
                "Chúc các chị em: Vui như chim sẻ. Khỏe như đại bàng. Giàu sang như chim phượng. Làm lụng như chim sâu. Sống lâu như chim đà điểu.",
                "Hey {name}, roses are red, Violets are blue, E10 is da best, because of girl like you.",
                "Boiz IT-E10 gõ phím 5 ngón, trùm mafia internet chúc các bạn nữ DS&AI 8386, vạn sự như ý, triệu sự như mơ, tỉ triệu bất ngờ, tràn ngập may mắn",
                "beep boop câu chúc này hoàn toàn không được viết bởi chatgpt theo tinh thần nam sinh e10. Chúc chị em 20.10 bùng nổ hạnh phúc xinh đẹp, A+ full môn nghenn",
                "Wish you all keep shining with happiness, love, and success. May you always glow with confidence and strength, embracing every moment with joy.",
                "{name} tuyệt thứ 10 thế giới thì không ai đứng thứ 123456789. Chúc bạn kỉ niệm ngày 20/10 trọn vẹn nhaa",
              ]}
              name={name}
            />
          )}
          <h1 className={`flowerText ${reveal && "complimentText"}`}>
            {reveal
              ? "Lá thư của các bạn trai E10 dành cho:"
              : "What's your name?"}
          </h1>
          <div
            className={`inputGroup ${reveal && "complimentPlaque"}`}
            style={{ position: "relative" }}
          >
            <img
              src="/floweryplaque.png"
              style={{ width: "100%", marginTop: "-30px", marginLeft: "10px" }}
            />
            <input
              type="text"
              value={name}
              disabled={reveal}
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{
                position: "absolute",
                top: "20%",
                left: "15%",
                height: "20%",
                background: "none",
                outline: "none",
                border: "none",
                fontFamily: "Vietfont",
                color: "white",
                fontSize: "40px",
                textAlign: "center",
                width: "70%",
              }}
            />
          </div>
          <div className="center">
            {!reveal && (
              <button
                className={`flowerButton ${name && "show"} ${
                  isLighter && "lighter"
                }`}
                onClick={handleButtonClick}
              >
                <img src="/flowerButton.png" />
                <p>Confirm</p>
              </button>
            )}
          </div>
        </div>
        <img
          src="/sunny.gif"
          style={{
            position: "fixed",
            width: "50vw",
            right: -50,
            top: -40,
            zIndex: 1,
          }}
        />
        <Bee butterfly={false} />
        <Bee butterfly={true} />
        <FlowerField />
      </div>
    </>
  );
}
