import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { ComputerSite } from "./Scripts/app";

import { DefaultSite } from "./Scripts/defaultpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DefaultSite} />
          <Route path="/computers" component={ComputerSite} />
          <Route path="/about" children={() => <h2>About2</h2>} />
          <Route path="/contact" children={() => <h2>Contact</h2>} />
          <Route component={DefaultSite} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("container");

ReactDOM.render(<App />, rootElement);
