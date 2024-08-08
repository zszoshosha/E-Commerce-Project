import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import GlobalState from "./components/context/GlobalState.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <GlobalState>
        <App />
      </GlobalState>
    </Router>
  </React.StrictMode>
);




