import styled from "styled-components";
import Banner_2 from "../../assets/images/Event-Banner-Images/HotEvent.webp";
export const Container = styled.div`
  width: 100%;
  max-width: 989px;
  margin: 0 auto;
  .filter-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      padding: 0px 10px;
      min-height: 45px;
      background: #0f212e;
      border-radius: 8px;
      border: none;
      gap: 4px;
    }
  }

  .history_span {
    padding: 20px 5px;
    /* margin-left: 10px; */
    span {
      font-weight: 800;
      font-size: 16px;
      color: #ffffff;
    }
  }
  #history_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 100%;
    max-width: 164px;
    background: #fc4c1e;
    border-radius: 6px;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    margin: 20px auto;
  }
  .Banner_2 {
    background-image: url(${Banner_2});
    min-height: 260px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 270px;
  }
  .bet-container {
    display: flex;
  }

  .Bet {
    display: flex;
    z-index: 1;
    align-items: center;
    transform: translate(0px, 75px);
    background: none;
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

  @media screen and (max-width: 520px) {
    .history_span {
      span {
        font-size: 13px;
      }
    }

    #history_btn {
      font-size: 12px;
      max-width: 130px;
    }
  }
  @media screen and (max-width: 1080px) {
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1024px) {
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 620px) {
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
  //till 820 / 920 sidebar
  @media screen and (max-width: 820px) {
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 920px) {
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 768px) {
    .history_span {
      padding: 20px 30px;
    }
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
  //vertical with sidebar

  @media screen and (max-width: 375px) {
    .history_span {
      span {
        font-size: 12px;
      }
    }
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
export const UfcContainer = styled.div`
  min-height: 210px;
  /* margin: 16px; */
  /* margin-right: 35px; */
  background: #223743;
  box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  img {
    background: none;
    /* padding: 18px; */
  }
  p {
    font-size: 12px;
    color: #b2bbd2;
    background: #304553;
    padding: 4px 0px 4px 16px;
    margin-bottom: 3px;
  }
  .active-bets-status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
  .text {
    display: flex;
    grid-gap: 20px;
  }
  .BID {
    display: flex;
    align-items: center;
  }
  .BID > p:nth-child(1) {
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
  }
  .WIN {
    display: flex;
    align-items: center;
    grid-gap: 10px;
  }
  span {
    font-size: 18px;
    line-height: 140%;
    color: #ffffff;
  }
  #live span {
    color: #ffd600;
  }
  /* span:nth-child(2n + 1) {
    font-weight: 800;
    font-size: 18px;
    line-height: 140%;
    color: #FFD600;
  } */
  .Time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px 5px 0px;
    /* grid-gap: 84px; */
    /* padding: 5px 30px 5px 15px; */
    hr {
      height: 2px;
      width: 100%;
      max-width: 344px;
      margin: 0 auto;
      border: none;
      background: #314552;
    }

    p {
      color: #b2bbd2;
      background: none;
      padding: 0px;
    }
  }

  .Reactanglemini {
    width: 148px;
    height: 68px;
    background: #304553;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    padding: 0px 5px;
    grid-gap: 10px;
  }
  .box {
    width: 80px;
    height: 22px;
    background: #0a1a25;
    border-radius: 6px;
    cursor: pointer;

    span {
      color: #ffd600;
      font-size: 12px;
      padding: 5px;
      display: flex;
      justify-content: center;
    }
  }
  .Row {
    display: flex;
    grid-gap: 10px;
  }
  .Bid {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 5px;
    img {
      padding: 0;
    }
    span {
      color: #ffd600;
      font-size: 14px;
    }
  }
  .ScoreBoard {
    display: flex;
    align-items: center;
    background: none;
    justify-content: space-between;
    padding: 5px 25px 5px 15px;
    margin-bottom: 15px;

    p {
      font-weight: 800;
      font-size: 16px;
      color: #ffffff;
      background: none;
      padding: 3px;
    }
  }
  .Board {
    display: flex;
    background: none;
    grid-gap: 10px;
  }
  .Reactangle {
    display: flex;
    flex-direction: column;
    width: 182px;
    height: 68px;
    background: #304553;

    border-radius: 6px;
    p {
      padding-left: 10px;
    }

    .score {
      display: flex;
      justify-content: space-between;
      background: #304553;
      border-radius: 6px;

      p {
        color: #4792e3;
        background: none;
      }
      img {
        padding: 2px;
      }
    }
  }
  .Reactangle1 {
    display: flex;
    flex-direction: column;
    width: 182px;
    height: 68px;
    background: #081824;
    border-radius: 6px;
    p {
      padding-left: 10px;
    }

    .score1 {
      display: flex;
      justify-content: space-between;
      background: #081824;
      border-radius: 6px;

      p {
        color: #4792e3;
        background: none;
      }
      img {
        padding: 2px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    .active-bets-status {
      padding: 10px;

      span {
        font-size: 14px;
      }

      .text {
        gap: 15px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .active-bets-status {
      padding: 10px;

      span {
        font-size: 12px;
      }

      .text {
        gap: 10px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .active-bets-status {
      padding: 10px;

      span {
        font-size: 10px;
      }

      .text {
        gap: 5px;
      }
    }
  }
`;
