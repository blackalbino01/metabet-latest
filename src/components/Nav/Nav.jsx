import React from "react";
import { Container } from "./Nav.styles";
import Dropdown from "./Dropdown";
import LogoImg from "../../assets/images/Logo/logo.webp";
import FoxImg from "../../assets/images/fox-halo-1.png";
import { NavLink } from "react-router-dom";
import useBreakpoint from "../../hooks/useBreakpoints";
import LeftSidebar from "../MobileComponents/LeftSidebar/LeftSidebar";

const Header = (props) => {
  const { isDesktop, isTablet, isMobile, isSmallMobile } = useBreakpoint();

  return (
    <>
      <Container
        changeColor={isTablet || isMobile || isSmallMobile ? false : true}
        removeShadow={isTablet || isMobile || isSmallMobile ? false : true}
        removeWidth={isTablet || isMobile || isSmallMobile ? false : true}
      >
        <div className="background ">
          <NavLink to="/">
            <img
              src={isSmallMobile || isMobile || isTablet ? FoxImg : LogoImg}
              alt=""
            />
          </NavLink>
        </div>
        {(isSmallMobile || isMobile || isTablet) && <Dropdown />}
        {isDesktop && (
          <div className="dropdown-section">
            <Dropdown />
          </div>
        )}
        {(isSmallMobile || isMobile || isTablet) && <LeftSidebar {...props} />}
      </Container>
    </>
  );
};

export default Header;
