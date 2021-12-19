import React from "react";
import logo from "../img/logo_game_of_thrones.png";
const Header = () => {
  return (
    <header className="header_logo">
      <img src={logo} width="150px" height="150px" alt="logo"></img>
    </header>
  );
};

export default React.memo(Header);
