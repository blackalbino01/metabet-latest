import React from "react";
import { Container } from "./landingPage.styles";
import useBreakpoint from "../../hooks/useBreakpoints";
import FeaturedBanners from "../FeaturedBanners/FeaturedBanners";
import { FootballFeaturedBanners } from "../../JasonData/FeaturedBannerData";
import AirdropFooterBanner from "../FooterBanners/AirdropFooterBanner";

const Football = () => {
  const { isDesktop } = useBreakpoint();
  return (
    <>
      <Container>
        {FootballFeaturedBanners.map((item) => {
          return (
            <FeaturedBanners
              key={item.id}
              football_data={item.football_data}
              background_img={item.background_img}
              route_path={item.route_path}
              innerData={item.innerData}
            />
          );
        })}
      </Container>
      {isDesktop && <AirdropFooterBanner />}
    </>
  );
};

export default Football;
