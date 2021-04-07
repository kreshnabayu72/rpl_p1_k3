import React from "react";
import { Link } from "react-router-dom";
import { LogoEmail, LogoPassword } from "../Logo";
const LoginMenu = () => {
  return (
    <div className="loginMenu">
      <h1>Sign in to continue</h1>
      <div className="loginBox">
        <div className="loginInputs">
          <div className="emailBox">
            <h4>Email</h4>
            <div className="inputs">
              <div className="logoBorder">
                <LogoEmail />
              </div>
              <input
                type="Email"
                className="input"
                onKeyDown={(e) => enterInput(e)}
              />
            </div>
          </div>
          <div className="passBox">
            <h4 style={{ marginTop: "-16px" }}>Password</h4>
            <div className="inputs">
              <div className="logoBorder">
                <LogoPassword />
              </div>
              <input
                type="Password"
                className="input"
                onKeyDown={(e) => enterInput(e)}
              />
            </div>
          </div>
        </div>

        <Link to="/home">
          <button type="submit" className="signBtn">
            <h4 style={{ color: "#ffffff" }}>Sign in</h4>
          </button>
        </Link>
        <Link to="/register">
          <p className="regLink">No account? Create one</p>
        </Link>
      </div>
    </div>
  );
};

const enterInput = (e) => {
  if (e.keyCode === 13) {
    document.getElementsByClassName("signBtn")[0].click();
  }
};

export default LoginMenu;
