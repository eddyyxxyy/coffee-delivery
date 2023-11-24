import "./styles/tailwind.css";
import "./i18n";

import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
