import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { FootballLeaguesContainer } from "./FootballLeagues.style";
import BetBTN from "../../assets/images/bet-new-btn.png";

const ChampionsLeague = ({ group_type }) => {
  const { fetchData, response, loading } = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const getEvent = async () => {
    await fetchData({
      method: "GET",
      url: `https://dull-puce-wildebeest-belt.cyclic.app/getGroup/group/type/${group_type}`,
    });
  };

  useEffect(() => {
    getEvent();
    window.scrollTo(0, 0);
  }, []);

  const highlightsData = response?.map((item) => item?.event?.highlights[0]);

  console.log("res", response);
  return (
    <FootballLeaguesContainer>
      <div className="football-loading-wrapper">
        <h1>Champions League</h1>
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : response?.length > 0 ? (
          <div className="football-league-conainer">
            {loading ? (
              <div className="loading">
                <Loading />
              </div>
            ) : (
              highlightsData?.map((item, index) => (
                <>
                  <div className="card" key={index}>
                    <div className="card__header">
                      <img src={item?.data?.background_img} alt="" />
                    </div>
                    <div className="card__body">
                      <div className="card_item">
                        <div className="img_item">
                          <img src={item?.data?.flag_Img_1} alt="" />
                        </div>
                        <span>{item?.data?.flag_name_1}</span>
                      </div>
                      <div className="bet-btn-wrapper">
                        <span>VS</span>
                        <div
                          onClick={() =>
                            navigate(`${pathname}/stats/${item?._id}`, {
                              state: item?._id,
                            })
                          }
                        >
                          <img src={BetBTN} alt="Bet Now" />
                        </div>
                      </div>
                      <div className="card_item">
                        <div className="img_item">
                          <img
                            src={item?.data?.flag_Img_2}
                            alt={item?.data?.flag_name_2}
                          />
                        </div>
                        <span>{item?.data?.flag_name_2}</span>
                      </div>
                    </div>
                  </div>
                </>
              ))
            )}
          </div>
        ) : (
          <div className="no-blog-founded">
            <h2>No Event Founded</h2>
          </div>
        )}
      </div>
    </FootballLeaguesContainer>
  );
};

export default ChampionsLeague;
