import React from "react";
import "./HomePage.css";

const HomePage = ({ onHomePage, setOnHomePage }) => {
  return (
    <div>
      <header className="header">
        <h1>React 練習專案</h1>
      </header>
      <section className="main-banner">
        <p>歡迎光臨我的頁面</p>
      </section>
      <section className="btn-area">
        <button
          className="start-btn"
          onClick={() => {
            setOnHomePage(!onHomePage);
          }}
        >
          點此開始
        </button>
      </section>
    </div>
  );
};

export default HomePage;
