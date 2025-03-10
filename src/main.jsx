import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Portfolio />
    </React.StrictMode>
  );
} else {
  console.error("Элемент #root не найден в index.html!");
}
