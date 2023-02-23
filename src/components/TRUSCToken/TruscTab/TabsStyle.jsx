import styled from "styled-components";

export const TabsStyle = styled.div`
  width: 100%;

  /* max-width: 600px;
  margin: auto; */
  .tabs {
    &__list {
      padding-left: 0;
      display: flex;
      justify-content: space-between;
      /* border-bottom: 1px solid #eee; */
    }
    &__item {
      position: relative;
      display: inline-block;
      text-transform: Capitalize;
      padding: 15px 0;
      margin: 0px 72px;

      width: calc(100% / 3);
      text-align: center;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 0;
        max-width: 287px;
        background: #50a7f8;
        border-radius: 2px;
        transition: 0.3s;
      }
      &.active:after {
        width: 100%;
      }
      &:hover {
        cursor: pointer;
      }
      &.active {
        span {
          color: #50a7f8;
          text-shadow: 0px 0px 30px #50a7f8;
        }
      }

      span {
        font-size: 18px;
        color: #ffffff;
      }
    }
    &__content-wrapper {
      position: relative;
    }
    &__content {
      position: absolute;
      display: none;
      &.active {
        display: flex;
      }
      .active1 {
        background: rgba(31, 49, 61, 0.95);
        border: 1px solid #36404f;
        filter: blur(30px);
        border-radius: 8px;
      }
    }
  }
  .Truswap {
    padding: 0px 23px;
  }
  hr {
    width: 1px;
    border: none;
    border-radius: 2px;
    box-shadow: 0px 0px 30px #6898f4, inset 0px 0px 20px #6898f4;
  }
  .truSwap {
    display: flex;
    margin: 20px 72px;
  }

  .tru {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .truai {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-size: 15px;
      color: #637592;
      display: flex;
      gap: 5px;

      input {
        border: none;
        background: transparent;
        padding-left: 10px;
        max-width: 89px;
      }
      input::placeholder {
        font-size: 15px;
        color: #ffffff;
      }
    }

    span {
      font-size: 22px;
      color: #ffffff;
    }
  }
  .text {
    display: flex;
    align-items: center;
    flex-direction: row;
    span {
      font-size: 15px;
      color: #637592;
      font-family: "Inter";
      font-style: normal;
    }
    span:nth-child(2) {
      color: #3d6eff;
    }
  }
  .swap {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 45%;
  }
  .TruLiquidity {
    display: flex;
    flex-direction: column;
    max-width: 480px;
    padding: 25px 14px;
    gap: 45px;

    .img {
      display: flex;
      justify-content: center;
    }

    .balance {
      display: flex;
      align-items: center;
      justify-content: space-around;

      .icon {
        display: flex;
        flex-direction: column;
        span {
          font-family: "Junegull";
          font-style: normal;
          font-size: 24px;
          color: #ffffff;
        }
      }
    }
    .convert {
      display: flex;
      align-items: center;
      gap: 30px;
      margin-left: 30px;
    }
  }
`;
