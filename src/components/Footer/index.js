import React from "react";
import { FooterBase } from "./styles";
import LogoMain from "../../assets/img/LogoMain.png";

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="LogoMain" src={LogoMain} alt="AluraFlix logo" />
      </a>
      <p>
        Orgulhosamente criado durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
