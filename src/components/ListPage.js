import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";

import AddForm from "./AddForm";
import List from "./List";
import "./ListPage.css";

const ListPage = () => {
  const recordRef = db.collection("records");
  const [inputText, setInputText] = useState("");
  const [recordList, setRecordList] = useState([]);

  const getRecordData = () => {
    db.collection("records").onSnapshot((querySnapshot) => {
      setRecordList(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          record: doc.data().text,
        }))
      );
    });
  };

  useEffect(() => {
    getRecordData();
  }, []);

  return (
    <div className="whole-container">
      <AddForm
        inputText={inputText}
        setInputText={setInputText}
        recordList={recordList}
        setRecordList={setRecordList}
        recordRef={recordRef}
      />
      <List recordList={recordList} setRecordList={setRecordList} />
      <section className="btn-area">
        <Link to="/">
          <button className="back-btn">返回首頁</button>
        </Link>
      </section>
    </div>
  );
};

export default ListPage;
