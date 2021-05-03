import React from "react";
import { Link } from "react-router-dom";
import {
  LogoEmail,
  LogoPassword,
  LogoUser,
  LogoNoTelp,
  LogoNIM,
} from "../Logo";
const RegisterMenu = () => {
  return (
    <div className="regMenu">
      <h1>Create Account</h1>
      <form className="regBox">
        <div className="regInputs">
          <div className="userBoxReg oneReg">
            <h4>Nama Lengkap</h4>
            <div className="inputs">
              <div className="logoBorder">
                <LogoUser />
              </div>
              <input
                type="text"
                className="input"
                onKeyDown={(e) => enterInput(e)}
              />
            </div>
          </div>
          <div className="emailBoxReg oneReg">
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
          <div className="emailBoxReg oneReg">
            <h4>Nomor Telepon</h4>
            <div className="inputs">
              <div className="logoBorder">
                <LogoNoTelp />
              </div>
              <input
                type="Email"
                className="input"
                onKeyDown={(e) => enterInput(e)}
              />
            </div>
          </div>
          <div className="emailBoxReg oneReg">
            <h4>NIM</h4>
            <div className="inputs">
              <div className="logoBorder">
                <LogoNIM />
              </div>
              <input
                type="Email"
                className="input"
                onKeyDown={(e) => enterInput(e)}
              />
            </div>
          </div>
          <div className="passBoxReg oneReg">
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
