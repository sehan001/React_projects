import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("violet")}
            className="px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "violet" }}
          >
            violet
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("white")}
            className="px-4 py-1 rounded-full text- shadow-sm"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
