import React from "react";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { HightLightContainer } from "./Hight.style";

const HightLightsComponent = ({ hightLightData }) => {
  let { group, title } = useParams();
  const navigate = useNavigate();
  return (
    <>
      {hightLightData?.map((item, index) => {
        return (
          <HightLightContainer
            background={item.data.background_img}
            key={index}
          >
            {item.data.status && <h1>{item.data.status}</h1>}
            <div className="HightLight-featured-banner-wrapper">
              <div className="country_wrapper">
                <img
                  src={item.data.player_Img_1}
                  alt={item.data.player_name_1}
                />
                <span>{item.data.player_name_1}</span>
              </div>
              <div className="player-VS">
                <span>{item.data.vs}</span>
                <button
                  onClick={() =>
                    navigate(
                      `/stats/${group}/${title.replace(
                        /[^a-zA-Z0-9-]/g,
                        "-"
                      )}/${item._id}`,
                      {
                        state: item._id,
                      }
                    )
                  }
                >
                  {item.data.btn_name}
                </button>
              </div>
              <div className="country_wrapper">
                <img
                  src={item.data.player_Img_2}
                  alt={item.data.player_name_2}
                />
                <span>{item.data.player_name_2}</span>
              </div>
            </div>
          </HightLightContainer>
        );
      })}
    </>
  );
};

export default HightLightsComponent;
