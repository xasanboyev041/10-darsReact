import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
};

export default App;
