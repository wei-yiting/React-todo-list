import React from "react";

const ListPage = ({ inputText, setInputText, recordList, setRecordList }) => {
  const onFormSubmit = (evt) => {
    evt.preventDefault();
    setRecordList([...recordList, inputText]);
    setInputText("");
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
