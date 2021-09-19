import React from "react";

import "../styles/Header.css";
import sportfield_logo from "../images/logo.png";

export const HeaderComp = () => {
  //        <a href="">Notificaciones</a>

  return (
    <header>
      <img src={sportfield_logo} alt="sportfield logo" />
      <nav>
        <a href="">Salir</a>
      </nav>
    </header>
  );
};
