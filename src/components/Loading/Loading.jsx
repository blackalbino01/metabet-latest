import React from "react";
import { Puff } from "react-loader-spinner";
import styled from "styled-components";

const Loading = ({ width }) => {
  return (
    <ContainerSpinner>
      {/* <LoadingSpinner /> */}
      <Puff
        height="80"
        width={width ? width : "80"}
        radius="9"
        color="#fc4c1e"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </ContainerSpinner>
  );
};

export const ContainerSpinner = styled.div`
  display: flex;
  width: 100%;
  max-width: 100px;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  justify-items: center;
  /* padding-top: 220px; */
`;

export default Loading;
