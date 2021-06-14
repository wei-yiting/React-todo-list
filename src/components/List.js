import React from "react";
import nextId from "react-id-generator";

const List = ({ recordList, setRecordList }) => {
  const handleDelete = (indexClicked) => {
    setRecordList(recordList.filter((item, index) => index !== indexClicked));
  };
  const renderedList = recordList.map((record, index) => {
    return (
      <div key={nextId()} className="record">
        <span>{record}</span>
        <button
          onClick={() => {
            handleDelete(index);
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
