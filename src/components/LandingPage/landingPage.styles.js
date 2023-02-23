import styled from "styled-components";

export const Container = styled.div`
  margin-top: 8px;
  width: 100%;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  margin-bottom: 120px;
  img {
    background: transparent;
  }

  .bet-container {
    display: flex;
  }

  .Bet {
    display: flex;
    z-index: 1;
    align-items: center;
    background: none;
    transform: translate(0px, 75px);
    grid-gap: 20px;
    padding-left: 20px;
  }

  .player-VS {
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 24px;
    transform: translateY(20px);

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  .Bet .player-VS > button {
    padding: 10px;
    width: 140px;
    border: none;
    color: #fff;
    cursor: pointer;
    background: #fc4c1e;
    border-radius: 6px;
    font-family: "CabinetGroteskBold";
    a {
      text-decoration: none;
      color: white;
    }
  }

  a {
    button {
      padding: 10px;
      width: 140px;
      border: none;
      color: #fff;
      cursor: pointer;
      background: #fc4c1e;
      border-radius: 6px;
      font-family: "CabinetGroteskBold";
    }
  }

  p {
    font-family: "CabinetGroteskBold";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #ffffff;
    justify-content: center;
    background: none;
  }
  .Player > span {
    font-family: "CabinetGroteskBold";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #ffffff;
    justify-content: center;
    background: none;
    padding-top: 82px;
  }
  .Player {
    background: none;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    .Bet {
      transform: translate(0px, 48px);
      padding-left: 10px;
    }
  }

  @media screen and (max-width: 620px) {
    .Player {
      img {
        width: 65px;
      }
    }
    .Bet {
      transform: translate(0px, 55px);
      padding-left: 10px;
    }
    .player-VS {
      font-size: 16px;
      gap: 10px;
      transform: translateY(0px);
    }
    .Player > span {
      font-size: 16px;
    }
    p {
      font-size: 10px;
    }
    a {
      button {
        width: 62px;
        height: 21.97px;
        font-size: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 520px) {
    .Player {
      img {
        width: 65px;
      }
    }
    .Bet {
      transform: translate(0px, 55px);
      padding-left: 10px;
    }
    .player-VS {
      font-size: 16px;
      gap: 10px;
      transform: translateY(0px);
    }
    .Player > span {
      font-size: 16px;
    }
    p {
      font-size: 10px;
    }
    a {
      button {
        width: 62px;
        height: 21.97px;
        font-size: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .Player {
      img {
        width: 55px;
      }
    }
    .Bet {
      transform: translate(0px, 30px);
      padding-left: 10px;
    }
    .player-VS {
      font-size: 16px;
      gap: 10px;
      transform: translateY(0px);
    }
    .Player > span {
      font-size: 16px;
    }
    p {
      font-size: 10px;
    }
    a {
      button {
        width: 62px;
        height: 21.97px;
        font-size: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .Player {
      img {
        width: 45px;
      }
    }
    .Bet {
      transform: translate(0px, 25px);
      padding-left: 10px;
    }
    .player-VS {
      font-size: 16px;
      gap: 10px;
      transform: translateY(0px);
    }
    .Player > span {
      font-size: 16px;
    }
    p {
      font-size: 10px;
    }
    a {
      button {
        width: 62px;
        height: 21.97px;
        font-size: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
