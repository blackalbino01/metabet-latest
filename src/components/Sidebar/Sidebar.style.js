import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 340px;
  font-family: "CabinetGroteskBold";

  .wrapper-link {
    display: flex;
    gap: 30px;
    padding: 20px 20px 0px 20px;
    flex-direction: column;
  }

  .currcency-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
  }

  .wrapper-link-1 {
    display: flex;
    gap: 30px;
    padding: 20px 20px;
    flex-direction: column;
    a {
      text-decoration: none;
      color: #9eadb9;
    }

    .bottom-hr {
      margin-left: 0;
    }
  }
  .wrapper-link-2 {
    display: flex;
    gap: 30px;
    padding: 20px 20px;
    flex-direction: column;
    a {
      text-decoration: none;
      color: #9eadb9;
    }
  }

  .sidebar__item .sidebar__item-inner {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  img {
    /* opacity: 0.6; */
  }

  .active {
    color: #fff;
  }
  .active1 {
    color: #fff;
    img {
      color: #fff;
    }
  }

  .wrapper-span {
    color: #fff;
    padding: 20px;
  }

  a {
    text-decoration: none;
    color: #9eadb9;
  }

  hr {
    border: none;
    height: 2px;
    background: #314552;
    margin-left: 20px;
  }

  .page {
    position: relative;
    width: 100%;
    height: 550px;
    background: #081d2a;
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

export const Logo = styled.div`
  background: #0f212e;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  padding: 0px 20px;
  z-index: 1;
  max-width: 300px;
  width: 100%;
`;
