import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

const rootEl = document.getElementById("app");

if (!rootEl) {
  throw Error("Could not mount react");
}

const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);