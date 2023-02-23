import React from "react";
import { Container } from "./HowItWorks.styles";
import HowIts_1 from "../../assets/images/how-its-work/how-its-works_1.png";
import HowIts_2 from "../../assets/images/how-its-work/how-its-works_2.png";
import HowIts_3 from "../../assets/images/how-its-work/how-its-works_3.png";
import HowIts_4 from "../../assets/images/how-its-work/how-its-works_4.png";
import HowIts_5 from "../../assets/images/how-its-work/how-its-works_5.png";
import HowIts_6 from "../../assets/images/how-its-work/how-its-works_6.png";
import HowIts_7 from "../../assets/images/how-its-work/how-its-works_7.png";
import HowIts_8 from "../../assets/images/how-its-work/how-its-works_8.png";
import HowIts_9 from "../../assets/images/how-its-work/how-its-works_9.png";
import HowIts_10 from "../../assets/images/how-its-work/how-its-works_10.png";
import HowIts_11 from "../../assets/images/how-its-work/how-its-works_11.png";
import HowIts_12 from "../../assets/images/how-its-work/how-its-works_12.png";

const HowItWorks = () => {
  return (
    <Container>
      <span>HOW IT WORKS?</span>
      <div className="how-its-work-btn">
        <button style={{ border: "1px solid #fc4c1e" }}>BET</button>
        <button>ORACLE</button>
      </div>
      <div className="event">
        <span>1. Choose Sport Event</span>
        <div>
          <img src={HowIts_1} alt="Uevent" />
        </div>
        <div>
          <img src={HowIts_2} alt="Fevent" />
        </div>
      </div>
      <div className="event">
        <span>2. Choose Sport Event</span>
        <div>
          <img src={HowIts_3} alt="Pool1" />
        </div>
        <div>
          <img src={HowIts_4} alt="Pool2" />
        </div>
      </div>
      <div className="event">
        <span>3. Choose Cryptocurrency</span>
        <div>
          <img src={HowIts_5} alt="Crypto" />
        </div>
      </div>
      <div className="event">
        <span>4. Choose Wager</span>
        <div className="wager">
          <div>
            <img src={HowIts_6} alt="Wager" />
          </div>
          <span>
            Bet ratios are not final until the bet pools are closed, Bet ratios
            are decided by the Total bets on each outcome.
          </span>
        </div>
      </div>
      <div className="event-connect-btn">
        <span>5. Connect Metamask</span>
        <div className="item-btn">
          <img src={HowIts_7} alt="connect" />
        </div>
        <div className="item-btn">
          <img src={HowIts_8} alt="Disconnect" />
        </div>
      </div>
      <div className="event">
        <span>6. Confirm Bet </span>
        <div>
          <img src={HowIts_9} alt="ConfirmBet" />
        </div>
      </div>
      <div className="event">
        <span>
          7. Check Your Bet in <span>My Bet History</span>{" "}
        </span>
        <div>
          <img src={HowIts_10} alt="BetHistory" />
        </div>
      </div>
      <div className="event">
        <span>8. Check in Wallet for MetaBet Bet Reciept NFT </span>
        <div>
          <img src={HowIts_11} alt="NFTRecipt" />
        </div>
      </div>
      <div className="event">
        <span>
          9. Claim Winnings using <span>My Bet History</span>{" "}
        </span>
        <div>
          <img src={HowIts_12} alt="ClaimWin" />
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
