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
  }
  .text {
    p {
      background: none;
      font-size: 13px;
      font-weight: 100;
      line-height: 270.5%;
      color: #b2bbd2;
    }
  }
`;
