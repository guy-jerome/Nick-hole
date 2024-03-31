import { useState } from "preact/hooks";

export default function MainPage() {
  const handleDragStart = (event: any) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const imageWidth = 500; // Set this to the actual width of your image
    const imageHeight = 500; // Set this to the actual height of your image
    setPosition({
      x: e.clientX + imageWidth / 2,
      y: e.clientY - imageHeight / 2,
    });
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div id="main-page" onMouseMove={handleMouseMove}>
      <h1>Welcome to the Nick-Hole</h1>
      <p>This is the land of everything Nicky!</p>
      <img className="image" src="src/assets/Mug.jpg" alt="Mug" id="mug"></img>
      <img
        className="clothing tophat"
        src="src/assets/tophat.png"
        alt="Top Hat"
        id="tophat"
        onDragStart={handleDragStart}
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
          width: "100px",
          height: "100px",
        }}
      ></img>
    </div>
  );
}
