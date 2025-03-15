import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import FruitList from "./components/FruitList";
import CatImageFetcher from "./components/CatImageFetcher";

function App() {
  return (
    <div>
      <Greeting name = "shushu"/>
      <Counter />
      <FruitList />
      <CatImageFetcher />
    </div>
  );
}

export default App;