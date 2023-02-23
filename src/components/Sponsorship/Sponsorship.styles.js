import styled from "styled-components";

export const TermsContainer = styled.div`
  width: 100%;
  max-width: 960px;
  min-height: 1710px;
  background: #223743;
  box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 20px 10px;
  padding: 15px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    max-width: 960px;
    max-height: 501px;
  }
  span {
    font-weight: 800;
    font-size: 16px;
    color: #ffffff;
    padding: 10px;
  }
  p {
    font-size: 12px;
    color: #b2bbd2;
    background: #304553;
    padding: 4px 0px 4px 16px;
    margin: 20px 0px;
    justify-content: flex-start;
  }
  .headlines {
    display: flex;
    flex-direction: column;
    p {
      background: none;
      font-size: 13px;
      font-weight: 100;
      line-height: 270.5%;
      color: #b2bbd2;
    }
  }
  .Nairaland {
    display: flex;
    align-items: center;
    justify-content: space-around;
    a {
      padding: 15px 20px;
      background: #fc4c1e;
      border-radius: 6px;
      color: white;
      text-decoration: none;
    }
  }

  .video-container-sponsor {
    display: flex;
    justify-content: center;
    background: #223542;
    border-radius: 8px;
    width: 100%;
    padding: 20px;
    max-width: 851px;
    margin: 50px auto 0;

    div:nth-child(1) {
      width: 100%;
      width: 850px !important;
      height: 400px !important;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 740px;
    img {
      width: 100%;
    }
    .Nairaland {
      a {
        padding: 10px 15px;
        font-size: 14px;
      }
      img {
        width: 100%;
        max-width: 300px;
      }
      div {
        max-width: 100px;
      }
    }
    .video-container-sponsor {
      width: 100%;
      max-width: 551px;
      margin: 20px auto 0;

      div:nth-child(1) {
        width: 550px !important;
      }
    }
  }

  @media screen and (max-width: 620px) {
    width: 100%;
    max-width: 600px;
    .Nairaland {
      a {
        padding: 5px 10px;
        font-size: 14px;
      }
      img {
        max-width: 200px;
      }
      div {
        max-width: 80px;
      }
    }
    .video-container-sponsor {
      max-width: 301px;

      div:nth-child(1) {
        width: 300px !important;
      }
    }
  }
  @media screen and (max-width: 520px) {
    width: 100%;
    max-width: 500px;
    .Nairaland {
      a {
        padding: 5px 10px;
        font-size: 12px;
      }
      img {
        max-width: 200px;
      }
      div {
        max-width: 60px;
      }
    }
    .video-container-sponsor {
      max-width: 301px;

      div:nth-child(1) {
        width: 300px !important;
      }
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    max-width: 400px;
    .Nairaland {
      a {
        padding: 5px 10px;
        font-size: 12px;
      }
      img {
        max-width: 200px;
      }
      div {
        max-width: 60px;
      }
    }
    .video-container-sponsor {
      max-width: 301px;

      div:nth-child(1) {
        width: 300px !important;
      }
    }
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    max-width: 350px;
    .Nairaland {
      a {
        padding: 5px 10px;
        font-size: 10px;
      }
      img {
        max-width: 165px;
      }
      div {
        max-width: 50px;
      }
    }
    .video-container-sponsor {
      max-width: 301px;

      div:nth-child(1) {
        width: 300px !important;
      }
    }
  }
`;
