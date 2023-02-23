import React, { useState } from "react";
import "./TabTable2.styles.css";
import { Table } from "../Stats2/Stats2.styles";
import ETH from "../../assets/images/ETH.png";
import MetaBet from "../../assets/images/MetaBet.png";
import WETH from "../../assets/images/WETH.svg";
import USDT from "../../assets/images/USDT.svg";
import BUSD from "../../assets/images/BUSD.png";
import BNB from "../../assets/images/BNB.svg";
import ETC from "../../assets/images/ETC.svg";
import MATIC from "../../assets/images/MATIC.svg";
import GOAL from "../../assets/images/GOAL.png";
import RecentTrade from "../RecentTrade/RecentTrade";
import { NavLink } from "react-router-dom";
import { TabTableData } from "./TabTableData";
function TabTable() {
  const [index, setIndex] = useState(0);

  return (
    <div className="Tabs">
      <div className="tabsList">
        <div
          className={`tableHead ${index === 0 ? "Active" : null}`}
          onClick={() => {
            setIndex(0);
          }}
        >
          <p>Odds</p>
        </div>
        <div
          className={`tableHead ${index === 1 ? "Active" : null}`}
          onClick={() => {
            setIndex(1);
          }}
        >
          <p>Recent Trades</p>
        </div>
        <div
          className={`tableHead ${index === 2 ? "Active" : null}`}
          onClick={() => {
            setIndex(2);
          }}
        >
          <p>Live Bets</p>
        </div>
      </div>
      <div className="tableContent" hidden={index !== 0}>
        <Table>
          <div className="head">
            <p>CURRENCY</p>
            <div className="item">
              <p>ODDS</p>
              <p>POOL SIZE</p>
              <p>Select Currency</p>
            </div>
          </div>
          <div className="Content">
            <div className="Currency">
              <ul>
                {TabTableData.map((item) => (
                  <li key={item.id}>
                    <a>
                      <img src={item.img} alt="METABET" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="Item">
              <div className="ODDS">
                <ul>
                  {TabTableData.map((item) => (
                    <li>
                      <a>{item.odds}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="Pool">
                <ul>
                  {TabTableData.map((item) => (
                    <li>
                      <a>{item.poolSize}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="Bet">
                <ul>
                  <li>
                    <NavLink to="/StatsBet">
                      <button id="btn">BET</button>
                    </NavLink>

                    <button>BET</button>
                    <button>BET</button>
                    <button>BET</button>
                    <button>BET</button>
                    <button>BET</button>
                    <button>BET</button>
                    <button>BET</button>
                    <button>BET</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Table>
      </div>
      <div className="tableContent" hidden={index !== 1}>
        <RecentTrade />
      </div>
      <div className="tableContent" hidden={index !== 2}>
        LiveBet NFT This Page is not live yet
      </div>
    </div>
  );
}

export default TabTable;
