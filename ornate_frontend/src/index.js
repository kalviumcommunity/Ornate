import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./App";
import { UploadContextProvider } from "./context/UploadContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UploadContextProvider>
        <App />
      </UploadContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
