import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { DarkmodeContextProvider } from "./context/darkmode.tsx";
import { AuthContextProvider } from "./context/auth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkmodeContextProvider>
        <App />
      </DarkmodeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
