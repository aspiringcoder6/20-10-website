import "./FlowerField.css";
export default function FlowerField() {
  return (
    <div className="flowerField">
      <img
        src="./field.png"
        style={{ width: "100%", position: "fixed", bottom: 0, zIndex: 1 }}
      />
      <img
        src="./flower1.png"
        style={{
          position: "fixed",
          zIndex: 10,
          width: "50px",
          bottom: 10,
          right: 20,
        }}
      />
      <img
        src="./flower1.png"
        style={{
          position: "fixed",
          zIndex: 10,
          width: "50px",
          bottom: 20,
          left: 20,
        }}
      />
      <img
        src="./flower2.png"
        style={{
          position: "fixed",
          zIndex: 10,
          width: "80px",
          bottom: 0,
          right: 150,
          transform: "rotate(90deg)",
        }}
      />
      <img
        src="./flower3.png"
        style={{
          position: "fixed",
          zIndex: 10,
          width: "100px",
          bottom: "65%",
          right: -60,
          transform: "rotate(90deg)",
        }}
      />
      <img
        src="./flower4.png"
        style={{
          position: "fixed",
          zIndex: 10,
          width: "100px",
          bottom: "55%",
          left: -30,
          transform: "rotate(90deg)",
        }}
      />
      <img
        src="./flower5.png"
        style={{
          position: "fixed",
          zIndex: 10,
          width: "100px",
          bottom: "45%",
          right: 0,
          transform: "rotate(90deg)",
        }}
      />
    </div>
  );
}
