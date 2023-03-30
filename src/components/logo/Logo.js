import React from "react";
import { useCountContext } from "../../context/CountContext";
import { LogoContainerStyled } from "./LogoStyles";

const Logo = () => {
  const { appName } = useCountContext()
  console.log(appName)
  return (
    <LogoContainerStyled>
      <h1>{appName}</h1>
      <img
        alt="logo"
        src="https://image.typedream.net/cdn-cgi/image/width=384/https://api.typedream.com/v0/document/public/ac4f6f0d-8160-4e58-9d18-cb5e7c880fb6_Recurso_32_png.png"
      />
    </LogoContainerStyled>
  );
};

export default Logo;
