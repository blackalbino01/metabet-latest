import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { bData_1 } from "../../JasonData/FeaturedBannerData";
import { BetContainer, Info } from "../FeaturedEvents/EventInfo.styles";
import Tabs from "../TabFifa/Tab";
import Times from "../Time/Times";

const RegFootBallStat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { state } = useLocation();
  console.log(state);
  const [addStyle, setAddStyle] = useState();

  return (
    <>
      <BetContainer text="20px" textGap="12px">
        {state.map((item, index) => {
          return (
            <div className="featured-banner-wrapper">
              <div className="flag_wrapper" key={index}>
                <img src={item.player_Img_1} alt={item.player_name_1} />
                <span>{item.player_name_1}</span>
              </div>
              <div className="statistic_rectangle">
                <span>{item.statistic_1}</span>
                <span>{item.record_1}</span>
                <span>{item.height_1}</span>
                <span>{item.weight_1}</span>
                <span>{item.reach_1}</span>
                <span>{item.age_1}</span>
              </div>
              <div className="player-VS">
                <span>{item.vs}</span>
                <Times date={item.date} status={item.event_status} />
              </div>
              <div className="statistic_rectangle">
                <span>{item.statistic_2}</span>
                <span>{item.record_2}</span>
                <span>{item.height_2}</span>
                <span>{item.weight_2}</span>
                <span>{item.reach_2}</span>
                <span>{item.age_2}</span>
              </div>
              <div className="flag_wrapper">
                <img src={item.player_Img_2} alt={item.player_name_2} />
                <span>{item.player_name_2}</span>
              </div>
            </div>
          );
        })}
      </BetContainer>
      <Info>
        {bData_1.map((item) => (
          <div className="WIN" key={item.id}>
            <p> {item.name}</p>
            <button
              disabled={state[0].date === "14 December 2022, 00:00" && true}
              onClick={() => setAddStyle(item.id)}
              style={
                item.id === addStyle
                  ? { background: "#fc4c1e" }
                  : { background: "#7b7b7b" }
              }
            >
              {state[0].date === "14 December 2022, 00:00" && true
                ? "Event Ended"
                : item.btn}
            </button>
          </div>
        ))}
      </Info>
      <Tabs />
    </>
  );
};

export default RegFootBallStat;
