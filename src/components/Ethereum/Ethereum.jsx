import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import {
  Container,
  StatContainer,
  Info,
} from "../BitcoinPrice/BitcoinPrice.styles";
import Times from "../Time/Times";
import Tabs from "../TabFifa/Tab";
import AirdropFooter from "../FooterBanners/AirdropFooter";
import useBreakpoint from "../../hooks/useBreakpoints";
import BtcUp from "../../assets/images/Bitcoin/BtcUp.webp";
import BtcDown from "../../assets/images/Bitcoin/BtcDown.webp";
import clock1 from "../../assets/images/BitcoinPrice/clock1.png";
import clock2 from "../../assets/images/BitcoinPrice/clock2.png";
import { useAxios } from "../../hooks/useAxios";

import TradingViewWidget, {
  Themes,
  IntervalTypes,
} from "react-tradingview-widget";
import AirdropFooterBanner from "../FooterBanners/AirdropFooterBanner";

function Ethereum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isDesktop } = useBreakpoint();
  const src = "https://www.youtube.com/watch?v=ncVKIMwd0bM";
  const { fetchData, response } = useAxios();
  const result = response?.slice(1, 2).map((item) => item);
  console.log("response", response);

  const getBanners = async () => {
    await fetchData({
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`,
    });
  };

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits,
    }).format(number);

  useEffect(() => {
    getBanners();
    window.scrollTo(0, 0);
  }, []);

  const bData = [
    {
      id: 1,
      name: "More than $1700",
      btn: "Bet Now",
      info: "Short information",
    },
    {
      id: 2,
      name: "$1700 - $1500",
      btn: "Bet Now",
      info: "Short information",
    },
    {
      id: 3,
      name: "Less than $1500",
      btn: "Bet Now",
      info: "Short information",
    },
  ];

  const [addStyle, setAddStyle] = useState();

  return (
    <>
      <Container>
        <StatContainer>
          <div className="portfolio">
            <img src={BtcUp} alt="BtcUp" />
            <span>ETH PRICE UP</span>
          </div>
          {result?.map((item) => (
            <div className="vs">
              <div id="live">
                <span>ETH PRICE</span>
                <p>POOL LIVE</p>
              </div>
              <div className="close">
                <div className="predict">
                  <div className="clock">
                    <p>Predict Price on</p>
                    <div>
                      <img src={clock1} alt="clock1" />
                    </div>
                  </div>
                  <span>
                    26 February
                    <br />
                    00:00 GMT
                  </span>
                </div>
                <div className="predict">
                  <div className="clock">
                    <p id="color">Pool Closes on</p>
                    <div>
                      {" "}
                      <img src={clock2} alt="clock2" />
                    </div>
                  </div>
                  <span>
                    24 February
                    <br />
                    12:00 GMT
                  </span>
                </div>
              </div>
              <div className="rectangle">
                <div className="stats">
                  <p>Trading Volume:</p>
                  <span>{formatDollar(result[0]?.total_volume, 5)} </span>
                </div>
                <div className="stats">
                  {" "}
                  <p>24h Low / 24h High </p>
                  <span>
                    {formatDollar(result[0]?.low_24h, 5)}/{" "}
                    {formatDollar(result[0]?.high_24h, 5)}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="portfolio">
            <img src={BtcDown} alt="BtcDown" width={206} height={170} />
            <span>ETH PRICE DOWN</span>
          </div>
        </StatContainer>
        <Info>
          {bData.map((item) => (
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
        <Tabs
          predictionVideo="https://www.youtube.com/watch?v=fCgHXKyk850"
          bitAndEthBet={false}
        />
      </Container>
      {isDesktop && <AirdropFooterBanner />}
    </>
  );
}

export default Ethereum;
