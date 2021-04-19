import React from "react";
import { Link } from "react-router-dom";
import { LogoEmail, LogoPassword, LogoUser } from "../Logo";
const RegisterMenu = () => {
  return (
    <div className="regMenu">
      <h1>Create Account</h1>
      <form className="regBox">
        <div className="regInputs">
          <div className="userBoxReg">
            <h4>Name</h4>
            <div className="inputsNama">
              <input
                type="text"
                className="inputNama"
                onKeyDown={(e) => enterInput(e)}
                placeholder="First Name"
              />
              <input
                type="text"
                className="inputNama"
                onKeyDown={(e) => enterInput(e)}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="emailBoxReg">
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
          <div className="passBoxReg">
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
            <h4 style={{ color: "#ffffff" }}>Create Account</h4>
          </button>
        </Link>
      </form>
    </div>
  );
};

const enterInput = (e) => {
  if (e.keyCode === 13) {
    document.getElementsByClassName("signBtn")[0].click();
  }
};

export default RegisterMenu;
