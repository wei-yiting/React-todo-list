import React, { useState } from "react";
import HomePage from "./HomePage";
import ListPage from "./ListPage";

const App = () => {
  const [onHomePage, setOnHomePage] = useState(true);
  return (
    <div>
      {onHomePage ? (
        <HomePage onHomePage={onHomePage} setOnHomePage={setOnHomePage} />
      ) : (
        <ListPage onHomePage={onHomePage} setOnHomePage={setOnHomePage} />
      )}
    </div>
  );
};

export default App;
