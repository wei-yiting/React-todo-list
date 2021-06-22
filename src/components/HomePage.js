import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <h1>React 練習專案</h1>
      </header>
      <section className="main-banner">
        <p>歡迎光臨我的頁面</p>
      </section>
      <section className="btn-area">
        <Link to="/list">
          <button className="start-btn">點此開始</button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
