import styled from "styled-components";
import Banner_1 from "../../assets/images/WorldcupBanner/banner1.webp";
import Banner_2 from "../../assets/images/WorldcupBanner/banner1.png";
import Banner_3 from "../../assets/images/WorldcupBanner/banner2.png";
import Banner_4 from "../../assets/images/WorldcupBanner/banner4.png";
import Banner_5 from "../../assets/images/WorldcupBanner/banner5.png";
import Banner_6 from "../../assets/images/WorldcupBanner/banner6.png";
import Banner_7 from "../../assets/images/WorldcupBanner/banner7.png";
import Banner_8 from "../../assets/images/WorldcupBanner/banner8.png";
import Banner_9 from "../../assets/images/WorldcupBanner/banner9.png";

export const Container = styled.div`
  margin-top: 8px;
  width: 100%;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  margin-bottom: 120px;
  img {
    background: transparent;
  }

  .Banner_1 {
    background-image: url(${Banner_1});
    min-height: 240px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;
  }

  .Banner_2 {
    background-image: url(${Banner_2});
    min-height: 240px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .Banner_3 {
    background-image: url(${Banner_3});
    min-height: 239px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 20px;
    margin-bottom: 30px;
  }
  .Banner_4 {
    background-image: url(${Banner_4});
    min-height: 240px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;
  }
  .Banner_5 {
    background-image: url(${Banner_5});
    min-height: 240px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;
  }
  .Banner_6 {
    background-image: url(${Banner_6});
    min-height: 240px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;
  }
  .Banner_7 {
    background-image: url(${Banner_7});
    min-height: 240px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;
  }
  .Banner_8 {
    background-image: url(${Banner_8});
    min-height: 240px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;
  }
  .Banner_9 {
    background-image: url(${Banner_9});
    min-height: 240px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;
  }
  .bet-container {
    display: flex;
  }

  .Bet {
    display: flex;
    z-index: 1;
    align-items: center;
    background: none;
    transform: translate(0px, 75px);
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

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    span:nth-child(1) {
      font-size: 20px;
    }

    span {
      font-size: 27px;
    }

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
    justify-content: center;
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

  @media screen and (max-width: 1080px) {
    .Banner_1,
    .Banner_2,
    .Banner_3,
    .Banner_4,
    .Banner_5,
    .Banner_6,
    .Banner_7,
    .Banner_8,
    .Banner_9 {
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    .Banner_1 {
      background-image: url(${Banner_1});
      min-height: 180px;
    }
    .Banner_2 {
      background-image: url(${Banner_2});
      min-height: 180px;
    }
    .Banner_3 {
      background-image: url(${Banner_3});
      min-height: 180px;
    }
    .Banner_4 {
      background-image: url(${Banner_4});
      min-height: 180px;
    }
    .Banner_5 {
      background-image: url(${Banner_5});
      min-height: 180px;
    }
    .Banner_6 {
      background-image: url(${Banner_6});
      min-height: 180px;
    }
    .Banner_7 {
      background-image: url(${Banner_7});
      min-height: 180px;
    }
    .Banner_8 {
      background-image: url(${Banner_8});
      min-height: 180px;
    }
    .Banner_9 {
      background-image: url(${Banner_9});
      min-height: 180px;
    }

    .Bet {
      transform: translate(0px, 48px);
      padding-left: 10px;
    }
  }

  @media screen and (max-width: 620px) {
    .Banner_1 {
      background-image: url(${Banner_1});
      min-height: 145px;
    }
    .Banner_2 {
      background-image: url(${Banner_2});
      min-height: 145px;
    }
    .Banner_3 {
      background-image: url(${Banner_3});
      min-height: 145px;
    }
    .Banner_4 {
      background-image: url(${Banner_4});
      min-height: 145px;
    }
    .Banner_5 {
      background-image: url(${Banner_5});
      min-height: 145px;
    }
    .Banner_6 {
      background-image: url(${Banner_6});
      min-height: 145px;
    }
    .Banner_7 {
      background-image: url(${Banner_7});
      min-height: 145px;
    }
    .Banner_8 {
      background-image: url(${Banner_8});
      min-height: 145px;
    }
    .Banner_9 {
      background-image: url(${Banner_9});
      min-height: 145px;
    }

    .Player {
      img {
        width: 65px;
      }
    }
    .Bet {
      transform: translate(0px, 55px);
      padding-left: 10px;
    }
    .player-VS {
      font-size: 16px;
      gap: 10px;
      transform: translateY(0px);
    }
    .Player > span {
      font-size: 16px;
    }
    p {
      font-size: 10px;
    }
    button {
      width: 62px;
      height: 21.97px;
      font-size: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      button {
        width: 62px;
        height: 21.97px;
        font-size: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 520px) {
    .Banner_1 {
      background-image: url(${Banner_1});
      min-height: 145px;
    }
    .Banner_2 {
      background-image: url(${Banner_2});
      min-height: 145px;
    }
    .Banner_3 {
      background-image: url(${Banner_3});
      min-height: 145px;
    }
    .Banner_4 {
      background-image: url(${Banner_4});
      min-height: 145px;
    }
    .Banner_5 {
      background-image: url(${Banner_5});
      min-height: 145px;
    }
    .Banner_6 {
      background-image: url(${Banner_6});
      min-height: 145px;
    }
    .Banner_7 {
      background-image: url(${Banner_7});
      min-height: 145px;
    }
    .Banner_8 {
      background-image: url(${Banner_8});
      min-height: 145px;
    }
    .Banner_9 {
      background-image: url(${Banner_9});
      min-height: 145px;
    }

    .Player {
      img {
        width: 65px;
      }
    }
    .Bet {
      transform: translate(0px, 55px);
      padding-left: 10px;
    }
    .player-VS {
      font-size: 16px;
      gap: 10px;
      transform: translateY(0px);
    }
    .Player > span {
      font-size: 16px;
    }
    p {
      font-size: 10px;
    }
    a {
      button {
        width: 62px;
        height: 21.97px;
        font-size: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .Banner_1 {
      background-image: url(${Banner_1});
      min-height: 100px;
    }
    .Banner_2 {
      background-image: url(${Banner_2});
      min-height: 100px;
    }
    .Banner_3 {
      background-image: url(${Banner_3});
      min-height: 100px;
    }
    .Banner_4 {
      background-image: url(${Banner_4});
      min-height: 100px;
    }
    .Banner_5 {
      background-image: url(${Banner_5});
      min-height: 100px;
    }
    .Banner_6 {
      background-image: url(${Banner_6});
      min-height: 100px;
    }
    .Banner_7 {
      background-image: url(${Banner_7});
      min-height: 100px;
    }
    .Banner_8 {
      background-image: url(${Banner_8});
      min-height: 100px;
    }
    .Banner_9 {
      background-image: url(${Banner_9});
      min-height: 100px;
    }

    .Player {
      img {
        width: 55px;
      }
    }
    .Bet {
      transform: translate(0px, 30px);
      padding-left: 10px;
    }
    .player-VS {
      font-size: 16px;
      gap: 10px;
      transform: translateY(0px);
    }
    .Player > span {
      font-size: 16px;
    }
    p {
      font-size: 10px;
    }
    a {
      button {
        width: 62px;
        height: 21.97px;
        font-size: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .Banner_1 {
      background-image: url(${Banner_1});
      min-height: 90px;
    }
    .Banner_2 {
      background-image: url(${Banner_2});
      min-height: 90px;
    }
    .Banner_3 {
      background-image: url(${Banner_3});
      min-height: 90px;
    }
    .Banner_4 {
      background-image: url(${Banner_4});
      min-height: 90px;
    }
    .Banner_5 {
      background-image: url(${Banner_5});
      min-height: 90px;
    }
    .Banner_6 {
      background-image: url(${Banner_6});
      min-height: 90px;
    }
    .Banner_7 {
      background-image: url(${Banner_7});
      min-height: 90px;
    }
    .Banner_8 {
      background-image: url(${Banner_8});
      min-height: 90px;
    }
    .Banner_9 {
      background-image: url(${Banner_9});
      min-height: 90px;
    }
    .Player {
      img {
        width: 45px;
      }
    }
    .Bet {
      transform: translate(0px, 25px);
      padding-left: 10px;
    }
    .player-VS {
      font-size: 16px;
      gap: 10px;
      transform: translateY(0px);
    }
    .Player > span {
      font-size: 16px;
    }
    p {
      font-size: 10px;
    }
    a {
      button {
        width: 62px;
        height: 21.97px;
        font-size: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const CricketFeaturedBannersContainer = styled("div")`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: contain;
  height: 43vh;

  h1 {
    color: #fff;
    margin: 10px 20px;
  }

  .Circket-featured-banner-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 45px;
    height: 100%;

    img {
      width: 100%;
      max-width: 107px;
      min-height: 107px;
    }

    #player_img {
      width: 100%;
      max-width: 204px;
      min-height: 226px;
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

      button {
        background: #fc4c1e;
        border-radius: 5.99657px;
        border: none;
        color: #fff;
        padding: 8px 20px;
      }
      a {
        text-decoration: none;
        color: #fff;

        button {
          background: #fc4c1e;
          border-radius: 5.99657px;
          border: none;
          color: #fff;
          padding: 8px 20px;
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
