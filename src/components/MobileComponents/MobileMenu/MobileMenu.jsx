import React from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import { MobileMenuContainer } from "./Mobile.style";

const MobileMenu = (props) => {
  console.log(props.location.pathname);
  return (
    <MobileMenuContainer>
      <div className="background-wrapper">
        <LeftSidebar {...props} />
      </div>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
