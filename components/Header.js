import React from "react";
import Nav from "./Nav";

const Header = (props) => {
  return (
    <div>
      <Nav active={props.active} />
    </div>
  );
};

export default Header;
