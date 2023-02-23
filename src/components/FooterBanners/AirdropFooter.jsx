import React from "react";
import { BetContainer } from "./LiveBetFooter.styles";
import AirdropBanner from "../../assets/images/Footerbanner/AirdropBanner.webp";
import { NavLink } from "react-router-dom";

const LiveBetFooter = () => {
  return (
    <>
      <BetContainer>
        <NavLink to="/Airdrops">
          <img src={AirdropBanner} alt="AirdropBanner" width="100%" />
        </NavLink>
      </BetContainer>
    </>
  );
};

export default LiveBetFooter;
