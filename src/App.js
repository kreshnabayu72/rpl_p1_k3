import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./RegisterPage/RegisterPage";
import ItemPage from "./Item/ItemPage";
import ProfilePage from "./Profile/ProfilePage";

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
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
