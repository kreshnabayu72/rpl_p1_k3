import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./RegisterPage/RegisterPage";
import ItemPage from "./Item/ItemPage";

const App = () => {
  useEffect(() => {
    document.title =
      "Scraptify-Situs jual beli barang bekas antar Mahasiswa IPB";
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/item">
          <ItemPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
