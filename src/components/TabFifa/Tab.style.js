import styled from "styled-components";

export const TabContainer = styled("div")`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;

  .tableContent {
    h1 {
      color: #fff;
    }
  }
  .video {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 20px auto 0;
    width: 100%;
  }
  .prediction {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;

    span {
      font-size: 24px;
      font-weight: 800;
      color: #ffffff;
      margin-top: 50px;
    }
  }

  .video-container {
    display: flex;
    justify-content: center;
    background: #223542;
    border-radius: 8px;
    width: 100%;
    padding: 18px 10px;
    max-width: 851px;
    margin: 50px auto;

    div:nth-child(1) {
      width: 850px !important;
      height: 400px !important;
    }
  }
  .video-container-separeted {
    display: flex;
    justify-content: center;
    background: #223542;
    border-radius: 8px;
    width: 100%;
    padding: 18px 10px;
    max-width: 451px;
    margin: 50px auto;
    margin-top: 20px;

    div:nth-child(1) {
      width: 390px !important;
      height: 200px !important;
    }
  }

  .tab-wrapper {
    display: flex;
    justify-content: space-between;

    button {
      border: none;
      border-radius: 8px;
      background: #fae391;
      color: #000;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      margin: 18px;
      padding: 0px 15px;
      position: relative;

      img {
        position: absolute;
        width: 30px;
        transform: translate(-30px, 0px);
      }
    }
  }

  .tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0f212e;
    border-radius: 100px;
    width: 100%;
    max-width: 250px;
    padding: 5px;
    margin: 10px 0px;
    cursor: pointer;
  }

  .active {
    background: #304553;
    padding: 10px;
    border-radius: 100px;
  }

  .de-active {
    padding: 0px 10px;
  }

  .tableHead span {
    font-weight: 800;
    font-size: 14px;
    color: #fff;
  }

  @media screen and (max-width: 820px) {
    .tab {
      max-width: 190px;
    }
    .tableHead span {
      font-size: 10px;
    }
    .video-container-separeted {
      div:nth-child(1) {
        width: 265px !important;
        height: 168px !important;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .tab {
      max-width: 250px;
    }
    .tableHead span {
      font-size: 14px;
    }
    .video-container-separeted {
      div:nth-child(1) {
        width: 293px !important;
        height: 200px !important;
      }
    }
  }

  @media screen and (max-width: 520px) {
    .tab {
      max-width: 220px;
    }

    .tableHead span {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 420px) {
    .tab {
      max-width: 190px;
    }

    .active {
      padding: 5px 10px;
    }

    .tableHead span {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 720px) {
    .video {
      gap: 40px;
      margin: 10px 0px;
    }

    .prediction {
      max-width: 300px;
      span {
        font-size: 12px;
        margin-top: 10px;
      }
    }

    .video-container-separeted {
      div:nth-child(1) {
        width: 270px !important;
        height: 180px !important;
      }
    }
  }
  @media screen and (max-width: 620px) {
    .video {
      gap: 40px;
      margin: 10px 0px;
    }

    .prediction {
      max-width: 250px;
      span {
        font-size: 12px;
        margin-top: 10px;
      }
    }

    .video-container-separeted {
      div:nth-child(1) {
        width: 220px !important;
        height: 150px !important;
      }
    }
  }
  @media screen and (max-width: 520px) {
    .video {
      gap: 40px;
      margin: 10px 0px;
    }

    .prediction {
      max-width: 200px;
      span {
        font-size: 12px;
        margin-top: 10px;
      }
    }
    .video-container {
      border-radius: 4px;
    }
    .video-container-separeted {
      div:nth-child(1) {
        width: 180px !important;
        height: 120px !important;
      }
    }
  }
  @media screen and (max-width: 420px) {
    .video {
      gap: 40px;
      margin: 10px 0px;
    }

    .prediction {
      max-width: 150px;
      span {
        font-size: 12px;
        margin-top: 10px;
      }
    }
    .video-container {
      border-radius: 4px;
    }
    .video-container-separeted {
      div:nth-child(1) {
        width: 150px !important;
        height: 100px !important;
      }
    }
  }
`;
