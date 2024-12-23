import React from "react";
import ReactDOM from "react-dom/client";
import { Kennel } from "./components/kennel.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Kennel />
  </React.StrictMode>
);
