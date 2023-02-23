import React from "react";
import { AirdroptBetContainer } from "./LiveBetFooter.styles";
import AirdropBanner from "../../assets/images/Footerbanner/AirdropBanner.webp";
import { NavLink } from "react-router-dom";

const AirdropFooterBanner = () => {
  return (
    <>
      <NavLink to="/Airdrops">
        <AirdroptBetContainer background={AirdropBanner}></AirdroptBetContainer>
      </NavLink>
    </>
  );
};

export default AirdropFooterBanner;
