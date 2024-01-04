import "./App.css";
import Button from "./components/button/Button";
function App() {
  return (
    <div className="App">
      <Button content="login" bgColor="blue" />
      <Button content="logout" required />
    </div>
  );
}

export default App;
