import React from "react";
import { useState } from "react";
const BgChange = () => {
  const [state, setState] = useState("white");
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: state }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg  bg-slate-600 px-3 py-3 rounded-3xl">
            <button
              onClick={() => {
                setState("red");
              }}
              className="px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: " red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setState("blue");
              }}
              className="px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setState("green");
              }}
              className="px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BgChange;
