import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { betNowData } from "../../JasonData/FeaturedBannerData";
import Tabs from "../TabFifa/Tab";
import Times from "../Time/Times";
import { Info, StatisticsContainer } from "./Stats.syle";

const StatsComponent = () => {
  let { group, title, id } = useParams();
  const updatedTitle = title.replace(/-/g, " ");

  const { fetchData, response } = useAxios();

  const getBanners = async () => {
    await fetchData({
      method: "GET",
      url: `http://localhost:5002/getGroup/${group}/${updatedTitle}/${id}/stats`,
    });
  };
  const item = response?.stats?.data;

  useEffect(() => {
    getBanners();
    window.scrollTo(0, 0);
  }, [group, title, id]);

  console.log("res", item?.age_1);

  const [addStyle, setAddStyle] = useState();

  return (
    <>
      <StatisticsContainer text="20px" textGap="12px">
        <div className="featured-banner-wrapper">
          <div className="flag_wrapper">
            <img src={item?.player_Img_1} alt={item?.player_name_1} />
            <span>{item?.player_name_1}</span>
          </div>
          <div className="statistic_rectangle">
            <span>{item?.statistic_1}</span>
            <span>{item?.record_1}</span>
            <span>{item?.height_1}</span>
            <span>{item?.weight_1}</span>
            <span>{item?.stance_1}</span>
            <span>{item?.reach_1}</span>
            <span>{item?.age_1}</span>
          </div>
          <div className="player-VS">
            <span>{item?.vs}</span>
            <Times date={item?.date} />
          </div>
          <div className="statistic_rectangle">
            <span>{item?.statistic_2}</span>
            <span>{item?.record_2}</span>
            <span>{item?.height_2}</span>
            <span>{item?.weight_2}</span>
            <span>{item?.stance_2}</span>
            <span>{item?.reach_2}</span>
            <span>{item?.age_2}</span>
          </div>
          <div className="flag_wrapper">
            <img src={item?.player_Img_2} alt={item?.player_name_2} />
            <span>{item?.player_name_2}</span>
          </div>
        </div>
      </StatisticsContainer>
      <Info>
        {betNowData.map((item) => (
          <div className="WIN" key={item.id}>
            <p> {item.name}</p>
            <button
              onClick={() => setAddStyle(item.id)}
              style={
                item.id === addStyle
                  ? { background: "#fc4c1e" }
                  : { background: "#7b7b7b" }
              }
            >
              {item.btn}
            </button>
          </div>
        ))}
      </Info>
      <Tabs />
    </>
  );
};

export default StatsComponent;
