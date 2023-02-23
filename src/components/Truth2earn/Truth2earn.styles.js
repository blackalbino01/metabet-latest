import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 989px;
  margin: 0 auto;

  .truth2earn {
    display: flex;
    flex-direction: column;
    .vote {
      display: flex;
      button {
        width: 320px;
        height: 32px;
        background: linear-gradient(180deg, #fab263 0%, #5f3a12 70.14%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
          0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-size: 16px;
        color: #ffffff;
        cursor: pointer;
        border: none;
      }
    }
  }
  .filter-btn {
    padding: 20px 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      padding: 0px 10px;
      min-height: 45px;
      background: #0f212e;
      border-radius: 8px;
      border: none;
      gap: 4px;
    }
  }
  @media screen and (max-width: 1080px) {
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1024px) {
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 620px) {
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
  //till 820 / 920 sidebar
  @media screen and (max-width: 820px) {
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 920px) {
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 768px) {
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
  //vertical with sidebar

  @media screen and (max-width: 375px) {
    .filter-btn {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
export const Truth2earnContainer = styled.div`
  margin-top: 8px;
  width: 100%;
  min-height: 260px;
  flex-direction: ${(props) => props.displayDirection};
  /* flex-wrap: wrap; */
  display: ${(props) => props.displayType};
  grid-template-columns: ${(props) => props.gridTemplateColum};
  grid-gap: 10px;

  .payments-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  /* .truth2earn {
    align-items: center;
    justify-content: center;
  } */

  .payments-inputs > .openai {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0px 25px;
  }

  .payments-inputs > .openai > span {
    font-size: 10px;
    color: #ffffff;
  }

  .payments-inputs > .verdict-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .payments-inputs > .verdict-btn > button {
    font-size: 12px;
    color: #ffffff;
    cursor: pointer;
    border: none;
    width: 125px;
    height: 36px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .title-text > span {
    font-size: 13px;
    color: #dadada;
    text-align: center;
  }

  .title-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding-top: 15px;
  }

  #grey {
    color: #6e8799;
  }

  #green {
    background: #11a94e;
  }

  #red {
    background: #e04545;
  }

  .vote {
    img {
      width: 100%;
      max-width: 305px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 912px) {
    grid-template-columns: 1fr;
    .get_accord {
      width: 100%;
      max-width: 300px;
    }
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 0px 80px;
    .get_accord {
      width: 100%;
      max-width: 300px;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0px 0px;
    gap: 10px;
    .truth2earn {
      align-items: center;
      justify-content: center;
    }

    .get_accord {
      width: 100%;
      max-width: 300px;
    }
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 412px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 280px) {
    grid-template-columns: 1fr;
    padding: 0px;
  }
`;
