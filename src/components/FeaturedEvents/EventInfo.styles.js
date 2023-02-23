import styled from "styled-components";

export const BetContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #0f212e;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 975px;

  .featured-banner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .flag_wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      span {
        font-weight: 800;
        font-size: ${(props) => props.text};
        color: #ffffff;
      }
      img {
        width: 149px;
      }
    }

    .statistic_rectangle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #112533;
      gap: ${(props) => props.textGap};
      padding: 35px 10px;
      min-width: 150px;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 18px;
        color: #ffffff;
      }

      span {
        display: flex;
        flex-direction: column;
        color: #b6b6b6;
        font-weight: 500;
        font-size: 11px;
      }
    }

    .player-VS {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 93px;
      gap: 0px;
      transform: none;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 35px;
        color: #ffffff;
      }
      span {
        display: flex;
        align-items: center;
        text-align: center;
        color: #ffffff;
        font-weight: 700;
        font-size: 12px;
        padding: 10px;
      }

      .time {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #ffffff;

        span:nth-child(1) {
          font-size: 12px;
        }

        span {
          font-size: 16px;
          color: #ffd600;
        }
      }
    }
  }

  @media screen and (max-width: 620px) {
    .portfolio {
      img {
        max-width: 95px;
      }

      span {
        font-size: 20px;
      }
    }

    .vs {
      max-width: 90px;
      span:nth-child(1) {
        font-size: 50px;
      }
    }

    .rectangle {
      max-width: 105px;
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
export const UFCFeaturedBannersContainer = styled("div")`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: contain;
  height: 43vh;

  h1 {
    color: #fff;
    margin: 10px 20px;
  }

  .UFC-featured-banner-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 50px;

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

        button {
          background: #fc4c1e;
          border-radius: 5.99657px;
          border: none;
          color: #fff;
          padding: 8px 20px;
          cursor: pointer;
        }
      }
    }

    .country_wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      img {
        width: 135px;
      }

      span {
        font-weight: 800;
        font-size: 18px;
        color: #ffffff;
        background: none;
      }
    }
  }

  @media screen and (max-width: 840px) {
    .featured-banner-wrapper {
      padding: 35px;
    }
  }

  @media screen and (max-width: 768px) {
    height: 180px;

    .featured-banner-wrapper {
      padding: 25px;

      .country_wrapper {
        img {
          max-width: 80px;
        }
      }

      .player-VS {
        a {
          button {
            width: 111px;
          }
        }
      }
    }

    .Bet {
      transform: translate(0px, 48px);
      padding-left: 10px;
    }
  }

  @media screen and (max-width: 620px) {
    height: 135px;

    .featured-banner-wrapper {
      padding: 15px;
      gap: 10px;

      .country_wrapper {
        img {
          max-width: 70px;
        }

        span {
          font-size: 14px;
        }
      }

      .player-VS {
        a {
          button {
            width: 111px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    height: 125px;

    .featured-banner-wrapper {
      padding: 15px;
      gap: 10px;

      .country_wrapper {
        img {
          max-width: 60px;
        }

        span {
          font-size: 14px;
        }
      }

      .player-VS {
        span {
          font-size: 19px;
        }
        a {
          button {
            width: 80px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    height: 100px;

    .featured-banner-wrapper {
      padding: 10px;
      gap: 10px;

      .country_wrapper {
        img {
          max-width: 45px;
        }

        span {
          font-size: 10px;
        }
      }

      .player-VS {
        transform: translateY(8px);
        span {
          font-size: 19px;
        }
        a {
          button {
            width: 65px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    height: 93px;

    .featured-banner-wrapper {
      padding: 5px;
      gap: 10px;

      .country_wrapper {
        img {
          max-width: 45px;
        }

        span {
          font-size: 10px;
        }
      }

      .player-VS {
        transform: translateY(8px);
        span {
          font-size: 19px;
        }
        a {
          button {
            width: 65px;
          }
        }
      }
    }
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  background: #112533;
  border-radius: 10px;
  padding: 10px 15px;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;

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
    max-width: 180px;
    width: 100%;

    .bet-btn {
      background: #fc4c1e;
    }

    p {
      text-align: center;
      font-weight: 700;
      font-size: 24px;
      color: #ffffff;
    }
    button {
      background: #7b7b7b;
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
