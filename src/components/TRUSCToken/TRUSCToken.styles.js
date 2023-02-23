import styled from "styled-components";

export const TRUSCTokenContainer = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  gap: 80px;
  img {
    cursor: pointer;
  }
`;

export const Container1 = styled.div`
  width: 100%;
  margin: 20px 10px;
  display: flex;
  gap: 20px;

  .fox-stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
  }
  #rate {
    font-size: 14px;
    color: #999999;
    font-family: "MostraNuova";
    font-style: normal;
    font-weight: 500;
  }
  #dollar_rate {
    font-size: 22px;
    line-height: 143.7%;
    color: #ffffff;
    text-shadow: 0px 0px 30px #ffffff;
    font-family: "Inter";
  }
  #dollar {
    font-family: "Inter";
    font-size: 18px;
    color: #ffffff;
    text-shadow: 0px 0px 30px #ffffff;
  }
  span {
    font-size: 16px;
    color: #999999;
    font-family: "Inter";
    font-style: normal;
    font-size: 16px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 5px;

    #rate {
      font-family: "Junegull";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;
    }
  }
  .balance-sheet {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 330px;
    min-height: 162px;
    background: #1f313d;
    border: 1px solid #36404f;
    border-radius: 8px;
    padding: 10px 20px;
    gap: 15px;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
  .balance-sheet1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 418px;
    min-height: 162px;
    padding: 10px;
    gap: 20px;
  }
  .true {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .trueai {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .list {
    display: flex;
    justify-content: space-around;
    div {
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: center;
    }
  }
  .trusc-withdraw {
    display: flex;
    flex-direction: column;
    align-items: end;
    label {
      color: #637592;
      font-size: 20px;
      display: flex;
      align-items: center;
      input {
        background: transparent;
        border: none;
        color: #ffffff;
        padding: 5px;
        max-width: 60px;
        font-size: 20px;
      }
      input::placeholder {
        color: #ffffff;
        font-size: 20px;
        text-align: end;
      }
    }
  }
  .trusc-withdraw1 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      align-items: end;
      flex-direction: column;
      display: flex;
      span {
        align-self: center;
        padding-left: 40px;
      }
    }
    label {
      color: #637592;
      font-size: 20px;
      display: flex;
      align-items: center;
      input {
        background: transparent;
        border: none;
        color: #ffffff;
        padding: 5px;
        max-width: 115px;
        font-size: 20px;
      }
      input::placeholder {
        color: #ffffff;
        font-size: 20px;
        text-align: end;
      }
    }
  }
`;

export const Balance = styled.div`
  width: 100%;
  max-width: 985px;
  min-height: 506px;
  background: #1f313d;
  border: 1px solid #36404f;
  border-radius: 8px;
  .currency {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .item {
      display: flex;
      flex-direction: column;
      gap: 10px;
      #currency {
        font-family: "Junegull";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #ffffff;
      }
    }
  }
  .fox-stats {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 5px;
    span {
      font-size: 12px;
      color: #999999;
      font-family: "MostraNuova";
    }

    #rate {
      font-family: "Junegull";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      color: #ffffff;
    }
  }
`;
