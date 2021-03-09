import React from "react";

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
              <input type="Email" className="input" />
            </div>
          </div>
          <div className="passBox">
            <h4>Password</h4>
            <div className="inputs">
              <div className="logoBorder">
                <LogoPassword />
              </div>
              <input type="Password" className="input" />
            </div>
          </div>
        </div>

        <button type="submit" className="signBtn">
          <h4 style={{ color: "#ffffff" }}>Sign in</h4>
        </button>
      </div>
    </div>
  );
};

const LogoEmail = () => {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.75 4.73684C4.75 7.34842 6.88117 9.47368 9.5 9.47368C12.1188 9.47368 14.25 7.34842 14.25 4.73684C14.25 2.12526 12.1188 0 9.5 0C6.88117 0 4.75 2.12526 4.75 4.73684ZM17.9444 20H19V18.9474C19 14.8853 15.6845 11.5789 11.6111 11.5789H7.38889C3.31444 11.5789 0 14.8853 0 18.9474V20H17.9444Z"
        fill="#12465B"
      />
    </svg>
  );
};
const LogoPassword = () => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2857 7.875H13.4286V5.34375C13.4286 2.39766 10.9929 0 8 0C5.00714 0 2.57143 2.39766 2.57143 5.34375V7.875H1.71429C0.767857 7.875 0 8.63086 0 9.5625V16.3125C0 17.2441 0.767857 18 1.71429 18H14.2857C15.2321 18 16 17.2441 16 16.3125V9.5625C16 8.63086 15.2321 7.875 14.2857 7.875ZM10.5714 7.875H5.42857V5.34375C5.42857 3.94805 6.58214 2.8125 8 2.8125C9.41786 2.8125 10.5714 3.94805 10.5714 5.34375V7.875Z"
        fill="#12465B"
      />
    </svg>
  );
};

export default LoginMenu;
