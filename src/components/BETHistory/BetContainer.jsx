import React from "react";
import { ContainerBet } from "./BetContainer.styles";
import { betData } from "./BetData";

const BetContainer = () => {
  return (
    <ContainerBet>
      {betData.map((item, index) => {
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
                    <span>{item.th_3}</span>
                    <span>{item.th_4}</span>
                    <span>{item.th_6}</span>
                    <span>{item.th_7}</span>
                    <span>{item.th_5}</span>
                  </div>
                  <div className="bet-td">
                    <span>{item.td_1}</span>
                    <span>{item.td_2}</span>
                    <span>{item.td_3}</span>
                    <span>{item.td_4}</span>
                    <span>{item.td_5}</span>
                    <span>{item.td_6}</span>
                    <img src={item.icon_2} alt="" />
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </>
        );
      })}
    </ContainerBet>
  );
};

export default BetContainer;
