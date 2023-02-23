import styled from "styled-components";

export const CricketBannersContainer = styled("div")`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 38vh;

  .featured-banner-wrapper {
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
