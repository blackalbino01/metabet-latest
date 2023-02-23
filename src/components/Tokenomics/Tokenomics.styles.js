import styled from "styled-components";
import ColorBack from "../../assets/images/Token/color.png";

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  min-height: 1660px;
  background: #223743;
  box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 10px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  .Heading {
    span {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #ffffff;
      padding: 0px 0px 10px 15px;
    }
  }

  .sub-headline {
    p {
      font-size: 12px;
      color: #b2bbd2;
      background: #304553;
      padding: 4px 0px 4px 16px;
      margin-bottom: 3px;
      display: flex;
      justify-content: flex-start;
    }
  }

  .Details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px 0px 15px;
    grid-gap: 46px;
    ul {
      text-decoration: none;
      list-style: none;
      font-size: 16px;
      line-height: 270.5%;
      color: #b2bbd2;
    }
  }
  .graph {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ul {
      display: flex;
      align-items: baseline;
      text-decoration: none;
      list-style: none;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        line-height: 270.5%;
        color: #b2bbd2;
      }
    }
  }
  .Icon {
    display: flex;
    flex-direction: column;
    margin-bottom: 65px;

    ul {
      display: flex;
      flex-direction: column;
      grid-gap: 10px;
      text-decoration: none;
      list-style: none;

      a {
        display: flex;
        grid-gap: 20px;
        font-size: 16px;
        line-height: 230.5%;
        color: #b2bbd2;
      }
    }
  }
  .Buy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px 10px 15px;
    grid-gap: 46px;
    font-size: 16px;
    color: #b2bbd2;
  }
  .Buy-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    cursor: pointer;
  }
  .amount,
  .cost {
    width: 181px;
    height: 40px;
    background: #0a1a25;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    align-items: center;

    input {
      font-size: 15px;
      color: #ffffff;
      width: 70px;
      background: #0a1a25;
      border: none;
    }
  }
  .AMOUNT {
    width: 260px;
    height: 40px;
    background: #0a1a25;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    align-items: center;

    input {
      font-size: 15px;
      color: #ffffff;
      width: 70px;
      background: #0a1a25;
      border: none;
    }
  }

  .Status {
    display: flex;
    grid-gap: 10px;
    align-items: center;
    span {
      font-size: 12px;
      color: #b2bbd2;
      padding: 0;
    }
  }
  .Buy-btn {
    button {
      width: 140px;
      height: 40px;
      background: #fc4c1e;
      border-radius: 6px;
      border: none;
      color: #ffffff;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .Sale-Details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px 0px 15px;
    grid-gap: 188px;
    ul {
      text-decoration: none;
      list-style: none;
      font-size: 16px;
      line-height: 310.5%;
      color: #b2bbd2;
    }
  }
  .Sales {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    grid-gap: 15px;
    p {
      font-size: 11px;
      color: #ffffff;
      justify-content: flex-start;
    }
  }
  .tag {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    span {
      padding: 0;
    }
  }
  .Rights {
    display: flex;
    padding: 15px 0px 15px 15px;
    grid-gap: 70px;
  }
  .Rights {
    display: flex;
    justify-content: space-around;

    span {
      font-size: 16px;
      font-weight: 500;
      line-height: 140%;
      padding: 0;
      color: #b2bbd2;
    }
  }
  .status {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .true-token {
    display: flex;
    align-items: center;
  }
  .Balance {
    width: 113px;
    height: 40px;
    background: #0a1a25;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 13px;
      line-height: 140%;
      color: #969696;
      padding: 5px;
    }

    input {
      font-size: 15px;
      color: #ffffff;
      width: 20px;
      background: #0a1a25;
      border: none;
    }
  }
  hr {
    width: 213px;
    height: 2px;
    border: none;
    background: #314552;
    margin: 10px 0px;
  }
  .Truth-History {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    grid-gap: 10px;
  }
  .Headline {
    display: flex;
    grid-gap: 105px;

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
      color: #ffffff;
    }
  }
  .UFC {
    width: 489px;
    height: 288px;
    background: #223743;
    box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .subheading {
    padding-left: 20px;
    p {
      justify-content: flex-start;
      font-size: 16px;
      line-height: 140%;
      color: #ffffff;
    }
  }
  .heading {
    display: flex;
    align-items: flex-start;
    padding: 10px 18px;
    grid-gap: 90px;
  }
  .TRUTH {
    padding: 10px;
    display: flex;
    grid-gap: 20px;
  }
  .truth {
    display: flex;
    flex-direction: column;
    /* grid-gap:5px; */
    p {
      font-weight: 500;
      font-size: 24px;
      line-height: 140%;
      color: #72d15c;
    }
    span {
      font-size: 16px;
      line-height: 140%;
      color: #ffffff;
    }
  }
  .txID {
    display: flex;
    grid-gap: 5px;
    p {
      font-size: 16px;
      line-height: 140%;
      text-decoration-line: underline;
      color: #4b7eff;
    }
  }
  .Date {
    display: flex;
    padding-left: 20px;
    grid-gap: 30px;
    align-items: center;
    p {
      font-size: 12px;
      color: #b2bbd2;
    }
    hr {
      width: 310px;
    }
  }
  .Board {
    display: flex;
    padding-left: 20px;
    background: none;
    grid-gap: 10px;
  }
  .Reactangle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 196px;
    height: 68px;
    border-radius: 6px;
    background: #081824;
    p {
      font-size: 16px;
      padding-left: 10px;
      color: #ffffff;
    }

    .score {
      display: flex;
      justify-content: flex-end;
      background: #081824;
      border-radius: 6px;
    }
  }
  .Reactangle1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #304553;
    width: 196px;
    height: 68px;
    border-radius: 6px;
    .score {
      display: flex;
      justify-content: flex-end;
      border-radius: 6px;
    }
    p {
      font-size: 16px;
      padding-left: 10px;
      color: #ffffff;
    }
  }
  .mini-rectangle {
    hr {
      width: 66px;
      height: 11px;
      background: #304553;
      border-radius: 8px;
      margin: 0;
    }
  }
  .footline {
    display: flex;
    grid-gap: 192px;

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #ffffff;
    }
  }
  .mini-rectangle1 {
    padding-left: 26px;
    hr {
      width: 66px;
      height: 11px;
      background: #304553;
      border-radius: 8px;
      margin: 0;
    }
  }
  .footline1 {
    display: flex;
    grid-gap: 185px;
    padding: 20px;
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #ffffff;
    }
  }
  .Table {
    display: flex;
    grid-gap: 30px;
    padding-right: 120px;
    justify-content: space-between;
  }
  .seats-owned {
    width: 565px;
    height: 288px;
    background: #223743;
    box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-left: 20px;
    padding-left: 10px;
    .line {
      padding-left: 26px;
      hr {
        width: 444px;
        height: 2px;
        border: none;
        background: #314552;
      }
    }
  }
  .Players {
    padding: 20px;
    display: flex;
    grid-gap: 30px;
    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 140%;
      color: #ffffff;
    }

    .img {
      background-image: url(${ColorBack});
      backdrop-filter: blur(5px);
    }
  }
  .Seats-text {
    padding: 10px 40px 10px 20px;
    display: flex;
    justify-content: space-between;
    p {
      justify-content: flex-start;
      font-size: 16px;
      line-height: 140%;
      color: #ffffff;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  .player-status {
    display: flex;
    padding-left: 20px;
    grid-gap: 30px;
    .Status {
      width: 284px;
      height: 40px;
    }
    button {
      width: 140px;
      height: 40px;
      border: none;
      background: #fc4c1e;
      border-radius: 6px;
      cursor: pointer;
      color: #ffffff;
    }
  }

  .wallet-box {
    display: flex;
    flex-direction: column;
    grid-gap: 25px;
    width: 308px;
    height: 288px;
    background: #223743;
    box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  .ActivePlayer {
    /* background: linear-gradient(123.41deg, rgba(47, 173, 32, 0.8) 28.58%, rgba(83, 222, 68, 0.8) 55.2%, rgba(49, 182, 33, 0.8) 76.63%, rgba(16, 102, 6, 0.8) 117.51%);
filter: blur(10px);
border-radius: 10px; */
    box-shadow: 10px 10px 5px lightblue;
  }
  .SeatBox {
    max-width: 1320px;
    margin-left: 15px;
    margin-right: 30px;
    height: 202px;
    background: #223743;
    box-shadow: -3px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    grid-gap: 50px;
    padding: 10px 10px 20px 10px;
  }

  .buyseat-btn {
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    grid-gap: 20px;
    cursor: pointer;
    label {
      color: #afafaf;
    }
    input {
      color: #afafaf;
      width: 100px;
      background: none;
      border: none;
    }
    button {
      width: 140px;
      height: 40px;
      background: #fc4c1e;
      border-radius: 6px;
      color: #ffffff;
      border: none;
      cursor: pointer;
    }
  }
  #seatinput {
    width: 70px;
  }

  .wrapper {
    position: relative;
    width: 100%;
    display: flex;
    grid-gap: 10px;
    height: 100%;
    padding: 5px;
    overflow-y: hidden;
    overflow-x: scroll;
    z-index: 999999;
  }
  .Page::after {
    content: "";
    position: absolute;
    z-index: 1;
    width: calc(100% - 20px);
    top: 10px;
    right: -1px;
    width: 8px;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 10px;
  }

  .wrapper::-webkit-scrollbar {
    display: block;
    width: 8px;
  }
  .wrapper::-webkit-scrollbar-track {
    background: transparent;
  }

  .wrapper::-webkit-scrollbar-thumb {
    background-color: #314552;
    border-right: none;
    border-left: none;
    border-radius: 10px;
    width: 11px;
    height: 66px;
  }

  .wrapper::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 10px;
  }

  .wrapper::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 9px;
  }

  .Page {
    position: relative;
    width: 460px;
  }

  .Page1::after {
    content: "";
    position: absolute;
    z-index: 1;
    width: calc(100% - 20px);
    top: 10px;
    right: -1px;
    width: 8px;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 10px;
  }

  .Page1 {
    position: relative;
    width: 620px;
  }
`;
export const Footer = styled.div `
     width: 100%;
  position: absolute;
  left: 0;
  bottom: -400px;
  width: 100%;
  transform: translate(342px, 55rem);

  img {
    max-width: 1009px;
  }
`
