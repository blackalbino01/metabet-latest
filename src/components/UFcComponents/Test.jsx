import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import EventInfo from "../FeaturedEvents/EventInfo";
import HightLightsComponent from "../HighLights/HightLightsComponent";

const Test = () => {
  let { group, title } = useParams();

  console.log(title, group, "title");

  const updatedTitle = title.replace(/-/g, " ");

  const { fetchData, response } = useAxios();

  const getBanners = async () => {
    await fetchData({
      method: "GET",
      url: `http://localhost:5002/getGroup/${group}/${title}`,
    });
  };

  useEffect(() => {
    getBanners();
    window.scrollTo(0, 0);
  }, [group, title]);

  console.log("test", response);

  return (
    <>
      <HightLightsComponent hightLightData={response?.highlight} />
    </>
  );
};

export default Test;
