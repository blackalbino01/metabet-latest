import styled from "styled-components";

export const FeaturedBannersContainer = styled("div")`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: ${(props) => props.fHeight};
  max-width: ${(props) => props.pMWidth};
  min-height: ${(props) => props.pMHeight};

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
    .politics-btn-hide {
      display: none;
    }

    .politics-btn {
      width: 100%;

      a {
        width: 100%;
        position: relative;
        padding: 10px 30px;
      }

      .button-1 {
        position: absolute;
        right: -138px;
        top: 70px;
      }
      .button-2 {
        position: absolute;
        right: -143px;
        top: 60px;
      }
      .button-3 {
        position: absolute;
        right: -137px;
        top: 48px;
      }
      .button-4 {
        position: absolute;
        right: -135px;
        top: 50px;
      }
      .button-5 {
        position: absolute;
        right: -145px;
        top: 70px;
      }
      .button-6 {
        position: absolute;
        right: -135px;
        top: 55px;
      }
      .button-7 {
        position: absolute;
        right: -135px;
        top: 55px;
      }
      .button-8 {
        position: absolute;
        right: -135px;
        top: 52px;
      }
      .button-9 {
        position: absolute;
        right: -135px;
        top: 50px;
      }
      .button-10 {
        position: absolute;
        right: -163px;
        top: 35px;
      }
      .button-11 {
        position: absolute;
        right: -135px;
        top: 55px;
      }
      .button-12 {
        position: absolute;
        right: -130px;
        top: 55px;
      }
      .button-13 {
        position: absolute;
        right: -125px;
        top: 53px;
      }
      .button-14 {
        position: absolute;
        right: -135px;
        top: 40px;
      }
      .button-15 {
        position: absolute;
        right: -170px;
        top: 22px;
      }
      .button-16 {
        position: absolute;
        right: -140px;
        top: 51px;
      }
      .button-17 {
        position: absolute;
        right: -130px;
        top: 60px;
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
        max-width: 150px;
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

  @media screen and (max-width: 820px) {
    width: 100%;
    max-width: 300px;

    .politics-btn {
      width: 100%;

      a {
        width: 100%;
        position: relative;
        padding: 10px 30px;
      }

      .button-1 {
        right: -152px;
        top: 85px;
      }
      .button-2 {
        right: -174px;
        top: 87px;
      }
      .button-3 {
        right: -169px;
        top: 80px;
      }
      .button-4 {
        right: -170px;
        top: 85px;
      }
      .button-5 {
        right: -180px;
        top: 95px;
      }
      .button-6 {
        right: -174px;
        top: 85px;
      }
      .button-7 {
        right: -170px;
        top: 86px;
      }
      .button-8 {
        right: -172px;
        top: 82px;
      }
      .button-9 {
        right: -175px;
        top: 85px;
      }
      .button-10 {
        right: -195px;
        top: 65px;
      }
      .button-11 {
        right: -165px;
        top: 85px;
      }
      .button-12 {
        right: -158px;
        top: 85px;
      }
      .button-13 {
        right: -170px;
        top: 76px;
      }
      .button-14 {
        right: -159px;
        top: 66px;
      }
      .button-15 {
        right: -216px;
        top: 52px;
      }
      .button-16 {
        right: -159px;
        top: 76px;
      }
      .button-17 {
        right: -159px;
        top: 86px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 317px;
    margin: 0px;

    .featured-banner-wrapper {
      padding: 25px;

      .politics-btn {
        width: 100%;

        a {
          width: 100%;
          position: relative;
          padding: 10px 30px;
        }

        .button-1 {
          right: -173px;
          top: 99px;
        }
        .button-2 {
          right: -174px;
          top: 87px;
        }
        .button-3 {
          right: -169px;
          top: 80px;
        }
        .button-4 {
          right: -170px;
          top: 85px;
        }
        .button-5 {
          right: -180px;
          top: 95px;
        }
        .button-6 {
          right: -174px;
          top: 85px;
        }
        .button-7 {
          right: -170px;
          top: 86px;
        }
        .button-8 {
          right: -172px;
          top: 82px;
        }
        .button-9 {
          right: -175px;
          top: 85px;
        }
        .button-10 {
          right: -195px;
          top: 65px;
        }
        .button-11 {
          right: -165px;
          top: 85px;
        }
        .button-12 {
          right: -158px;
          top: 85px;
        }
        .button-13 {
          right: -170px;
          top: 76px;
        }
        .button-14 {
          right: -159px;
          top: 66px;
        }
        .button-15 {
          right: -216px;
          top: 52px;
        }
        .button-16 {
          right: -159px;
          top: 76px;
        }
        .button-17 {
          right: -159px;
          top: 86px;
        }
      }
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
    margin: 0px;
    .featured-banner-wrapper {
      .politics-btn {
        .button-1 {
          right: -174px;
          top: 107px;
        }
        .button-2 {
          right: -185px;
          top: 110px;
        }
        .button-3 {
          right: -180px;
          top: 95px;
        }
        .button-4 {
          right: -185px;
          top: 95px;
        }
        .button-5 {
          right: -185px;
          top: 112px;
        }
        .button-6 {
          position: absolute;
          right: -185px;
          top: 102px;
        }
        .button-7 {
          right: -178px;
          top: 103px;
        }
        .button-8 {
          right: -180px;
          top: 95px;
        }
        .button-9 {
          right: -185px;
          top: 100px;
        }
        .button-10 {
          right: -209px;
          top: 79px;
        }
        .button-11 {
          right: -171px;
          top: 100px;
        }
        .button-12 {
          right: -185px;
          top: 98px;
        }
        .button-13 {
          right: -185px;
          top: 98px;
        }
        .button-14 {
          right: -175px;
          top: 88px;
        }
        .button-15 {
          right: -218px;
          top: 60px;
        }
        .button-16 {
          right: -170px;
          top: 101px;
        }
        .button-17 {
          right: -170px;
          top: 101px;
        }
      }

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
