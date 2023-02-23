import styled from "styled-components";
import Banner from "../../assets/images/BitcoinPrice/banner.webp";
import clock1 from "../../assets/images/BitcoinPrice/clock1.png";
import clock2 from "../../assets/images/BitcoinPrice/clock2.png";

export const PoliticsContainer = styled.div`
  margin-top: 8px;
  width: 100%;
  min-height: 260px;
  flex-direction: ${(props) => props.displayDirection};
  /* flex-wrap: wrap; */
  display: ${(props) => props.displayType};
  grid-template-columns: ${(props) => props.gridTemplateColum};
  grid-gap: 10px;
  /* margin-bottom: 120px; */

  .hide {
    display: none;
  }

  .pie {
    display: flex;
    justify-content: center;
    background: #223542;
    border-radius: 8px;
    width: 100%;
    max-width: 760px;
    height: 500px;
    margin: 50px auto;
    filter: drop-shadow(0px 2.404px 2.404px rgba(0, 0, 0, 0.25));
  }

  @media screen and (max-width: 1080px) {
    max-width: 950px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;

    .pie {
      max-width: 700px;
    }
  }
  @media screen and (max-width: 1024px) {
    margin: 0px 10px;
    max-width: 645px;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 912px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 820px) {
    max-width: 417px;
    margin: 10px 20px;
    grid-template-columns: 1fr;

    .grid-pad {
      padding: 0px 80px;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0px;
  }
  @media screen and (max-width: 768px) {
    max-width: 648px;
    margin: 30px auto 0;

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
    max-width: 720px;
    margin: 0 auto;
    grid-template-columns: 1fr;

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
      max-width: 600px;
      height: 400px;
    }
  }

  @media screen and (max-width: 620px) {
    max-width: 560px;
    margin: 0 auto;
    grid-template-columns: 1fr;

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
    grid-template-columns: 1fr;

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
    grid-template-columns: 1fr;

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
  @media screen and (max-width: 390px) {
    max-width: 330px;
    margin: 0 auto;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
    .grid-pad {
      padding: 0px 45px;
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
    max-width: 240px;
    padding: 10px;
    min-height: 230px;
    width: 100%;
    height: 100%;
    background: #0a1a25;
    box-shadow: 0px 4px 4px #05131d;
    border-radius: 12px;
    .outcome {
      display: flex;
      span {
        font-weight: 800;
        font-size: 17px;
        line-height: 140%;
        color: #95ff93;
      }
      .clock {
        display: flex;
        gap: 5px;
      }
    }
    .predict {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
      max-width: 160px;
      min-height: 95px;
      background: #0f212e;
      border-radius: 12px;
      span:nth-child(2) {
        font-size: 14px;
        line-height: 140%;
        color: #ffffff;
      }

      span {
        font-weight: 800;
        font-size: 17px;
        line-height: 140%;
        color: #ff9393;
      }
      .clock {
        display: flex;
        gap: 5px;
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
      flex-direction: column;
      gap: 10px;
      margin-top: 5px;
      align-items: center;
    }
    span {
      color: #ffffff;
      font-weight: 800;
      font-size: 16px;
      line-height: 140%;
      text-align: center;
    }
    #live {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      padding: 5px;
      gap: 105px;

      span {
        font-weight: 800;
        font-size: 10px;
        color: #ffd600;
        text-align: right;
      }
    }
  }
  .rectangle {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #112533;
    border-radius: 12px;
    padding: 10px;
    min-height: 230px;
    max-width: 163px;
    gap: 10px;

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
    span:nth-child(1) {
      font-weight: 800;
      font-size: 18px;
      line-height: 140%;
      color: #ffffff;
    }

    span {
      display: flex;
      flex-direction: column;
      font-weight: 500;
      font-size: 11px;
      line-height: 140%;
      color: #b6b6b6;
    }
  }
  @media screen and (max-width: 1080px) {
    .portfolio {
      img {
        width: 100%;
        max-width: 283px;
        min-height: 157px;
      }
      span {
        font-size: 16px;
      }

      .vs {
        max-width: 162.06px;
        min-height: 149.5px;
        span {
          font-size: 14px;
        }
        span:nth-child(1) {
          font-size: 14px;
        }
        .close {
          gap: 0px;
        }

        #live {
          gap: 84px;
          span {
            font-size: 7px;
          }
        }
        .predict {
          max-width: 106px;
          min-height: 68px;

          span:nth-child(2) {
            font-size: 10px;
          }
        }
      }

      .rectangle {
        min-height: 129px;
        max-width: 120px;
        gap: 16px;
        span {
          font-size: 12px;
        }
        span:nth-child(1) {
          font-size: 14px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .vs {
      max-width: 166px;
    }
    .rectangle {
      max-width: 123px;
      min-height: 245px;
    }
  }

  @media screen and (max-width: 912px) {
    .portfolio {
      img {
        max-width: 300px;
      }

      span {
        font-size: 10px;
      }
    }

    .vs {
      max-width: 142px;
      min-height: 135px;
      padding: 5px;

      span {
        font-size: 10px;
      }
      span:nth-child(1) {
        font-size: 10px;
      }
      .close {
        gap: 0px;
      }

      #live {
        gap: 84px;
        span {
          font-size: 7px;
        }
      }
      .predict {
        max-width: 94px;
        min-height: 35px;
        gap: 5px;
        padding: 5px;

        span:nth-child(2) {
          font-size: 7px;
        }
      }
    }

    .rectangle {
      min-height: 129px;
      max-width: 120px;
      gap: 2px;
      padding: 7px;
      span {
        font-size: 8px;
      }
      span:nth-child(1) {
        font-size: 10px;
      }
    }
  }

  @media screen and (max-width: 820px) {
    .portfolio {
      img {
        max-width: 177px;
      }

      span {
        font-size: 8px;
      }
    }
    .vs {
      max-width: 90px;
      min-height: 91px;
      padding: 5px;
      padding-top: 0px;
      justify-content: center;
      span {
        font-size: 8px;
      }
      span:nth-child(1) {
        font-size: 8px;
      }
      .close {
        gap: 0px;
        margin-top: 0px;
      }

      #live {
        gap: 84px;
        span {
          font-size: 3.75px;
        }
      }
      .predict {
        max-width: 65px;
        min-height: 38px;
        padding: 5px;
        gap: 5px;
        border-radius: 4.5px;

        span:nth-child(2) {
          font-size: 4.5px;
        }
      }
      .close {
        img {
          width: 5.5px;
        }
      }
      .clock {
        align-items: baseline;
      }
    }

    .rectangle {
      min-height: 78px;
      max-width: 65px;
      gap: 5px;
      span {
        font-size: 6.25px;
      }
      span:nth-child(1) {
        font-size: 8px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .portfolio {
      img {
        max-width: 300px;
      }

      span {
        font-size: 20px;
      }
    }

    .vs {
      max-width: 162.06px;
      min-height: 149.5px;
      span {
        font-size: 14px;
      }
      span:nth-child(1) {
        font-size: 14px;
      }
      .close {
        gap: 0px;
      }

      #live {
        gap: 84px;
        span {
          font-size: 7px;
        }
      }
      .predict {
        max-width: 106px;
        min-height: 68px;

        span:nth-child(2) {
          font-size: 10px;
        }
      }
    }

    .rectangle {
      min-height: 129px;
      max-width: 150px;
      span {
        font-size: 12px;
      }
      span:nth-child(1) {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 620px) {
    .portfolio {
      img {
        max-width: 266px;
      }

      span {
        font-size: 20px;
      }
    }

    .vs {
      max-width: 110.06px;
      span {
        font-size: 9.568px;
      }
      span:nth-child(1) {
        font-size: 10.166px;
      }
      .close {
        gap: 0px;
      }

      #live {
        gap: 84px;
        span {
          font-size: 5.98px;
        }
      }
      .predict {
        max-width: 95px;
        min-height: 68px;

        span:nth-child(2) {
          font-size: 7.176px;
        }
      }
    }

    .rectangle {
      min-height: 154px;
      max-width: 95px;
      gap: 20px;
      span {
        font-size: 8.372px;
      }
      span:nth-child(1) {
        font-size: 10.764px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .portfolio {
      img {
        max-width: 177px;
      }

      span {
        font-size: 8px;
      }
    }
    .vs {
      max-width: 90px;
      min-height: 91px;
      padding: 5px;
      padding-top: 0px;
      justify-content: center;
      span {
        font-size: 8px;
      }
      span:nth-child(1) {
        font-size: 8px;
      }
      .close {
        gap: 0px;
        margin-top: 0px;
      }

      #live {
        gap: 84px;
        span {
          font-size: 3.75px;
        }
      }
      .predict {
        max-width: 65px;
        min-height: 38px;
        padding: 5px;
        gap: 5px;
        border-radius: 4.5px;

        span:nth-child(2) {
          font-size: 4.5px;
        }
      }
      .close {
        img {
          width: 5.5px;
        }
      }
      .clock {
        align-items: baseline;
      }
    }

    .rectangle {
      min-height: 78px;
      max-width: 65px;
      gap: 5px;
      span {
        font-size: 6.25px;
      }
      span:nth-child(1) {
        font-size: 8px;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .portfolio {
      img {
        max-width: 177px;
      }

      span {
        font-size: 6px;
      }
    }

    .vs {
      max-width: 90px;
      min-height: 91px;
      padding: 5px;
      padding-top: 0px;
      justify-content: center;
      span {
        font-size: 6px;
      }
      span:nth-child(1) {
        font-size: 6px;
      }
      .close {
        gap: 0px;
        margin-top: 0px;
      }

      #live {
        gap: 84px;
        span {
          font-size: 3.75px;
        }
      }
      .predict {
        max-width: 55px;
        min-height: 38px;
        padding: 5px;
        gap: 5px;
        border-radius: 4.5px;

        span:nth-child(2) {
          font-size: 4.5px;
        }
      }
      .close {
        img {
          width: 5.5px;
        }
      }
      .clock {
        align-items: baseline;
      }
    }

    .rectangle {
      min-height: 78px;
      max-width: 53px;
      gap: 5px;
      span {
        font-size: 5.25px;
      }
      span:nth-child(1) {
        font-size: 6.75px;
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

  @media screen and (max-width: 420px) {
    padding: 10px;
  }

  @media screen and (max-width: 375px) {
    padding: 10px;
  }

  .WIN {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #0a1a25;
    border-radius: 10px;
    padding: 10px;
    max-width: 205px;
    width: 100%;
    gap: 10px;
    .title {
      display: flex;
      gap: 2px;
    }
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
      align-items: center;
      max-width: 163.8px;
      min-height: 37px;
      background: #fc4c1e;
      border-radius: 6px;
      color: #ffffff;
      border: none;
      font-size: 14px;
      cursor: pointer;
      padding: 10px 65px;
    }
    span {
      font-weight: 500;
      font-size: 10px;
      color: #d6d6d6;
    }
  }

  @media screen and (max-width: 1080px) {
    .WIN {
      padding: 10px;
      max-width: 195px;

      p {
        font-size: 14px;
      }

      button {
        font-size: 12px;
        padding: 5px 55px;
        min-height: 20px;
      }
    }
  }

  @media screen and (max-width: 820px) {
    .WIN {
      padding: 10px;
      max-width: 150px;

      p {
        font-size: 12px;
      }

      button {
        font-size: 10px;
        padding: 5px 45px;
        min-height: 20px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .WIN {
      padding: 10px;
      max-width: 150px;

      p {
        font-size: 12px;
      }

      button {
        font-size: 10px;
        padding: 5px 45px;
        min-height: 20px;
      }
    }
  }
  @media screen and (max-width: 620px) {
    .WIN {
      padding: 5px 5px;
      max-width: 115px;

      p {
        font-size: 9px;
      }

      button {
        font-size: 8.386px;
        padding: 0px 35px;
        min-height: 20px;
      }
    }
  }
  @media screen and (max-width: 420px) {
    .WIN {
      padding: 5px;
      max-width: 76px;
      gap: 5px;
      border-radius: 3.75px;

      p {
        font-size: 6px;
      }

      button {
        padding: 0px 25px;
        font-size: 5.25px;
        border-radius: 2.25px;
        min-height: 15px;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .WIN {
      padding: 5px;
      max-width: 76px;
      gap: 5px;
      border-radius: 3.75px;

      p {
        font-size: 6px;
      }

      button {
        padding: 0px 25px;
        font-size: 5.25px;
        border-radius: 2.25px;
        min-height: 15px;
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
