import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { ExpensesProvider } from "./context/ExpensesContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExpensesProvider>
      <App />
    </ExpensesProvider>
  </React.StrictMode>,
);

