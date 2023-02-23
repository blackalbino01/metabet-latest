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

  const { fetchData, response } = useAxios();

  const getBanners = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/${group}/${title}/${id}/stats`,
    });
  };
  const item = response?.stats;

  useEffect(() => {
    getBanners();
    window.scrollTo(0, 0);
  }, [group, title, id]);

  // console.log("res", item);

  const [addStyle, setAddStyle] = useState();

  return (
    <>
      <StatisticsContainer text="20px" textGap="12px">
        <div className="featured-banner-wrapper">
          <div className="flag_wrapper">
            {item?.player_Img_1 && (
              <div>
                <img src={item?.player_Img_1} alt={item?.player_name_1} />
              </div>
            )}
            {item?.flag_Img_1 && (
              <div>
                <img src={item?.flag_Img_1} alt={item?.flag_name_1} />
              </div>
            )}
            {item?.player_name_1 && <span>{item?.player_name_1}</span>}
            {item?.flag_name_1 && <span>{item?.flag_name_1}</span>}
          </div>
          <div className="statistic_rectangle">
            <span>Statistics:</span>
            {item?.coach_1 && (
              <>
                <span>Record: {item?.record_1}</span>
                <span>Home Record: {item?.home_record_1}</span>
                <span>Away Record: {item?.away_record_1}</span>
                <span>
                  GF: {item?.gf_ga_gd_1.slice(0, 2)} GA:
                  {item?.gf_ga_gd_1.slice(3, 5)} GD:
                  {item?.gf_ga_gd_1.slice(6, 10)}
                </span>
                <span>Coach: {item?.coach_1}</span>
                <span>LP: {item?.league_position_1}</span>
                <span>Ranking: {item?.fifa_club_ranking_1}</span>
              </>
            )}
            {item?.height_1 && (
              <>
                <span>Record: {item?.statistic_1}</span>
                <span>Home Record:{item?.record_1}</span>
                <span>Away Record:{item?.height_1}</span>
                <span>{item?.weight_1}</span>
                <span>Coach:{item?.stance_1}</span>
                <span>League Position:{item?.reach_1}</span>
                <span>Ranking:{item?.fifa_club_ranking_1}</span>
              </>
            )}
          </div>
          <div className="player-VS">
            <span>{item?.vs}</span>
            <span>{item?.pool_status}</span>
            <Times date={item?.date} />
          </div>
          <div className="statistic_rectangle">
            <span>Statistics:</span>
            {item?.coach_2 && (
              <>
                <span>Record: {item?.record_2}</span>
                <span>Home Record: {item?.home_record_2}</span>
                <span>Away Record: {item?.away_record_2}</span>
                <span>
                  GF: {item?.gf_ga_gd_2.slice(0, 2)} GA:
                  {item?.gf_ga_gd_2.slice(3, 5)} GD:
                  {item?.gf_ga_gd_2.slice(6, 10)}
                </span>
                <span>Coach: {item?.coach_2}</span>
                <span>LP: {item?.league_position_2}</span>
                <span>Ranking: {item?.fifa_club_ranking_2}</span>
              </>
            )}
            {item?.height_2 && (
              <>
                <span>{item?.statistic_2}</span>
                <span>{item?.record_2}</span>
                <span>{item?.height_2}</span>
                <span>{item?.weight_2}</span>
                <span>{item?.stance_2}</span>
                <span>{item?.reach_2}</span>
                <span>{item?.age_2}</span>
              </>
            )}
          </div>
          <div className="flag_wrapper">
            {item?.player_Img_2 && (
              <div>
                <img src={item?.player_Img_2} alt={item?.player_name_2} />
              </div>
            )}
            {item?.flag_Img_2 && (
              <div>
                <img src={item?.flag_Img_2} alt={item?.flag_name_2} />
              </div>
            )}
            {item?.player_name_2 && <span>{item?.player_name_2}</span>}
            {item?.flag_name_2 && <span>{item?.flag_name_2}</span>}
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
