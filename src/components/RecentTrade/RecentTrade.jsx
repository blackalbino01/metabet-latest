import React from "react";
import { TradeTable } from "./RecentTrade.styles";
import TradeAccordian from "./TradeAccordian";
const RecentTrade = (props) => {
  return (
    <TradeTable>
      <div className="th-Head">
        <span>Event</span>
        <div className="item">
          <span>User(Wallet)</span>
          <span>Time</span>
          <span>Odds</span>
          <span>Bet Amount</span>
          <span>BSCscan</span>
        </div>
      </div>
      <div className="td-Head">
        <TradeAccordian id={props.id} />
      </div>
    </TradeTable>
  );
};

export default RecentTrade;
