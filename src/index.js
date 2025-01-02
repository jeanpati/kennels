import React from "react";
import ReactDOM from "react-dom/client";
import { Kennel } from "./components/kennel.js";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Kennel />
    </Router>
  </React.StrictMode>
);
