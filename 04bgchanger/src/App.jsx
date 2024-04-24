import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >BG-Changer here!!</div>
  );
}

export default App;
