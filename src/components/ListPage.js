import React, { useState } from "react";
import AddForm from "./AddForm";
import List from "./List";
import "./ListPage.css";

const ListPage = ({ onHomePage, setOnHomePage }) => {
  const [inputText, setInputText] = useState("");
  const [recordList, setRecordList] = useState([]);

  return (
    <div className="whole-container">
      <AddForm
        inputText={inputText}
        setInputText={setInputText}
        recordList={recordList}
        setRecordList={setRecordList}
      />
      <List recordList={recordList} setRecordList={setRecordList} />
      <section className="btn-area">
        <button
          className="back-btn"
          onClick={() => {
            setOnHomePage(!onHomePage);
          }}
        >
          返回首頁
        </button>
      </section>
    </div>
  );
};

export default ListPage;
