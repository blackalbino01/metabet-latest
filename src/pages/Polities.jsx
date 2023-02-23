import React from "react";
import FeaturedBanners from "../Components/FeaturedBanners/FeaturedBanners";
import AirdropFooterBanner from "../Components/FooterBanners/AirdropFooterBanner";
import { PoliticsContainer } from "../Components/Politics/Politics.styles";
import useBreakpoint from "../hooks/useBreakpoints";
import { Politics_banner_data } from "../JasonData/FeaturedBannerData";

const Polities = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <>
      <PoliticsContainer
        displayType="grid"
        gridTemplateColum="1fr 1fr 1fr"
        className="grid-pad"
      >
        {Politics_banner_data.map((item, index) => {
          return (
            <FeaturedBanners
              id={item.id}
              key={index}
              data_name={item.data_name}
              background_img={item.background_img}
              route_path={item.route_path}
              btn_name={item.btn_name}
              innerData={item.innerData}
            />
          );
        })}
      </PoliticsContainer>
    </>
  );
};

export default Polities;
