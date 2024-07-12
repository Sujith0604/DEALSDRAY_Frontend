import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Employee from "./context/Employee.jsx";
import Admin from "./context/Admin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Admin>
        <Employee>
          <App />
        </Employee>
      </Admin>
    </BrowserRouter>
  </React.StrictMode>
);
