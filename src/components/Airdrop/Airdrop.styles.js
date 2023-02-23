import styled from "styled-components";

export const AirdropContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "CabinetGroteskBold";

  .wrapper-air {
    display: flex;
    gap: 30px;
    padding: 20px;
    flex-direction: column;
  }

  .page {
    position: relative;
    width: 100%;
    height: 1790px;
    background: #223743;
    box-shadow: -3px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 10px;
    max-width: 910px;
    margin: 0 auto;
  }

  .content {
    width: 100%;
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 999999;
  }

  .page::after {
    content: "";
    position: absolute;
    z-index: 1;
    height: calc(100% - 20px);
    top: 10px;
    right: -1px;
    width: 8px;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 10px;
  }

  .wrapper::-webkit-scrollbar {
    display: block;
    width: 8px;
  }
  .wrapper::-webkit-scrollbar-track {
    background: transparent;
  }

  .wrapper::-webkit-scrollbar-thumb {
    background-color: #314552;
    border-right: none;
    border-left: none;
    border-radius: 10px;
  }

  .wrapper::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 10px;
  }

  .wrapper::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 9px;
  }
`;
