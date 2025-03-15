import React, { useState, useEffect } from "react";

const CatImageFetcher = () => {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => setCatImage(data[0].url));
  }, []);

  return (
    <div>
      <h2>ランダムな猫の画像🐈</h2>
      {catImage ? <img src={catImage} alt="Cat" width="300"/> : <p>...bbbb読み込み中です</p>}
    </div>
  );
};

export default CatImageFetcher;