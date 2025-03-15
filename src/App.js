import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import FruitList from "./components/FruitList";

function App() {
  return (
    <div>
      <Greeting name = "shushu"/>
      <Counter />
      <FruitList />
    </div>
  );
}

export default App;