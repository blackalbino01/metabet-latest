import React from "react";
import { TRUSCTokenContainer, Container1, Balance } from "./TRUSCToken.styles";
import Trueai from "../../assets/images/TRUSC/Trueai.webp";
import trusc from "../../assets/images/TRUSC/trusc.webp";
import TransferBtn from "../../assets/images/TRUSC/Transfer-btn.webp";
import WithdrawBtn from "../../assets/images/TRUSC/Withdraw-btn.webp";

import TruscTab from "./TruscTab/TruscTab";

const TRUSCToken = () => {
  return (
    <TRUSCTokenContainer>
      <Container1>
        <div className="fox-stats">
          <img src={trusc} alt="trusc" />
          <div className="text">
            <span id="dollar_rate">$0.05</span>
            <span>Reflection</span>
          </div>
          <img src={TransferBtn} alt="TransferBtn" />
        </div>
        <div className="balance-sheet">
          <div>
            <span id="dollar">$0.99972</span>
            <div className="trusc-withdraw">
              <label>
                Balance:
                <input type="text" placeholder="0" />
              </label>
              <span>$0.00</span>
              <img src={WithdrawBtn} alt="WithdrawBtn" />
            </div>
          </div>
          <div className="list">
            <div>
              <span id="rate">CIRCULATING SUPPLY</span>
              <span id="dollar">25</span>
            </div>
            <div>
              <span id="rate">VOLUME 24H</span>
              <span id="dollar">$25</span>
            </div>
            <div>
              <span id="rate">MARKET CAP</span>
              <span id="dollar">$25</span>
            </div>
          </div>
        </div>
        <div className="balance-sheet1">
          <div className="true">
            <div className="trueai">
              <img src={Trueai} alt="Trueai" />
              <span id="dollar">$0.000001</span>
            </div>

            <div className="trusc-withdraw1">
              <div>
                <label>
                  Balance:
                  <input type="text" placeholder="2500000" />
                </label>
                <span>$25</span>
              </div>
              <img src={WithdrawBtn} alt="WithdrawBtn" />
            </div>
          </div>
          <div className="list">
            <div>
              <span id="rate">Total SUPPLY</span>
              <span id="dollar">10000bn</span>
            </div>
            <div>
              <span id="rate">CIRCULATING SUPPLY</span>
              <span id="dollar">2.5m</span>
            </div>
            <div>
              <span id="rate">VOLUME 24H</span>
              <span id="dollar">$25</span>
            </div>
            <div>
              <span id="rate">MARKET CAP</span>
              <span id="dollar">$25</span>
            </div>
          </div>
        </div>
      </Container1>
      <Balance>
        <TruscTab />
      </Balance>
    </TRUSCTokenContainer>
  );
};

export default TRUSCToken;
