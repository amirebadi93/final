import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/Global.css";
// import Home from "./Home.jsx";
import Portfolio from "./Portfolio.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);
