import { LogoScraptify, LogoIPB } from "../Logo";
import RegisterMenu from "./RegisterMenu";
import { HiasanReg } from "../Hiasan";
import "../css/register.css";
const RegisterPage = () => {
  document.body.style.overflow = "hidden";

  return (
    <>
      <LogoScraptify />
      <RegisterMenu />
      <LogoIPB />
      <HiasanReg />
    </>
  );
};

export default RegisterPage;
