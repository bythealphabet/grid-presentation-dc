import React from "react";
import ThemeProvider from "./context/ThemeContext";
import { hot } from "react-hot-loader/root";
import AuthProvider from "./auth/AuthContext/AuthContext";
import { GlobalStyles } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider>
          <GlobalStyles />
          <MainRouter />
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default hot(App);
