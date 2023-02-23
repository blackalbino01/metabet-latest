import React, { useEffect } from "react";
import { getBannersData } from "../api/API";
import RegularFootBallBanners from "../Components/RegularFootBall/RegularFootBallBanners";
import { useAxios } from "../hooks/useAxios";

const RegFootball = () => {
  const { fetchData, response } = useAxios();

  const getBanners = async () => {
    await fetchData({
      method: "GET",
      url: `${getBannersData}?q=football`,
    });
  };

  useEffect(() => {
    getBanners();
  }, []);

  const result = response?.map((item) => console.log(item.eventBanner));
  console.log("football", result);
  return (
    <>
      {response?.map((item, index) => {
        return (
          <RegularFootBallBanners
            key={index}
            background_img={item.eventBanner}
            route_path={item.route_path}
            innerData={item.innerData}
          />
        );
      })}
    </>
  );
};

export default RegFootball;
