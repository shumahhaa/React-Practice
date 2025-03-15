import React from "react";
import { Link } from "react-router-dom";


function HistoryPage() {
  return (
    <div>
      <h1>私の経歴📜</h1>
      <Link to="/">ホームページ🏠</Link>
      <p>私は長崎大学を卒業しました</p>
    </div>
  );
};

export default HistoryPage;