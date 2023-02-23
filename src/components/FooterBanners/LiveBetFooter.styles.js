import styled from "styled-components";

export const BetContainer = styled.div`
  /* width: 100%; */
  /* position: absolute; */
  left: -5px;
  bottom: 0px;
`;

export const AirdroptBetContainer = styled.div`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  min-height: 135px;
  width: 100%;
  background-size: cover;
`;
