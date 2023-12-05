import "./styles/tailwind.css";
import "./i18n";

import { BrowserRouter } from "react-router-dom";

import { AppContextProvider } from "./contexts/AppContext";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </BrowserRouter>
  );
}
