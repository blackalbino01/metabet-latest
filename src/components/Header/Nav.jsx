import React from "react";
import { Container } from "./Nav.styles";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <>
      <Container>
        <Dropdown />
      </Container>
    </>
  );
};

export default Header;
