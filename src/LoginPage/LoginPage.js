import { LogoScraptify, LogoIPB } from "../Logo";
import LoginMenu from "./LoginMenu";
import { HiasanLogin } from "../Hiasan";
import "../css/login.css";

const LoginPage = () => {
  document.body.style.overflow = "hidden";
  return (
    <div className="login">
      <LogoScraptify />
      <LoginMenu />
      <LogoIPB />
      <HiasanLogin />
    </div>
  );
};

export default LoginPage;
