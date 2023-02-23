import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import RegularFootBallBanners from "../Components/RegularFootBall/RegularFootBallBanners";
import { footBallMainBanners } from "../JasonData/football";

const RegFootball = () => {
  const location = useLocation();
  const { pathname } = location;

  const p_1 = "/football/champions-league";
  const p_2 = "/football/ligue-1";
  const p_3 = "/football/laliga";
  const p_4 = "/football/premier-league";
  const p_5 = "/football/serie-a";
  const p_6 = "/football/bundesliga";

  return (
    <>
      {location.pathname === !pathname ? (
        footBallMainBanners?.map((item, index) => {
          return (
            <RegularFootBallBanners
              key={index}
              background_img={item?.backgroundImg}
              route_path={item.route_path}
            />
          );
        })
      ) : location.pathname === p_1 ||
        location.pathname === p_2 ||
        location.pathname === p_3 ||
        location.pathname === p_4 ||
        location.pathname === p_5 ||
        location.pathname === p_6 ? (
        <Outlet />
      ) : (
        footBallMainBanners?.map((item, index) => {
          return (
            <RegularFootBallBanners
              key={index}
              background_img={item?.backgroundImg}
              route_path={item.route_path}
            />
          );
        })
      )}
    </>
  );
};

export default RegFootball;
