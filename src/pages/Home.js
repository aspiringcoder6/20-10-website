import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import StarryBackground from "../components/StarryBackground";
import "./Home.css";
import FlowerField from "../components/FlowerField";
import ComplimentStack from "../components/ComplimentStacks";
export default function Home() {
  return (
    <div>
      <ComplimentStack
        messages={[
          "Chúc các chị em: Vui như chim sẻ. Khỏe như đại bàng. Giàu sang như chim phượng. Làm lụng như chim sâu. Sống lâu như chim đà điểu.",
          "hello2",
          "hello3",
          "hello4",
          "hello5",
          "hello6",
        ]}
      />
      <FlowerField />
    </div>
  );
}
