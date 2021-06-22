import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import ListPage from "./ListPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/list" component={ListPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
