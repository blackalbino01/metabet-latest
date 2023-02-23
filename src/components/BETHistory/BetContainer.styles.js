import styled from "styled-components";
export const ContainerBet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 30px;
  margin-top: 20px;
  background: #081824;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .betHistory-container {
    display: flex;
    justify-content: space-between;
    position: relative;

    hr {
      position: absolute;
      max-width: 872px;
      right: 0%;
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
      gap: 30px;
      width: 100%;

      .table-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;

        .bet-th {
          display: flex;
          gap: 69px;
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
  }

  @media screen and (max-width: 1280px) {
    .betHistory-container {
      hr {
        max-width: 825px;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
    max-width: 660px;
    margin-left: 10px;
    .betHistory-container {
      hr {
        max-width: 872px;
      }
    }
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
              font-size: 10px;
              width: 100%;
              max-width: 97px;
            }
          }
          .bet-td {
            span {
              max-width: 93px;
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
        max-width: 600px;
        right: 4%;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 590px;

    .betHistory-container {
      .bet-item-1 {
        .table-wrapper {
          .bet-td {
            span {
              max-width: 82px;
            }
            #chain {
              max-width: 18px;
            }
          }
        }
      }

      hr {
        max-width: 530px;
        right: 4%;
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
    max-width: 389px;

    .betHistory-container {
      .bet-item-1 {
        gap: 15px;
        img {
          max-width: 20px;
        }

        .table-wrapper {
          .bet-th,
          .bet-td {
            span {
              font-size: 8px;
            }
          }
          .bet-td {
            span {
              max-width: 53px;
            }
            #chain {
              max-width: 15px;
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
        max-width: 358px;
        right: 1%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 660px;
    margin-left: 25px;
    .betHistory-container {
      hr {
        max-width: 872px;
      }
    }
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
              font-size: 10px;
              width: 100%;
              max-width: 97px;
            }
          }
          .bet-td {
            span {
              max-width: 93px;
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
        max-width: 600px;
        right: 4%;
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
    max-width: 335px;
    margin-left: 10px;
    gap: 20px;

    .betHistory-container {
      .bet-item-1 {
        gap: 15px;
        img {
          max-width: 20px;
        }

        .table-wrapper {
          .bet-th,
          .bet-td {
            gap: 0px;
            span {
              font-size: 7px;
            }
          }
          .bet-td {
            span {
              max-width: 46px;
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
              font-size: 7px;
            }
          }
        }
      }
      hr {
        max-width: 300px;
        right: 2%;
      }
    }
  }
`;
