import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App/App.tsx";
import "./styles/general.css";
import { ThemeContextProvider } from "./contexts/themeContext.tsx";

const children = (
  <ThemeContextProvider>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </ThemeContextProvider>
);

const container = document.getElementById("root");

createRoot(container as Element).render(children);
