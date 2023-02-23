import styled from "styled-components";

export const Container = styled.div`
  max-width: 340px;

  .wrapper-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    padding: 20px;
    gap: 8px;
  }

  button {
    background: #0f212e;
    border: none;
  }
  select {
    background: none;
    border: none;
    width: 95px;
    color: white;
    font-size: 16px;
  }
  option {
    display: flex;
    color: white;
    background: #1b2c37;
  }

  .footerlogo {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 20px;
    padding-top: 20px;
    padding-bottom: 30px;
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      color: #a7a7a7;
    }
  }
  .footerlogo-img {
    img {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .text {
    color: #a7a7a7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
  }

  .list--item-1 {
    display: flex;
    justify-content: space-between;
    padding: 35px 25px 0px 25px;
    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      grid-gap: 20px;

      li {
        a {
          text-decoration: none;
          color: #a7a7a7;
        }

        .active {
          color: #fff;
        }
      }
    }

    li:nth-child(1) {
      a {
        display: flex;
        gap: 7px;
      }
    }

    ul:nth-child(2) {
      display: flex;

      li {
        display: flex;
        justify-content: end;
      }
    }
  }

  .list--item-2 {
    display: flex;
    justify-content: space-between;
    padding: 22px 25px 30px;

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      grid-gap: 20px;
    }

    ul:nth-child(2) {
      display: flex;

      li {
        display: flex;
        justify-content: end;
      }
    }
    a {
      text-decoration: none;
      color: #a7a7a7;
    }

    a.active {
      color: #fff;
    }
  }
  .bottom-hr {
    height: 2px;
    background: #969696;
    opacity: 0.2;
    max-width: 320px;
    border: none;
    margin-left: 20px;
  }

  hr {
    height: 1px;
    background: #969696;
    opacity: 0.2;
    max-width: 200px;
    border: none;
  }
  .terms > ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    grid-gap: 20px;
    padding: 0px 25px;
    margin: 10px 0px 40px;

    a {
      text-decoration: none;
      color: #a7a7a7;
    }
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
    max-width: initial;
    .list--item-1 {
      justify-content: space-around;
      padding: 35px 0px 0px 0px;
      gap: 77px;
    }

    .list--item-1 > ul > li > a {
      font-size: 18px;
    }
    .list--item-2 > ul > li > a {
      font-size: 18px;
    }
    .list--item-1 > ul {
      gap: 15px;
    }

    .wrapper-btn {
      padding: 10px 20px;
    }
    .terms > ul > li > a {
      font-size: 14px;
      padding: 0px;
    }
    .footerlogo {
      padding-bottom: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: initial;
    padding: 0px;

    .list--item-1 {
      justify-content: space-between;
      padding: 0px;
      padding: 15px 15px 10px;
    }

    .list--item-2 {
      padding: 5px 15px 30px;
    }

    .list--item-2 > ul {
      gap: 15px;
    }

    .list--item-1 > ul > li > a {
      font-size: 18px;
    }
    .list--item-2 > ul > li > a {
      font-size: 18px;
    }
    .list--item-1 > ul {
      gap: 15px;
    }

    .wrapper-btn {
      padding: 10px 20px;
    }

    .terms > ul > li > a {
      font-size: 14px;
      padding: 0px;
    }
    .footerlogo {
      padding-bottom: 30px;
    }

    .currcency-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 348px;
      margin: 0 auto;
    }
  }
`;
