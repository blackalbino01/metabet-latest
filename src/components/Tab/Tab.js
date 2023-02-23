/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Tab.css";
import { Table } from "../../Components/Stats/Stats.styles";
import RecentTrade from "../../Components/RecentTrade/RecentTrade";
import Accordian from "../Accordian";
import ReactPlayer from "react-player/youtube";

function Tabs(props) {
  const [index, setIndex] = useState(0);
  const src_1 = "https://www.youtube.com/watch?v=TBYCW01qb08";
  const src_2 = "https://www.youtube.com/watch?v=oSxH3wbN7a4";
  const src_3 = "https://www.youtube.com/watch?v=DbqudKskqjA";
  const src_4 = "https://www.youtube.com/watch?v=fl1lC2FMaeE";
  const src_5 = "https://www.youtube.com/watch?v=kJLI8VTvrtA";
  const src_6 = "https://www.youtube.com/watch?v=GrTpDYim06k";
  const prediction_1 = "https://youtu.be/cT3QQTqF21I";
  const review_1 = "https://youtu.be/ZqeTPPD9GQw";
  const prediction_2 = "https://youtu.be/8zzkj2-UvYc";
  const review_2 = "https://youtu.be/KyVnZM8ZN8A";

  const pathname = window.location.pathname;
  return (
    <div className="Tabs">
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
          <Accordian
            id={props.getId}
            winBtn={props.winId}
            date={props.date}
            country={props.getName}
          />
        </Table>
        {pathname === "/Bitcoin" ||
        pathname === "/Ethereum" ||
        pathname === "/Cricket" ||
        pathname === "/UFC-Events" ? (
          ""
        ) : (
          <div className="video-container">
            {props.getId ===
              "0xb9128a765ca76dfce0cc598ae8c40f47e40cf58398fab4e54399060e77678229" && (
              <ReactPlayer url={src_1} />
            )}
            {props.getId === 2 && <ReactPlayer url={src_2} />}
            {props.getId === 3 && <ReactPlayer url={src_3} />}
            {props.getId === 4 && <ReactPlayer url={src_4} />}
            {props.getId === 5 && <ReactPlayer url={src_5} />}
            {props.getId === 6 && <ReactPlayer url={src_6} />}
          </div>
        )}
        {pathname === "/Bitcoin" || pathname === "/Ethereum" ? (
          <div className="video">
            <div className="prediction">
              <span>Prediction</span>
              <div className="video-container-separeted">
                {pathname === "/Bitcoin" && <ReactPlayer url={prediction_1} />}
                {pathname === "/Ethereum" && <ReactPlayer url={prediction_2} />}
              </div>
            </div>
            <div className="prediction">
              <span>Review</span>
              <div className="video-container-separeted">
                {pathname === "/Bitcoin" && <ReactPlayer url={review_1} />}
                {pathname === "/Ethereum" && <ReactPlayer url={review_2} />}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="tableContent" hidden={index !== 1}>
        <RecentTrade />
      </div>{" "}
      <div className="tableContent" hidden={index !== 2}>
        LiveBet NFT This Page is not live yet{" "}
      </div>{" "}
    </div>
  );
}

export default Tabs;
