import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BetContainer, Info } from "./CricketEvent.styles";
import Tabs from "../TabFifa/Tab";
import Times from "../Time/Times";
import { betNowData } from "../../JasonData/FeaturedBannerData";

const CricketEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { state } = useLocation();
  const [date] = useState(state[0].date);
  console.log(date);

  const [addStyle, setAddStyle] = useState("");
  const [getId] = useState(state[0].id);
  const [getName] = useState(state[0].country_name_1);
  const [getReview] = useState(state[0].review_video);
  const [getPrediction] = useState(state[0].prediction_video);
  const [eventStatus] = useState(state[0].event_ended);
  console.log(eventStatus);

  const str = "2023-01-29";

  const testDate = new Date(str);

  // ✅ Get timestamp in Milliseconds
  const timestamp = testDate.getTime();
  console.log("test", timestamp); //

  return (
    <>
      <BetContainer text="20px" textGap="12px" statsGap="40px">
        {state.map((item, index) => {
          console.log(item.date >= 19);
          return (
            <div className="featured-banner-wrapper">
              <div className="flag_wrapper" key={index}>
                <img src={item.flag_Img_1} alt={item.flag_name_1} />
                <span>{item.flag_name_1}</span>
              </div>
              <div className="statistic_rectangle">
                <span>{item.statistic_1}</span>
                <span>{item.record_1}</span>
                <span>{item.height_1}</span>
                <span>{item.weight_1}</span>
                <span>{item.stance_1}</span>
                <span>{item.reach_1}</span>
                <span>{item.age_1}</span>
                <span>{item.age_4}</span>
              </div>
              <div className="player-VS">
                <span>{item.vs}</span>
                <Times date={item.date} />
              </div>
              <div className="statistic_rectangle">
                <span>{item.statistic_2}</span>
                <span>{item.record_2}</span>
                <span>{item.height_2}</span>
                <span>{item.weight_2}</span>
                <span>{item.stance_2}</span>
                <span>{item.reach_2}</span>
                <span>{item.age_2}</span>
                <span>{item.age_3}</span>
              </div>
              <div className="flag_wrapper">
                <img src={item.flag_Img_2} alt={item.flag_name_2} />
                <span>{item.flag_name_2}</span>
              </div>
            </div>
          );
        })}
      </BetContainer>
      <Info>
        {betNowData.map((item) => (
          <div className="WIN" key={item.id}>
            <p>{item.name}</p>
            <button
              disabled={eventStatus == false ? false : true}
              onClick={() => setAddStyle(item.id)}
              style={
                item.id === addStyle
                  ? { background: "#fc4c1e" }
                  : { background: "#7b7b7b" }
              }
            >
              {eventStatus == false ? item.btn : "Event Ended"}
            </button>
          </div>
        ))}
      </Info>
      <Tabs
        eventDate={date}
        getId={getId}
        winId={addStyle}
        date={state[0].date}
        getName={getName}
        getPrediction={getPrediction}
        getReview={getReview}
        eventStatus={eventStatus}
      />
    </>
  );
};

export default CricketEvent;
