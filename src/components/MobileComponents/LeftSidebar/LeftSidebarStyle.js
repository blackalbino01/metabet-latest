import styled from "styled-components";

export const ContainerSidebar = styled("div")`
  .sidenav {
    display: flex;
    height: 100%;
    width: 0;
    position: absolute;
    z-index: 1;
    top: 70px;
    left: 0;
    background: #0f212e;
    overflow: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }

  .menu {
    padding: 0px;

    .page-mobile {
      position: relative;
      width: 100%;
      height: 100vh;
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

    .page-mobile::after {
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
  }

  .OpenNavBar {
    cursor: pointer;
  }

  .activated {
    width: 100%;
    /* height: 970px; */
    height: 100vh;
  }

  .de-activated {
    width: 0;
  }

  .sidenav a {
    text-decoration: none;
    list-style: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  span {
    font-weight: 300;
    font-size: 20px;
    color: #fff;
  }

  .sidenav a:hover {
    color: #f1f1f1;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0px;
    cursor: pointer;
    position: absolute;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    box-shadow: 0px 4px 10px rgb(0 0 0 / 50%);
    z-index: 999999;

    span {
      padding-left: 25px;
    }
  }

  .NavLink-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: #232323;
    text-transform: capitalize !important;
    transition: color 0.3s ease;
  }

  a:hover {
    color: tomato !important;
  }

  .menu {
    .social-icons {
      display: flex;
      width: 100%;
      max-width: 400px;
      flex-wrap: wrap;
      transform: translate(-10px, 7px);
      cursor: pointer;

      .medium-icon {
        margin: 8px;
      }
    }
  }
  .wrapper-link {
    display: flex;
    gap: 30px;
    padding: 10px 28px;
    flex-direction: column;
  }

  .wrapper-link-1 {
    display: flex;
    padding: 10px 28px;
    gap: 30px;
    flex-direction: column;

    a {
      text-decoration: none;
      color: #9eadb9;
    }

    .bottom-hr {
      margin-left: 0;
    }
  }

  .sidebar__item .sidebar__item-inner {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .active {
    color: #fc4c1e;
  }
  .active1 {
    color: #fff;
    img {
      color: #fff;
    }
  }

  .wrapper-span {
    color: #fff;
    padding: 10px 0px;
    padding-left: 25px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  hr {
    border: none;
    height: 2px;
    background: #314552;
    margin-left: 20px;
  }

  @media screen and (max-width: 1080px) {
    .menu {
      width: 100%;
      height: 1400px;
    }

    .activated {
      height: 1400px;
    }

    .sidenav {
      top: 58px;
      .close-img {
        transform: translate(-16px, 0px);
      }
    }
    .OpenNavBar {
      display: none;
    }
  }

  @media screen and (max-width: 820px) {
    .menu {
      .page-mobile {
        height: 1150px;
      }
    }
    .activated {
      height: 1150px;
    }

    .sidenav {
      top: 58px;
      .close-img {
        transform: translate(-16px, 0px);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .menu {
      .page-mobile {
        height: 1100px;
      }
    }
    .activated {
      height: 1100px;
    }

    .sidenav {
      top: 58px;
      .close-img {
        transform: translate(-16px, 0px);
      }
    }
    .OpenNavBar {
      display: block;
    }
  }

  @media screen and (max-width: 620px) {
    .menu {
      .page-mobile {
        height: 970px;
      }
    }
    .activated {
      height: 970px;
    }
    span {
      font-size: 18px;
    }

    .sidenav {
      top: 58px;
      .close-img {
        transform: translate(-16px, 0px);
      }
    }
  }

  @media screen and (max-width: 520px) {
    .wrapper-link {
      display: flex;
      gap: 30px;
      padding: 20px;
      flex-direction: column;
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
      padding: 20px 0px;
      flex-direction: column;
      a {
        text-decoration: none;
        color: #9eadb9;
      }
    }

    span {
      font-size: 15px;
    }

    .sidebar__item .sidebar__item-inner {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .active {
      color: #fc4c1e;
    }

    .active1 {
      color: #fff;
      img {
        color: #fff;
      }
    }

    .wrapper-span {
      color: #fff;
      padding: 20px 20px 0px;
    }

    a {
      text-decoration: none;
      color: #fff;
    }

    hr {
      border: none;
      height: 2px;
      background: #314552;
      margin-left: 20px;
    }

    .sidenav {
      top: 74px;
      .close-img {
        transform: translate(-16px, 0px);
      }
    }
  }

  @media screen and (max-width: 420px) {
    .menu {
      .page-mobile {
        height: 970px;
      }
    }
    .activated {
      height: 970px;
    }
    span {
      font-size: 14px;
    }

    .sidenav {
      top: 58px;
      .close-img {
        transform: translate(-16px, 0px);
      }
    }
  }

  @media screen and (max-width: 375px) {
    .menu {
      padding: 0px;
      max-width: 372px;
      margin: 0;

      .page-mobile {
        height: 970px;
      }
    }

    .activated {
      height: 970px;
    }

    span {
      font-size: 14px;
    }
    .sidenav {
      top: 80px;
      .closebtn {
        img {
          width: 40px;
          transform: translate(-20px, 0px);
        }
      }
    }
  }
`;
