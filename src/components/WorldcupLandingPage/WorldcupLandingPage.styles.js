import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .img_free_bets {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    max-width: 996px;
    padding: 20px 0px;
  }

  a {
    .img_1 {
      max-width: 250px;
    }
    img {
      max-width: 150px;
    }
  }

  .middle {
    display: flex;
    align-items: center;
    gap: 50px;

    a:nth-child(1) {
      transform: translate(-36px, -60px);
    }
    a:nth-child(3) {
      transform: translate(36px, -60px);
    }
  }
  .end {
    display: flex;
    align-items: center;
    gap: 120px;

    a:nth-child(1) {
      transform: translate(36px, -60px);
    }
    a:nth-child(3) {
      transform: translate(-36px, -60px);
    }
  }

  @media screen and (max-width: 1080px) {
    height: 100%;
  }

  @media screen and (max-width: 1024px) {
    height: 100%;
    .img_free_bets {
      max-width: 630px;
    }
    .end {
      gap: 110px;
    }
  }
  @media screen and (max-width: 912px) {
    justify-content: flex-start;
    height: 100%;
    a {
      .img_1 {
        max-width: 70px;
      }
      img {
        max-width: 90px;
      }

      div {
        img {
          max-width: 90px;
        }
      }
    }

    .middle {
      a:nth-child(1) {
        transform: translate(6px, -96px);
      }
      a:nth-child(3) {
        transform: translate(-15px, -125px);
      }
    }

    .end {
      gap: 0px;
      a:nth-child(1) {
        transform: translate(-60px, -67px);
      }
      a:nth-child(3) {
        transform: translate(31px, -63px);
      }
    }
  }
  @media screen and (max-width: 820px) {
    justify-content: flex-start;
    height: 100vh;
    a {
      .img_1 {
        max-width: 70px;
      }
      img {
        max-width: 90px;
      }

      div {
        img {
          max-width: 90px;
        }
      }
    }

    .middle {
      a:nth-child(1) {
        transform: translate(6px, -96px);
      }
      a:nth-child(3) {
        transform: translate(-15px, -125px);
      }
    }

    .end {
      gap: 0px;
      a:nth-child(1) {
        transform: translate(-60px, -67px);
      }
      a:nth-child(3) {
        transform: translate(31px, -63px);
      }
    }
  }

  @media screen and (max-width: 620px) {
    justify-content: flex-start;
    height: 100vh;
    a {
      .img_1 {
        max-width: 180px;
      }
      img {
        max-width: 120px;
      }

      div {
        img {
          max-width: 120px;
        }
      }
    }

    .middle {
      a:nth-child(1) {
        transform: translate(6px, -96px);
      }
      a:nth-child(3) {
        transform: translate(-15px, -125px);
      }
    }

    .end {
      gap: 0px;
      a:nth-child(1) {
        transform: translate(-60px, -67px);
      }
      a:nth-child(3) {
        transform: translate(31px, -63px);
      }
    }
  }

  @media screen and (max-width: 520px) {
    a {
      .img_1 {
        max-width: 150px;
      }
      img {
        max-width: 100px;
      }
    }

    .end {
      gap: 0px;
      a:nth-child(1) {
        transform: translate(76px, -111px);
      }
      a:nth-child(3) {
        transform: translate(-76px, -111px);
      }
    }
  }

  @media screen and (max-width: 420px) {
    .img_free_bets {
      justify-content: center;

      img {
        max-width: 250px;
      }
    }

    a {
      .img_1 {
        max-width: 70px;
      }
      img {
        max-width: 70px;
      }
    }

    .middle {
      a:nth-child(1) {
        transform: translate(6px, -96px);
      }
      a:nth-child(3) {
        transform: translate(-15px, -125px);
      }

      .connect-wallet-img {
        img {
          max-width: 70px;
        }
      }
    }

    .end {
      gap: 0px;
      a:nth-child(1) {
        transform: translate(-40px, -111px);
      }
      a:nth-child(3) {
        transform: translate(25px, -111px);
      }
    }
  }
`;
