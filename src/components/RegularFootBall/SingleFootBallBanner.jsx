import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SingleFootBallBannerContainer } from "./RegularFoot.style";

const SingleFootBallBanner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      {state.map((item, index) => {
        return (
          <SingleFootBallBannerContainer
            background={item.background_img}
            key={index}
          >
            {item.status && <h1>{item.status}</h1>}
            <div className="UFC-featured-banner-wrapper">
              <div className="country_wrapper">
                <img src={item.player_Img_1} alt={item.player_name_1} />
                <span>{item.player_name_1}</span>
              </div>
              <div className="player-VS">
                <span>{item.vs}</span>
                {item.inner_route_path && (
                  <NavLink
                    to={{
                      pathname: item.inner_route_path,
                      state: item.innerData_1,
                    }}
                  >
                    <button>{item.btn_name}</button>
                  </NavLink>
                )}
              </div>
              <div className="country_wrapper">
                <img src={item.player_Img_2} alt={item.player_name_2} />
                <span>{item.player_name_2}</span>
              </div>
            </div>
          </SingleFootBallBannerContainer>
        );
      })}
    </>
  );
};

export default SingleFootBallBanner;
