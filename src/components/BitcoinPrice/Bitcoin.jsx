import React, { useEffect, useState } from "react";
import { Container, StatContainer, Info } from "./BitcoinPrice.styles";
import Tabs from "../TabFifa/Tab";
import useBreakpoint from "../../hooks/useBreakpoints";
import BtcUp from "../../assets/images/Bitcoin/BtcUp.webp";
import BtcDown from "../../assets/images/Bitcoin/BtcDown.webp";
import clock1 from "../../assets/images/BitcoinPrice/clock1.png";
import clock2 from "../../assets/images/BitcoinPrice/clock2.png";
import AirdropFooterBanner from "../FooterBanners/AirdropFooterBanner";
import useFetch from "../../hooks/useFetch";
import { useAxios } from "../../hooks/useAxios";

function BitcoinPrice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isDesktop } = useBreakpoint();
  const { fetchData, response } = useAxios();
  const result = response?.slice(0, 1).map((item) => item);
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
      name: "More than $24,000",
      btn: "Bet Now",
      info: "Short information",
    },
    {
      id: 2,
      name: "$24,000 - $22,000",
      btn: "Bet Now",
      info: "Short information",
    },
    {
      id: 3,
      name: "Less than $22,000",
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
          {result?.map((item) => (
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
                    24 Febraury
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
                  <p>24h Low / 24h High</p>
                  <span>
                    {formatDollar(result[0]?.low_24h, 5)}/{" "}
                    {formatDollar(result[0]?.high_24h, 5)}
                  </span>
                </div>
              </div>
            </div>
          ))}

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
