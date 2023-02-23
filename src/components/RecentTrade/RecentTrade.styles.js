import styled from "styled-components";

export const TradeTable = styled.div`
  max-width: 956px;
  min-height: 200px;
  background: #112533;
  border-radius: 10px;
  width: 100%;

  .th-Head {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
    max-width: 931px;

    span {
      font-weight: 800;
      font-size: 14px;
      color: #b1bad1;
    }

    .item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 632px;
    }
  }

  .td-Head {
    width: 100%;
    max-width: 934px;
    .td-item {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 10px;

      span {
        font-weight: 800;
        font-size: 16px;
        color: #ffffff;
      }

      .td-wrapper {
        display: flex;
        width: 100%;
        justify-content: space-between;

        .item_1 {
          display: flex;
          gap: 10px;
          padding-left: 10px;
        }
        #scan-icon {
          transform: translateX(20px);
        }
        .item_2 {
          display: flex;
          justify-content: space-around;
          width: 100%;
          max-width: 632px;
          align-self: end;
        }
      }
    }
  }

  .Hwrapper {
    p {
      font-weight: 700;
      font-size: 15px;
      color: #b1bad1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .Name {
    p {
      color: #ffffff;
    }
  }

  .Head {
    border-radius: 10px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    grid-gap: 290px;
  }
  .Content {
    display: flex;
    justify-content: flex-start;

    .Name {
      display: flex;
      gap: 10px;
      width: 100%;
      max-width: 336px;
    }

    .td-item {
      display: flex;
    }
  }

  .right-item {
    display: flex;
    align-items: center;
    grid-gap: 50px;

    .Hwrapper {
      display: flex;
      gap: 10px;
      width: 100%;
    }
  }

  .Pool,
  .Time,
  .Bet-Amount,
  .Recipt,
  .ODDS {
    margin: 15px;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      grid-gap: 27px;
      list-style: none;
      text-decoration: none;
      li {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        grid-gap: 15px;
        color: #b1bad1;
        font-weight: 700;
        font-size: 14px;
        line-height: 140%;
      }
    }
  }
  .Event {
    margin: 30px 12px;
    ul {
      display: flex;
      flex-direction: column;
      grid-gap: 25px;
      list-style: none;
      text-decoration: none;
      li {
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
  .Recipt {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
    grid-gap: 27px;
    margin-left: 75px;
  }
  .wallet {
    margin: 15px;
    ul {
      display: flex;
      flex-direction: column;
      grid-gap: 27px;
      list-style: none;
      text-decoration: none;
    }
  }
  .Hwrapper {
  }

  .Bet li {
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
  }
  .Bet button {
    width: 150px;
    height: 21px;
    background: #7b7b7b;
    border-radius: 6px;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  .Item {
    display: flex;
    align-items: center;
  }
  .right-Item {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .changeItem {
    display: flex;
    grid-gap: 90px;
  }
  .Item1 {
    display: flex;
  }
  .accordion-title {
    display: flex;
    grid-gap: 20px;
  }
  .buy-icon {
    display: flex;
    p {
      color: #b1bad1;
    }
  }

  @media screen and (max-width: 820px) {
    .Head {
      background: #0a1a25;
      border-radius: 10px;
      height: 51px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 20px;
      gap: 58px;
    }
    .Content {
      background: none;
      padding: 0;
      width: initial;
      justify-content: none;

      .Name {
        width: initial;
        gap: 0px;
      }

      .Item {
        gap: 47px;
        .right-Item {
          gap: 0;

          .Hwrapper {
            width: initial;
            gap: 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 740px) {
    .Head {
      background: #0a1a25;
      border-radius: 10px;
      height: 51px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 20px;
      gap: 53px;

      .item {
        gap: 58px;
      }
    }
    .Content {
      background: none;
      padding: 0;
      width: initial;
      justify-content: none;

      .Name {
        width: initial;
        gap: 0px;
      }

      .Item {
        gap: 47px;
        .right-Item {
          gap: 0;

          .Hwrapper {
            width: initial;
            gap: 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 620px) {
    .Head {
      background: #0a1a25;
      border-radius: 10px;
      height: 51px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 20px;
      gap: 22px;

      p {
        font-size: 12px;
      }

      .item {
        gap: 58px;
      }
    }
    .Content {
      gap: 107px;

      .Name {
        width: initial;
        gap: 0px;
      }

      .Item {
        gap: 47px;
        .right-Item {
          gap: 0;

          .Hwrapper {
            width: initial;
            gap: 0;
          }
        }
      }
    }
  }
`;
