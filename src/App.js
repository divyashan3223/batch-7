import { useState } from "react";
import "./App.css";
import EffectComponent from "./hooks/EffectComponent";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>change</button>

      {show && <EffectComponent />}
    </div>
  );
}

export default App;
