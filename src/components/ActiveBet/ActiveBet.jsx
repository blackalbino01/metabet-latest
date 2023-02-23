import React from "react";
import { Container, ContainerBet } from "./ActiveBet.styles";
import fox from "../../assets/images/Betimg/fox.png";
import { betData, Filter } from "./ActiveBetData";

const ActiveBetHistory = () => {
  return (
    <>
      <Container>
        <div className="history_span">
          <span>MY Active Bets</span>
        </div>
        <div className="filter-btn">
          {Filter.map((item) => {
            return (
              <>
                <button
                  style={
                    item.id === 1 ? { color: "#FFFFFF" } : { color: "#577184" }
                  }
                >
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                </button>
              </>
            );
          })}
        </div>
        <ContainerBet>
          {betData.map((item) => {
            return (
              <>
                <div className="betHistory-container">
                  <div className="bet-item-1">
                    <div>
                      <img src={item.icon1} alt="" />
                    </div>
                    <div className="table-wrapper">
                      <div className="bet-th">
                        <span>{item.th_1}</span>
                        <span>{item.th_2}</span>
                      </div>
                      <div className="bet-td">
                        <span>{item.td_1}</span>
                        <span>{item.td_2}</span>
                      </div>
                    </div>
                    <div className="table-wrapper">
                      <div className="bet-th">
                        <span>{item.th_3}</span>
                        <span>{item.th_4}</span>
                        <span>{item.th_5}</span>
                      </div>
                      <div className="bet-td1">
                        <span>{item.td_3}</span>
                        <img src={item.td_4} alt="" />
                        <span>{item.td_5}</span>
                      </div>
                    </div>
                    <div className="status-btn">
                      <div className="right-pannel">
                        <div>
                          <button>Won</button>
                          <button>Lost</button>
                        </div>
                        <div>
                          <button>All</button>
                          <button>Live</button>
                        </div>
                      </div>
                      <div>
                        <button>Claim</button>
                        <button className="sell">Sell</button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </>
            );
          })}
        </ContainerBet>
        <button id="history_btn" onClick={() => setShow((prev) => !prev)}>
          Connect Wallet
          <img src={fox} alt="fox" />
        </button>
      </Container>
    </>
  );
};

export default ActiveBetHistory;
