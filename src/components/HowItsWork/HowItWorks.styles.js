import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0px 0px 30px;
  span {
    font-weight: 800;
    font-size: 16px;
    color: #ffffff;
  }
  .how-its-work-btn {
    display: flex;
    gap: 20px;

    button {
      background: #2e4452;
      color: #ffffff;
      border-radius: 4px;
      padding: 12px 0px;
      border: none;
      width: 100%;
      max-width: 110px;
      cursor: pointer;
    }
  }
  .event {
    display: flex;
    flex-direction: column;
    gap: 20px;
    span {
      font-weight: 800;
      font-size: 16px;
      color: #b2bbd2;
    }
  }

  .event-connect-btn {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    span {
      font-weight: 800;
      font-size: 16px;
      color: #b2bbd2;
    }

    .item-btn {
      display: flex;
      max-width: 300px;
    }
  }

  .wager {
    display: flex;
    flex-direction: column;
    gap: 5px;
    span {
      font-size: 11px;
      color: #b2bbd2;
    }
  }

  @media screen and (max-width: 820px) {
    max-width: 720px;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    padding: 30px 0px;

    .how-its-work-btn {
      width: 100%;
      max-width: 242px;
      margin: 0 auto;
    }

    .event-connect-btn {
      max-width: 551px;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 620px;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    align-items: center;

    .how-its-work-btn {
      width: 100%;
      max-width: 242px;
      margin: 0 auto;
    }

    .event {
      img {
        width: 100%;
      }

      span {
        font-size: 12px;
      }
    }

    .event-connect-btn {
      span {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 620px) {
    max-width: 520px;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    align-items: center;

    .how-its-work-btn {
      width: 100%;
      max-width: 242px;
      margin: 0 auto;
    }

    .event {
      img {
        width: 100%;
      }

      span {
        font-size: 12px;
      }
    }

    .event-connect-btn {
      img {
        max-width: 250px;
      }
    }
  }

  @media screen and (max-width: 540px) {
    max-width: 400px;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    align-items: center;

    .how-its-work-btn {
      width: 100%;
      max-width: 242px;
      margin: 0 auto;
    }

    .event {
      img {
        width: 100%;
      }

      span {
        font-size: 12px;
      }
    }

    .event-connect-btn {
      span {
        font-size: 12px;
      }

      img {
        max-width: 200px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    max-width: 300px;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    align-items: center;

    .how-its-work-btn {
      width: 100%;
      max-width: 242px;
      margin: 0 auto;
    }

    .event {
      img {
        width: 100%;
      }

      span {
        font-size: 12px;
      }
    }

    .event-connect-btn {
      span {
        font-size: 12px;
      }

      img {
        max-width: 200px;
      }
    }
  }
`;
