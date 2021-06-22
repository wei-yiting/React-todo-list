import React from "react";
import firebase from "firebase";

const ListPage = ({
  inputText,
  setInputText,
  recordList,
  setRecordList,
  recordRef,
}) => {
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    setRecordList([...recordList, inputText]);
    setInputText("");
    recordRef.add({
      text: inputText,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div className="input-form-area">
      <form>
        <input
          type="text"
          value={inputText}
          onChange={(evt) => setInputText(evt.target.value)}
        />
        <button type="submit" onClick={onFormSubmit}>
          新增紀錄
        </button>
      </form>
    </div>
  );
};

export default ListPage;
