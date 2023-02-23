import styled from "styled-components";
import Banner from "../../assets/images/BitcoinPrice/banner.webp";
import clock1 from "../../assets/images/BitcoinPrice/clock1.png";
import clock2 from "../../assets/images/BitcoinPrice/clock2.png";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;

  .hide {
    display: none;
  }

  .pie {
    display: flex;
    justify-content: center;
    background: #223542;
    border-radius: 8px;
    width: 100%;
    max-width: 420px;
    height: 326px;
    margin: 50px auto;
    filter: drop-shadow(0px 2.404px 2.404px rgba(0, 0, 0, 0.25));
  }

  /* video {
    .prediction {
      max-width: 400px;
    }
  } */

  @media screen and (max-width: 1080px) {
    max-width: 950px;
    margin: 0 auto;

    .pie {
      max-width: 700px;
    }
  }

  @media screen and (max-width: 768px), (max-width: 820px) {
    max-width: 743px;
    margin: 0 auto;

    .video {
      justify-content: space-around;
      gap: 0px;
    }

    .video-container {
      max-width: 451px;
      padding: 20px 15px;

      div:nth-child(1) {
        width: 100%;
        width: 100% !important;
        height: 300px !important;
      }
    }
  }

  @media screen and (max-width: 740px) {
    max-width: 700px;
    margin: 0 auto;

    .video {
      justify-content: center;
      gap: 15px;

      .prediction {
        span {
          font-size: 18px;
        }
      }

      .video-container {
        max-width: 281px;
        padding: 20px 15px;

        div:nth-child(1) {
          width: 100%;
          width: 100% !important;
          height: 300px !important;
        }
      }
    }

    .pie {
      max-width: 550px;
      height: 300px;
    }
  }

  @media screen and (max-width: 620px) {
    max-width: 560px;
    margin: 0 auto;

    .video {
      justify-content: center;
      gap: 15px;

      .prediction {
        span {
          font-size: 18px;
        }
      }

      .video-container {
        max-width: 226px;
        padding: 20px 15px;

        div:nth-child(1) {
          width: 100%;
          width: 100% !important;
          height: 300px !important;
        }
      }
    }

    .pie {
      max-width: 500px;
      height: 400px;
    }
  }

  @media screen and (max-width: 520px) {
    max-width: 490px;
    margin: 0 auto;

    .video-container {
      max-width: 391px;
      margin: 20px auto;

      div:nth-child(1) {
        width: 100%;
        width: 390px !important;
        height: 300px !important;
      }
    }
  }

  @media screen and (max-width: 420px) {
    max-width: 390px;
    margin: 0 auto;

    .video-container {
      max-width: 331px;
      margin: 20px auto;

      div:nth-child(1) {
        width: 100%;
        width: 330px !important;
        height: 300px !important;
      }
    }
  }
`;

export const StatContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #0f212e;
  border-radius: 10px;
  margin: 10px 0px;
  padding: 10px 0px;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: contain;

  .portfolio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;

    span {
      font-weight: 800;
      font-size: 24px;
      padding: 20px;
      color: #ffffff;
      background: #0a1a25;
      border-radius: 12px;
    }
  }

  .vs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 399px;
    padding: 5px;
    width: 100%;
    height: 100%;
    min-height: 224px;
    background: #0a1a25;
    box-shadow: 0px 4px 4px #05131d;
    border-radius: 12px;
    .predict {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
      max-width: 169px;
      min-height: 95px;
      background: #0f212e;
      border-radius: 12px;

      p {
        font-weight: 800;
        font-size: 17px;
        line-height: 140%;
        color: #95ff93;
      }
      .clock {
        display: flex;
        gap: 5px;
      }

      #color {
        color: #ff9393;
      }
      .time {
        font-size: 12px;
        color: #ffd600;
      }
    }
    .predict p:after {
      background-image: url(${clock1}) no-repeat;
      content: "";
    }

    .close {
      display: flex;
      gap: 20px;
    }

    /* span:nth-child(1) {
      font-weight: 700;
      font-size: 60px;
      color: #ffffff;
    } */
    span {
      color: #ffffff;
      font-weight: 800;
      font-size: 16px;
      line-height: 140%;
    }
    #live {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      /* align-items: center; */
      padding: 5px;
      gap: 105px;

      p:nth-child(1) {
        color: #fff;
        font-size: 16px;
        text-align: center;
      }

      p {
        font-weight: 800;
        font-size: 10px;
        color: #ffd600;
        text-align: right;
      }
    }
  }
  .rectangle {
    display: flex;
    padding: 5px;
    max-width: 355px;
    margin: 0 auto;
    gap: 94px;

    p {
      font-size: 13px;
      color: #b6b6b6;
      text-align: center;
    }
    .stats {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    span {
      display: flex;
      flex-direction: column;
      color: #ffffff;
      font-weight: 700;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 820px) {
    .portfolio {
      img {
        max-width: 110px;
      }

      span {
        font-size: 20px;
      }
    }

    .vs {
      max-width: 352px;
      span:nth-child(1) {
        font-size: 50px;
      }

      .close {
        gap: 10px;
      }

      #live {
        gap: 84px;
      }
    }

    .rectangle {
      max-width: 300px;
      gap: 80px;
    }
  }

  @media screen and (max-width: 740px) {
    .portfolio {
      img {
        max-width: 110px;
      }

      span {
        font-size: 17px;
        padding: 15px;
      }
    }

    .vs {
      max-width: 320px;

      span:nth-child(1) {
        font-size: 50px;
      }

      .close {
        gap: 10px;

        .predict {
          .clock p {
            font-size: 14px;
          }
        }
      }

      #live {
        gap: 64px;
      }
    }

    .rectangle {
      max-width: 290px;
      gap: 60px;
    }
  }

  @media screen and (max-width: 620px) {
    .portfolio {
      img {
        max-width: 95px;
      }

      span {
        font-size: 13px;
      }
    }

    .vs {
      max-width: 275px;
      transform: scale(0.8);
      span:nth-child(1) {
        font-size: 50px;
      }
    }

    .rectangle {
      max-width: 260px;
      gap: 40px;
    }
  }
  @media screen and (max-width: 520px) {
    .portfolio {
      img {
        max-width: 75px;
      }

      span {
        font-size: 16px;
      }
    }

    .vs {
      max-width: 90px;
      span:nth-child(1) {
        font-size: 45px;
      }
    }

    .rectangle {
      max-width: 90px;

      span:nth-child(1) {
        font-size: 14px;
      }

      span {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 420px) {
    .portfolio {
      img {
        max-width: 65px;
      }

      span {
        font-size: 14px;
      }
    }

    .vs {
      max-width: 90px;
      span:nth-child(1) {
        font-size: 40px;
      }

      .time {
        span:nth-child(1) {
          font-size: 12px;
        }

        span {
          font-size: 14px;
        }
      }
    }

    .rectangle {
      max-width: 55px;

      span:nth-child(1) {
        font-size: 12px;
      }

      span {
        font-size: 10px;
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  background: #112533;
  border-radius: 10px;
  padding: 10px 15px;

  @media screen and (max-width: 520px) {
    padding: 10px;
  }

  @media screen and (max-width: 420px) {
    padding: 10px;
  }

  @media screen and (max-width: 375px) {
    padding: 10px;
  }

  .WIN {
    display: flex;
    flex-direction: column;
    background: #0a1a25;
    border-radius: 10px;
    padding: 10px 45px;
    max-width: 205px;
    width: 100%;
    gap: 10px;

    .bet-btn {
      background: #fc4c1e;
    }

    p {
      text-align: center;
      font-weight: 700;
      font-size: 16px;
      color: #ffffff;
    }
    button {
      background: #fc4c1e;
      border-radius: 6px;
      color: #ffffff;
      border: none;
      cursor: pointer;
      padding: 10px;
    }
    span {
      font-weight: 500;
      font-size: 10px;
      color: #d6d6d6;
    }
  }

  @media screen and (max-width: 1080px) {
    .WIN {
      padding: 10px 20px;
    }
  }

  @media screen and (max-width: 820px) {
    .WIN {
      padding: 10px 20px;
      max-width: 180px;
    }
  }

  @media screen and (max-width: 768px) {
    .WIN {
      padding: 10px 20px;
      max-width: 160px;

      p {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 620px) {
    .WIN {
      padding: 5px 10px;
      max-width: 145px;

      p {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    .WIN {
      padding: 5px 10px;
      max-width: 125px;

      p {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .WIN {
      padding: 5px 10px;
      max-width: 101px;

      p {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .WIN {
      padding: 5px 10px;
      max-width: 90px;

      p {
        font-size: 12px;
      }

      button {
        padding: 5px;
        font-size: 12px;
      }
    }
  }
`;
export const Table = styled.div`
  max-width: 965px;
  width: 100%;
  min-height: 414px;
  background: #112533;
  border-radius: 10px;
  margin: 10px;

  p {
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }
  .head {
    background: #0a1a25;
    border-radius: 10px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    grid-gap: 500px;
  }
  .Content {
    display: flex;
  }
  .item {
    display: flex;
    align-items: center;
    grid-gap: 100px;
  }
  .Currency,
  .Pool {
    margin: 15px;
    ul {
      display: flex;
      flex-direction: column;
      grid-gap: 25px;
      list-style: none;
      text-decoration: none;
      a {
        display: flex;
        align-items: center;
        grid-gap: 15px;
        color: #ffffff;
        font-weight: 700;
        font-size: 14px;
        line-height: 140%;
      }
    }
  }
  .Bet li {
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
  }
  .Bet button {
    width: 150px;
    height: 21px;
    background: #fc4c1e;
    border-radius: 6px;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
  .Item {
    display: flex;
    align-items: center;
    grid-gap: 100px;
  }
`;
export const Interface = styled.div`
  width: 100%;
  max-width: 965px;
  min-height: 941px;
  margin-left: 10px;

  .Inter-Headline,
  .Inter-Headline1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    p {
      font-size: 18px;
    }
  }
  .Inter-Headline1 {
    padding: 15px 0px;
  }
  .waiting {
    display: flex;
    align-items: center;
    grid-gap: 5px;
  }
  .Cash,
  .Truth-Teller {
    display: flex;
    align-items: center;
    grid-gap: 10px;
  }
  .Paid,
  .cash {
    display: flex;
    align-items: center;
    grid-gap: 10px;
    span {
      font-size: 24px;
      line-height: 140%;
      color: #fc4c1e;
    }
  }
  .MadridBoard {
    max-width: 965px;
    min-height: 290px;
    background: #112533;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
  }
  .board {
    width: 946px;
    height: 185px;
    background: #0a1a25;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
  }
  .Votes,
  .TruthTime {
    display: flex;
    flex-direction: column;
    color: #ffffff;
    font-size: 12px;
    span {
      font-size: 22px;
      line-height: 140%;
      color: #dadada;
    }
    p {
      font-size: 12px;
      line-height: 140%;
      color: #ffffff;
    }
  }
  .RealMadrid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    span {
      font-weight: 700;
      font-size: 26px;
      line-height: 95%;
      display: flex;
      align-items: center;
      color: #ffffff;
    }
  }

  .box {
    width: 140px;
    height: 61px;
    background: #112533;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      background: #fc4c1e;
      border-radius: 6px;
      font-size: 12px;
      border: none;
      width: 120.71px;
      height: 34px;
      cursor: pointer;
      color: #ffffff;
    }
  }
  .Madrid-btn-box {
    display: flex;
    grid-gap: 10px;
  }
  .Progress {
    width: 284px;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 140%;
      text-align: center;
      color: #dadada;
    }
  }
  .ProgressBar {
    display: flex;
    grid-gap: 20px;
    justify-content: space-between;
  }
  .player-table {
    display: flex;
    grid-gap: 50px;
    margin-left: 20px;
  }
  .player-sub-table {
    display: flex;
    grid-gap: 45px;
  }
  .Connect-list,
  .Truth-list {
    display: flex;
    grid-gap: 20px;
    ul {
      display: flex;
      list-style: none;
      text-decoration: none;
      flex-direction: column;
      grid-gap: 50px;
      align-items: center;
      justify-content: center;

      li {
        display: flex;
        font-size: 18px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #dadada;
        grid-gap: 10px;
      }
      a {
        font-size: 18px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #dadada;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .Player-list {
    display: flex;
    grid-gap: 60px;
    ul {
      display: flex;
      list-style: none;
      text-decoration: none;
      flex-direction: column;
      grid-gap: 5px;

      li {
        display: flex;
        font-size: 20px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #dadada;
        grid-gap: 10px;
      }
      a {
        font-size: 20px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #dadada;
        align-items: center;
        justify-content: center;
        grid-gap: 10px;
      }
    }
  }
  .connect-truth {
    display: flex;
    grid-gap: 35px;
  }

  .veification-text {
    p {
      font-weight: 700;
      font-size: 20px;
      line-height: 140%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0px;
      color: #ffffff;
    }
  }
`;
