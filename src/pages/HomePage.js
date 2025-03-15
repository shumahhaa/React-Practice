import React from "react";
import { Link } from "react-router-dom";  
import Greeting from "../components/Greeting";
import Counter from "../components/Counter";
import FruitList from "../components/FruitList";
import CatImageFetcher from "../components/CatImageFetcher";

function HomePage() {
  return (
    <div>
      <h1>ホームページ🏠</h1>
      <Link to="/history">私の経歴📜</Link>
      <Greeting name = "shushu"/>
      <Counter />
      <FruitList />
      <CatImageFetcher />
    </div>
  );
}

export default HomePage;