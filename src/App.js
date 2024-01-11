import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <div style={{ backgroundColor: color, height: "100vh"}}>
      <div className="menu flex gap-3 w-24" >
        <button
          className="btn"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "blue" , color:"white"}}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "olive" }}
          onClick={() => setColor("olive")}
        >
          Olive
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "gray" }}
          onClick={() => setColor("gray")}
        >
          Gray
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "purple" }}
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "lavender" }}
          onClick={() => setColor("lavender")}
        >
          Lavender
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "white" }}
          onClick={() => setColor("white")}
        >
          White
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "black", color:"white" }}
          onClick={() => setColor("black")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
