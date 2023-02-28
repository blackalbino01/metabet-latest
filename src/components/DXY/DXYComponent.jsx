import React, { useState } from "react";
import {
  StatContainer,
  Info,
  PoliticsContainer,
} from "../Politics/Politics.styles";
import Tabs from "../TabFifa/Tab";
import useBreakpoint from "../../hooks/useBreakpoints";
import clock1 from "../../assets/images/BitcoinPrice/clock1.png";
import clock2 from "../../assets/images/BitcoinPrice/clock2.png";
import AirdropFooterBanner from "../FooterBanners/AirdropFooterBanner";
import { useEffect } from "react";
import { Dxy_data } from "../../JasonData/FeaturedBannerData";

const DXYComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isDesktop } = useBreakpoint();

  const preview = "https://www.youtube.com/watch?v=NIIkf8OeWjo";
  const prediction = "https://www.youtube.com/watch?v=vJukgy0_QEc";

  const [addStyle, setAddStyle] = useState();

  const betBtnData = [
    {
      id: 1,
      name: "More than $104",
      btn: "Bet",
      info: "Short information",
    },
    {
      id: 2,
      name: "Between $104-$102",
      btn: "Bet",
      info: "Short information",
    },
    {
      id: 3,
      name: "Less than $102",
      btn: "Bet",
      info: "Short information",
    },
  ];

  const id =
    "0x4b43224ffcdcbddc685a0f12b255f3565e6baa07451b9ba2900b0efe03ce6c60";
  return (
    <>
      <PoliticsContainer>
        <StatContainer>
          <div className="rectangle">
            <span>Statistic:</span>
            {Dxy_data.map((item) => (
              <>
                <span>{item.stats_title1}</span>
              </>
            ))}
          </div>
          <div className="vs">
            <div id="live">
              <span>POOL LIVE</span>
            </div>
            <span>Predict $ DXY Range by the end of January</span>
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
                  25 January
                  <br />
                  00:00 GMT
                </span>
              </div>
            </div>
          </div>
          {Dxy_data.map((item) => {
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
          {betBtnData.map((item) => (
            <>
              <div className="WIN" key={item.id}>
                <div className="title">
                  <img src={item.icon} alt="" />
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
      {isDesktop && <AirdropFooterBanner />}
    </>
  );
};

export default DXYComponent;
