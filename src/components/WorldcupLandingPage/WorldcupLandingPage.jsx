import React, { useEffect } from "react";
import { Container } from "./WorldcupLandingPage.styles";
import Web3 from "../../assets/images/landingpage/Web3.png";
import BookiesFee from "../../assets/images/landingpage/BookiesFee.png";
import UfcRed from "../../assets/images/landingpage/UfcRed.png";
import KYC from "../../assets/images/landingpage/KYC.png";
import TruthToken from "../../assets/images/landingpage/TruthToken.png";
import BankCards from "../../assets/images/landingpage/BankCards.png";
import PoliticsImg from "../../assets/images/landingpage/politics.png";
import FreeBetsImg from "../../assets/images/landingpage/freeBets.png";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  metaMaskConnection,
  metaMaskDisconnect,
} from "../../redux/walletConnect/walletConnectSlice";

const WorldcupLandingPage = () => {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  useEffect(() => {}, [metaMaskAddress]);

  return (
    <Container>
      <div className="img_free_bets">
        <img src={FreeBetsImg} alt="Free Bets" />
      </div>
      <div className="top">
        <NavLink to="/Football">
          <img src={Web3} className="img_1" alt="Web3" />
        </NavLink>
      </div>
      <div className="middle">
        <NavLink to="/UFC">
          <img src={UfcRed} alt="UfcRed" />
        </NavLink>
        {!metaMaskAddress.metaMaskAddress ? (
          <div
            className="connect-wallet-img"
            onClick={() => dispatch(metaMaskConnection())}
          >
            <img src={TruthToken} alt="TruthToken" />
          </div>
        ) : (
          <div
            className="connect-wallet-img"
            onClick={() => dispatch(metaMaskDisconnect())}
          >
            <img src={TruthToken} alt="TruthToken" />
          </div>
        )}
        <NavLink to="/Bitcoin">
          <img src={KYC} alt="KYC" />
        </NavLink>
      </div>
      <div className="end">
        <NavLink to="/Ethereum">
          <img src={BankCards} alt="BankCards" />
        </NavLink>
        <NavLink to="/Politics">
          <img src={PoliticsImg} alt="BankCards" />
        </NavLink>
        <NavLink to="/Cricket">
          <img src={BookiesFee} alt="BookiesFee" />
        </NavLink>
      </div>
    </Container>
  );
};

export default WorldcupLandingPage;
