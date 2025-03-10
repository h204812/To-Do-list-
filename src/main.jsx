import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Make sure your main App component is imported

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Ensure this matches your root div in index.html
);
