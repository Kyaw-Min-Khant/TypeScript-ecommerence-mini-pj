import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StateContextProvider } from "./context/productContext.tsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </BrowserRouter>
);
