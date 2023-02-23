import React, { useEffect, useState } from "react";
import { Container, StatContainer, Info } from "./BitcoinPrice.styles";
import { Stats1, Stats2 } from "../FifaFootball/FifaFootballData";
import Tabs from "../TabFifa/Tab";
import useBreakpoint from "../../hooks/useBreakpoints";
import BtcUp from "../../assets/images/Bitcoin/BtcUp.webp";
import BtcDown from "../../assets/images/Bitcoin/BtcDown.webp";
import clock1 from "../../assets/images/BitcoinPrice/clock1.png";
import clock2 from "../../assets/images/BitcoinPrice/clock2.png";

import AirdropFooterBanner from "../FooterBanners/AirdropFooterBanner";

import useFetch from "../../hooks/useFetch";

function BitcoinPrice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isDesktop } = useBreakpoint();
  // const src = "https://www.youtube.com/watch?v=ncVKIMwd0bM";

  const { response, loading, error, dateFormat } = useFetch(
    "https://api.coincap.io/v2/assets/bitcoin"
  );

  // var time = response.timestamp;
  // var dateFormat = new Date(time);
  // console.log("after", time, "before", dateFormat);

  // let supply_Vol = parseFloat(response?.supply).toFixed(2);
  // let max_supply_Vol = parseFloat(response?.maxSupply).toFixed(2);
  // let volUSd = parseFloat(response?.volumeUsd24Hr).toFixed(2);
  // let volWapUSd = parseFloat(response?.vwap24Hr).toFixed(2);
  // let priceUsdVol = parseFloat(response?.priceUsd).toFixed(2);

  // console.log("supply", supply_Vol);
  // console.log("max_supply", max_supply_Vol);

  // console.log("final test", );

  // console.log("final", volUSd - priceUsdVol);

  console.log("res", response);

  // const getResult = response.volumeUsd24Hr / response.marketCapUsd;
  // console.log("market", getResult);

  // var time = dateFormat.toLocaleString();
  // var span = document.getElementById("span");

  // function time() {
  //   var dateFormat = new Date();
  //   var s = dateFormat.getSeconds();
  //   var m = dateFormat.getMinutes();
  //   var h = dateFormat.getHours();
  //   span.textContent =
  //     ("0" + h).substr(-2) +
  //     ":" +
  //     ("0" + m).substr(-2) +
  //     ":" +
  //     ("0" + s).substr(-2);
  // }

  // useEffect(() => {
  //   setInterval(time, 1000);
  // }, [time]);

  const bData = [
    {
      id: 1,
      name: "More than $18,000",
      btn: "Bet Nows",
      info: "Short information",
    },
    {
      id: 2,
      name: "$17,000 - $18,000",
      btn: "Bet Now",
      info: "Short information",
    },
    {
      id: 3,
      name: "Less than $17,000",
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
            <span>BTC PRICE UP</span>
          </div>
          <div className="vs">
            <div id="live">
              <p>Bitcoin PRICE</p>
              <p>POOL LIVE</p>
            </div>
            <div className="close">
              <div className="predict">
                <div className="clock">
                  <p>Predict Price on</p>
                  <div>
                    {" "}
                    <img src={clock1} alt="clock1" />
                  </div>
                </div>
                <span>
                  Friday, 23 January
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
                  Friday, 20 January
                  <br />
                  12:00 GMT
                </span>
              </div>
            </div>
            <div className="rectangle">
              <div className="stats">
                <p>Trading Volume:</p>
                {Stats1.map((item) => (
                  <span>{item.param}</span>
                ))}
              </div>
              <div className="stats">
                {" "}
                <p>24h Low / 24h High</p>
                {/* {response && (
                  <span>{response === null ? "" : response.volumeUsd24Hr}</span>
                )} */}
                {Stats2.map((item) => (
                  <span>{item.param}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="portfolio">
            <div>
              <img src={BtcDown} alt="BtcDown" />
            </div>
            <span>BTC PRICE DOWN</span>
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
          predictionVideo="https://www.youtube.com/watch?v=cnK0BiVEb70"
          bitAndEthBet={false}
        />
      </Container>
      {isDesktop && <AirdropFooterBanner />}
    </>
  );
}

export default BitcoinPrice;
