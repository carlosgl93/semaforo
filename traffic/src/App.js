import React, { useState } from 'react';

import './App.css';

function App() {
const [color, setColor] = useState("")

  return (
    <div className="App">
      <main id="block">
        <div className="lights">
          <div className="red light">
            <button type="button" id="red" className={"red" === color ? "on" : ""}
            onClick={() => setColor("red")} >
              rojo
            </button>
            </div>
          <div className="yellow light">
            <button type="button" id="yellow" className={"yellow" === color ? "on" : ""}
              onClick={() => setColor("yellow")}>  
            amarillo
            </button>
            </div>
          <div className="green light">
            <button type="button" id="green" className={"green" === color ? "on" : ""}
              onClick={() => setColor("green")} >
              verde
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
