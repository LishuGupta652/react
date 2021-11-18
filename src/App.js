import { createContext } from "react";
import "./App.css";
import CompA from "./CompA";
import CompC from "./CompC";

const Name = createContext();

function App() {
  return (
    <Name.Provider value={"lishu"}>
      <div className="App">
        <header className="App-header">
          <div className="container-wrapper">
            <div className="container">Hello world</div>
            <CompA />
            <CompC />
          </div>
        </header>
      </div>
    </Name.Provider>
  );
}

export default App;
export { Name };
