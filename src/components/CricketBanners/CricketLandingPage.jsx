import React, { useEffect } from "react";
import {
  Container,
  CricketFeaturedBannersContainer,
} from "./CricketLandingPage.styles";
import useBreakpoint from "../../hooks/useBreakpoints";
import CricketBanners from "./CricketBanners";
import { CricketFeaturedBanners } from "../../JasonData/FeaturedBannerData";
import AirdropFooterBanner from "../FooterBanners/AirdropFooterBanner";
import { NavLink } from "react-router-dom";

const Football = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isDesktop } = useBreakpoint();
  return (
    <>
      <Container>
        {CricketFeaturedBanners.map((item) => {
          console.log("circket", item.flag_Img_2);
          return (
            <CricketFeaturedBannersContainer background={item.background_img}>
              {item.flag_Img_1 && (
                <div className="Circket-featured-banner-wrapper">
                  <div className="country_wrapper">
                    <img src={item.flag_Img_1} alt={item.flag_Img_1} />
                    <span>{item.flag_name_1}</span>
                  </div>
                  <div className="player-VS">
                    <span>{item.date}</span>
                    <span>{item.vs}</span>
                    <div>
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
                  </div>
                  <div className="country_wrapper">
                    <img src={item.flag_Img_2} alt={item.flag_Img_2} />
                    <span>{item.flag_name_2}</span>
                  </div>
                </div>
              )}
            </CricketFeaturedBannersContainer>
          );
        })}
      </Container>
      {isDesktop && <AirdropFooterBanner />}
    </>
  );
};

export default Football;
