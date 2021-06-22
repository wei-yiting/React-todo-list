import React, { useState, useRef } from "react";
import { db } from "../firebase";

const List = ({ recordList, setRecordList }) => {
  const [recordEdit, setRecordEdit] = useState(null);
  const editRef = useRef();

  const updateRecord = (id) => {
    db.collection("records").doc(id).update({
      text: editRef.current.value,
    });
    setRecordEdit(null);
  };

  const handleDelete = (id) => {
    db.collection("records").doc(id).delete();
  };

  const renderedList = recordList.map((record) => {
    return (
      <div key={record.id} className="record">
        {recordEdit === record.id ? (
          <form
            className="record-item"
            onSubmit={(evt) => {
              evt.preventDefault();
              updateRecord(record.id);
            }}
          >
            <input type="text" ref={editRef} defaultValue={record.record} />
            <button type="submit">完成編輯</button>
          </form>
        ) : (
          <div className="record-item">
            <span>{record.record}</span>
            <button
              onClick={() => {
                setRecordEdit(record.id);
              }}
            >
              編輯
            </button>
          </div>
        )}

        <button
          onClick={() => {
            handleDelete(record.id);
          }}
        >
          刪除
        </button>
      </div>
    );
  });
  return <div>{renderedList}</div>;
};

export default List;
