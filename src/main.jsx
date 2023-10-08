import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/App.css"
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
