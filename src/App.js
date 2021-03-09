import React, { useEffect } from "react";
import LoginPage from "./LoginPage";

import "./index.css";

const App = () => {
  useEffect(() => {
    document.title = "Scraptify";
  }, []);
  return <LoginPage />;
};

export default App;
