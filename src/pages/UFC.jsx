import React, { useEffect } from "react";
import UFCBanners from "../Components/UFcComponents/UFCBanners";
import { UFCFeaturedBanners } from "../JasonData/FeaturedBannerData";

const UFC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {UFCFeaturedBanners.map((item, index) => {
        return (
          <UFCBanners
            key={index}
            background_img={item.background_img}
            route_path={item.route_path}
            innerData={item.innerData}
          />
        );
      })}
    </>
  );
};

export default UFC;
