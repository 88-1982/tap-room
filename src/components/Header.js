import React from "react";
import Kegs from "./../img/kegs.jpeg";

function Header() {
  return (
    <>
      <h1>Tap Room</h1>
      <img src={Kegs} alt="image-of-kegs" width="2000" height={600}/>
    </>
  );
}

export default Header;