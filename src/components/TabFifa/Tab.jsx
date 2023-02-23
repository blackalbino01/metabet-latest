/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./Tab.style.js";
import { Table } from "./Fifa.styles";
import FifaAccordian from "./FifaAccordian";
import { TabContainer } from "./Tab.style.js";
import RecentTrade from "../RecentTrade/RecentTrade";
import ReactPlayer from "react-player/youtube";
import BetImg from "../../assets/images/bet.png";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

import { useDispatch, useSelector } from "react-redux";

import {
  metaMaskConnection,
  metaMaskDisconnect,
} from "../../redux/walletConnect/walletConnectSlice";
import Utils from "../../utilities";

function Tabs(props) {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const [currentAccount, setCurrentAccount] = useState("");
  const { ethereum } = window;
  console.log("bitcoin tabs", props?.bitcoinBet);

  useEffect(() => {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      signer.getAddress().then(function (data) {
        setCurrentAccount(data);
      });
    }
  }, [metaMaskAddress]);

  const [index, setIndex] = useState(0);
  const prediction_src_1 = props.getPrediction;
  const review_src_1 = props.getReview;
  const prediction_3 = "https://youtu.be/1ObdFaUL7nc";
  const review_3 = "https://youtu.be/1ObdFaUL7nc";

  const pathname = window.location.pathname;
  return (
    <TabContainer>
      <div className="tab-wrapper">
        <div className="tab">
          <div
            className={`tableHead ${index === 0 ? "active" : "de-active"}`}
            onClick={() => {
              setIndex(0);
            }}
          >
            <span>Odds</span>
          </div>
          <div
            className={`tableHead ${index === 1 ? "active" : "de-active"}`}
            onClick={() => {
              setIndex(1);
            }}
          >
            <span>All Bets</span>
          </div>
          <div
            className={`tableHead ${index === 2 ? "active" : "de-active"}`}
            onClick={() => {
              setIndex(2);
            }}
          >
            <span>Live Bets</span>
          </div>
        </div>
        {metaMaskAddress.metaMaskAddress ? (
          <button onClick={() => Utils.FreeBetToken(currentAccount)}>
            <img src={BetImg} alt="Free Bets" />
            <span>+50 Free Bets</span>
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="tableContent" hidden={index !== 0}>
        <Table>
          <div className="head">
            <span>CURRENCY</span>
            <span>POOL SIZE</span>
            <span>NUMBER OF BETS</span>
            <span>ODDS</span>
            <span>PAYOUT</span>
            <span>SELECT CURRENCY</span>
          </div>
          <FifaAccordian
            id={props.getId}
            winBtn={props.winId}
            date={props?.eventDate}
            country={props.getName}
            goalT={props.goalT}
            busdT={props.busdT}
            bnbT={props.bnbT}
            eventStatus={props.eventStatus}
            bitAndEth={props.bitAndEthBet}
          />
        </Table>
        {pathname === "/Bitcoin" ||
        pathname === "/Ethereum" ||
        pathname === "/Cricket" ||
        pathname === "/Politics" ||
        pathname === "/UFC-Events" ? (
          ""
        ) : (
          <div className="video">
            {(pathname === "/dxy" || pathname === "/Cricket-Event") && (
              <div className="prediction">
                <span>Prediction</span>
                <div className="video-container-separeted">
                  <ReactPlayer url={prediction_src_1} />
                </div>
              </div>
            )}
            <div className="prediction">
              <span>Review</span>
              <div className="video-container-separeted">
                <ReactPlayer url={review_src_1} />
              </div>
            </div>
          </div>
        )}
        {pathname === "/Bitcoin" ||
        pathname === "/Ethereum" ||
        pathname === "/Politics" ||
        pathname === "/Cricket" ? (
          <div className="video">
            <div className="prediction">
              <span>Prediction</span>
              <div className="video-container-separeted">
                {pathname === "/Bitcoin" && (
                  <ReactPlayer url={props.predictionVideo} />
                )}
                {pathname === "/Ethereum" && (
                  <ReactPlayer url={props.predictionVideo} />
                )}
                {pathname === "/Cricket" && <ReactPlayer url={prediction_3} />}
                {pathname === "/Politics" && <ReactPlayer url={prediction_3} />}
              </div>
            </div>
            {pathname === "/Bitcoin" && (
              <div className="pie">
                <TradingViewWidget
                  theme={Themes.DARK}
                  locale="en"
                  autosize={true}
                  symbol="BTCUSD"
                  interval="30"
                  timezone="Etc/UTC"
                />
              </div>
            )}
            {pathname === "/Ethereum" && (
              <div className="pie">
                <TradingViewWidget
                  theme={Themes.DARK}
                  locale="en"
                  autosize
                  symbol="ETHUSD"
                  interval="30"
                  timezone="Etc/UTC"
                  details={true}
                />
              </div>
            )}
            {pathname === "/Bitcoin" || pathname === "/Ethereum" ? (
              ""
            ) : (
              <div className="prediction">
                <span>Review</span>
                <div className="video-container-separeted">
                  {pathname === "/Cricket" && <ReactPlayer url={review_3} />}
                  {pathname === "/Politics" && <ReactPlayer url={review_3} />}
                </div>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="tableContent" hidden={index !== 1}>
        <RecentTrade id={props.getId} />
      </div>
      <div className="tableContent" hidden={index !== 2}>
        <h1>Coming Soon</h1>
      </div>
    </TabContainer>
  );
}

export default Tabs;
