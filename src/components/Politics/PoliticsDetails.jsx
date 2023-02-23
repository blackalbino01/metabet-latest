import React, { useState } from "react";
import { StatContainer, Info, PoliticsContainer } from "./Politics.styles";
import Tabs from "../TabFifa/Tab";
import useBreakpoint from "../../hooks/useBreakpoints";
import clock1 from "../../assets/images/BitcoinPrice/clock1.png";
import clock2 from "../../assets/images/BitcoinPrice/clock2.png";
import AirdropFooterBanner from "../FooterBanners/AirdropFooterBanner";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Carousel from "./Carousel/Carousel";

const PoliticsDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { state } = useLocation();
  const [preview] = useState(state[0].review_video);
  const [prediction] = useState(state[0].prediction_video);
  const { isDesktop } = useBreakpoint();

  console.log("first", state);

  const id =
    "0x294220fa75e41651782e351551183231fff9deba6bd76820bd93d92f9382481a";

  const bData = [
    {
      id: 1,
      name: "Stays in Bahamas 🏝️ Prison",
      btn: "Bet",
      info: "Short information",
    },
    {
      id: 2,
      name: "Prison 🇺🇸 ⛓️ ",
      btn: "Bet",
      info: "Short information",
    },
    {
      id: 3,
      name: "Suicide 👻 ",
      btn: "Bet",
      info: "Short information",
    },
    {
      id: 4,
      name: "Freedom 😂",
      btn: "Bet",
      info: "Short information",
    },
  ];
  const [addStyle, setAddStyle] = useState();

  return (
    <>
      <PoliticsContainer displayType="flex" displayDirection="column">
        <StatContainer>
          <div className="rectangle">
            <span>Statistic:</span>
            {state?.map((item) => (
              <>
                <span>{item.stats_title1}</span>
                <span>{item.stats_title2}</span>
                <span>{item.stats_title3}</span>
                <span>{item.stats_title4}</span>
              </>
            ))}
          </div>
          <div className="vs">
            <div id="live">
              <span>POOL LIVE</span>
            </div>
            {state[0]?.title && <span>{state[0]?.title}</span>}
            <div className="close">
              <div className="outcome">
                <div className="clock">
                  <span>Predict Outcome</span>
                  <div>
                    {" "}
                    <img src={clock1} alt="clock1" />
                  </div>
                </div>
              </div>
              <div className="predict">
                <div className="clock">
                  <span>Pool Closes on</span>
                  <div>
                    {" "}
                    <img src={clock2} alt="clock2" />
                  </div>
                </div>
                <span>
                  {state[0]?.Date}
                  <br />
                  00:00 GMT
                </span>
              </div>
            </div>
          </div>
          {state?.map((item) => {
            return (
              <div className="portfolio">
                <img
                  src={item.background_img}
                  width={450}
                  alt="Politics_member"
                />
              </div>
            );
          })}
        </StatContainer>
        <Info>
          {state[0]?.bet.map((item) => (
            <>
              {console.log(item.id)}
              <div className="WIN" key={item.id}>
                <div className="title">
                  <img src={item.icon} />
                  <p> {item.name}</p>
                </div>
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
            </>
          ))}
        </Info>
        <Tabs
          getId={id}
          winId={addStyle}
          getReview={preview}
          getPrediction={prediction}
        />
      </PoliticsContainer>
      <Carousel />
    </>
  );
};

export default PoliticsDetails;
