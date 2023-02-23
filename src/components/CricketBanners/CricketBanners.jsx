import React from "react";
import { NavLink } from "react-router-dom";
import { CricketBannersContainer } from "./CricketBanners.styles";

const CricketBanners = (props) => {
  return (
    <NavLink to={{ pathname: props.route_path, state: props.innerData }}>
      <CricketBannersContainer
        background={props.background_img}
      ></CricketBannersContainer>
    </NavLink>
  );
};

export default CricketBanners;
