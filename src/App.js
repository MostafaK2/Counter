import logo from "./logo.svg";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  if (localStorage.getItem("counter") === null) {
    localStorage.setItem("counter", 0);
  }
  const [counter, setCounter] = useState(
    parseInt(localStorage.getItem("counter"))
  );
  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <div>
          <h2>Counter</h2>
          <h2>{counter}</h2>
        </div>
        <div>
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
