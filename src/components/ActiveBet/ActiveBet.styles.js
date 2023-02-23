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
    padding: 20px 35px;
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

  @media screen and (max-width: 375px) {
    .history_span {
      span {
        font-size: 12px;
      }
    }
  }
`;
export const ContainerBet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 30px;
  margin-left: 10px;

  .betHistory-container {
    display: flex;
    justify-content: space-between;
    position: relative;

    hr {
      position: absolute;
      max-width: 835px;
      right: 1%;
      top: 45%;
      border: none;
      width: 100%;
      height: 2px;
      background: #282c34;
      border-radius: 5px;
    }

    .bet-item-1 {
      display: flex;
      align-items: center;
      justify-content: inherit;
      gap: 30px;
      width: 100%;
      max-width: 940px;
      padding: 15px;
      background: #081824;
      border-radius: 10px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      .right-pannel {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        div {
          display: flex;
          gap: 5px;
        }

        button {
          border: none;
          background: #122939;
          border-radius: 7px;
          font-size: 12px;
          color: #fff;
          cursor: pointer;
          max-width: 47px;
          min-height: 33px;
          padding: 10px;
        }
      }

      .table-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .bet-th {
          display: flex;
          gap: 69px;
          font-weight: 700;
          font-size: 12px;
          color: #f4cd68;
        }

        .bet-td {
          display: flex;

          gap: 30px;
          font-weight: 700;
          font-size: 14px;
          color: #fff;
        }

        .bet-td1 {
          display: flex;
          gap: 120px;
          font-weight: 700;
          font-size: 14px;
          color: #fff;
        }
      }
    }

    .bet-item-2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin-top: 4px;
      max-width: 100px;

      .table-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;

        .bet-th {
          display: flex;
          gap: 15px;
          font-weight: 700;
          font-size: 12px;
          color: #f4cd68;

          span {
            width: 100%;
          }
        }

        .bet-td {
          display: flex;
          gap: 15px;
          font-weight: 700;
          font-size: 16px;
          color: #fff;

          span {
            width: 100%;
          }
        }
      }
    }

    .status-btn {
      display: flex;
      flex-direction: column;
      gap: 20px;
      div {
        display: flex;
        gap: 10px;
      }
      button {
        width: 100%;
        max-width: 90px;
        min-height: 27px;
        padding: 10px;
        background: #52b143;
        border-radius: 6px;
        border: none;
        color: #fff;
        cursor: pointer;
      }
      .sell {
        background: #de4b4b;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .betHistory-container {
      hr {
        max-width: 825px;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .betHistory-container {
      hr {
        max-width: 872px;
      }
    }
  }

  @media screen and (max-width: 920px) {
    .betHistory-container {
      hr {
        max-width: 795px;
      }
    }
  }

  @media screen and (max-width: 820px) {
    .betHistory-container {
      hr {
        max-width: 692px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .betHistory-container {
      hr {
        max-width: 651px;
      }
    }
  }

  @media screen and (max-width: 620px) {
    .betHistory-container {
      hr {
        max-width: 432px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    padding: 10px;

    .betHistory-container {
      .bet-item-1 {
        gap: 15px;
        img {
          max-width: 25px;
        }

        .table-wrapper {
          .bet-th,
          .bet-td {
            gap: 0px;
            span {
              font-size: 11px;
            }
          }
        }
      }
      .bet-item-2 {
        max-width: 54px;
        .table-wrapper {
          .bet-th,
          .bet-td {
            img {
              max-width: 15px;
            }
            span {
              font-size: 9px;
            }
          }
        }
      }
      hr {
        max-width: 382px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    padding: 10px;

    .betHistory-container {
      .bet-item-1 {
        gap: 15px;
        img {
          max-width: 25px;
        }

        .table-wrapper {
          .bet-th,
          .bet-td {
            gap: 0px;
            span {
              font-size: 11px;
            }
          }
        }
      }
      .bet-item-2 {
        max-width: 54px;
        .table-wrapper {
          .bet-th,
          .bet-td {
            img {
              max-width: 15px;
            }
            span {
              font-size: 9px;
            }
          }
        }
      }

      hr {
        max-width: 355px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    padding: 10px;
    .betHistory-container {
      .bet-item-1 {
        gap: 15px;
        img {
          max-width: 25px;
        }

        .table-wrapper {
          .bet-th,
          .bet-td {
            gap: 0px;
            span {
              font-size: 9px;
            }
          }
        }
      }
      .bet-item-2 {
        max-width: 54px;
        .table-wrapper {
          .bet-th,
          .bet-td {
            img {
              max-width: 15px;
            }
            span {
              font-size: 9px;
            }
          }
        }
      }
      hr {
        max-width: 311px;
        height: 1px;
      }
    }
  }
`;
