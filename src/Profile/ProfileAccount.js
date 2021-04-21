import React from "react";
import { WhatsApp } from "../Logo";
const ProfAccount = () => {
  return (
    <div className="profAccount">
      <p className="profilTitle">Pengaturan Akun</p>
      <div className="accBox">
        <div className="accleft">
          <img src="smilsquare.jpg" alt="" />
          <div className="profBtns">
            <button className="gantiProfil">Ganti Profil</button>
            <button className="logOut">Log Out</button>
          </div>
        </div>
        <div className="accright">
          <div className="profIn profNama">
            <div className="profFName">
              <h1>First Name</h1>
              <input type="text" value="Seto" />
            </div>
            <div className="profIn">
              <h1>Last Name</h1>
              <input type="text" value="Nurdiyantoro" />
            </div>
          </div>
          <div className="profIn">
            <h1>Email</h1>
            <input type="email" value="nurdiyantoroseto26@gmail.com" />
          </div>
          <div className="profIn pIN ">
            <h1>Password</h1>
            <input type="password" value="setonur2626" />
          </div>
          <div className="profIn">
            <h1>No HP</h1>
            <div className="nomorHP">
              <WhatsApp />
              <p>081332131234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfAccount;
