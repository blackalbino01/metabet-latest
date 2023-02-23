import styled from "styled-components";
// import tickImg from "../../assets/images/contact/tick-icon.webp";

export const ContactContainer = styled("div")`
  @media screen and (max-width: 420px) {
    padding: 15px;
  }
  .background {
    width: 100%;
    /* max-width: 934px; */
    background: #1c1f25;
    border: 1px solid #282c34;
    border-radius: 8px;
    padding: 45px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    max-width: 847px;
    margin: 0 auto;
  }

  .Owner--info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    img {
      border-radius: 10px;
    }

    span {
      font-weight: 700;
      font-size: 16px;
      color: #fff;
    }

    .social--icons {
      display: flex;
      gap: 5px;
    }
  }

  input,
  textarea {
    background: #0d0e12;
    border-radius: 8px;
    color: #fff;
    padding: 15px;
    max-width: 375px;
    border: none;
  }

  textarea {
    height: 118px;
  }

  textarea:focus,
  textarea:focus {
    outline: none;
  }
  .check-box {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .info {
      font-weight: 700;
      font-size: 14px;
      color: #8f98a8;
    }

    .textarea-box {
      width: 26px;
      height: 26px;
      background: #0d0e12;
      border-radius: 8px;
      cursor: pointer;
      position: relative;
    }

    .textarea-box-icon {
      width: 15px;
      height: 15px;
      position: absolute;
      background-repeat: no-repeat;
      display: none;
    }

    .show {
      display: flex;
      transform: translate(5px, 5px);
    }
    .submit-btn {
      border: none;
      border-radius: 8px;
      color: #fff;
      background: #282c34;
      box-shadow: 0px 4px 10px rgb(0 0 0 / 50%);
    }

    .disabled-btn {
      background: red;
      border-radius: 8px;
      color: #fff;
      padding: 15px;
    }

    .enabled-btn {
      border: none;
      border-radius: 8px;
      color: #fff;
      background: #0ac630;
      box-shadow: 0px 4px 10px rgb(0 0 0 / 50%);
      border: 1px solid #fff;
      padding: 15px;
      cursor: pointer;
    }
  }

  .contact--wrapper {
    display: flex;
    gap: 20px;

    .input-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 250px;
      gap: 10px;
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .background {
      max-width: 642px;
    }
    textarea {
      max-width: initial;
      min-height: 100px;
    }
    .contact--wrapper {
      flex-direction: column;
      .input-wrapper {
        width: 100%;
        max-width: 610px;
      }
    }
    input,
    textarea {
      max-width: 735px;
      width: 100%;
    }
  }

  @media screen and (max-width: 610px) {
    .background {
      padding: 10px;
      max-width: 500px;
      margin: 0 auto;
    }
    .Owner--info {
      img {
        max-width: 95px;
      }
      .social--icons {
        gap: 2px;
        img {
          max-width: 95px;
        }
      }
    }
    textarea {
      min-width: 120px;
    }
    .contact--wrapper {
      .input-wrapper {
        max-width: 470px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .background {
      padding: 10px;
      max-width: 350px;
      margin: 0 auto;
    }
    .Owner--info {
      img {
        max-width: 95px;
      }
      .social--icons {
        gap: 2px;
        img {
          max-width: 95px;
        }
      }
    }
    textarea {
      min-width: 120px;
    }
    .contact--wrapper {
      .input-wrapper {
        max-width: 320px;
      }
    }
  }
`;
