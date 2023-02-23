import styled from "styled-components";

export const FootballLeaguesContainer = styled("div")`
  width: 100%;

  .football-loading-wrapper {
    display: flex;
    flex-direction: column;

    h1 {
      color: #fff;
      padding: 20px 30px;
    }
  }

  .football-league-conainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 36px;
  }

  .card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1); */
    border-radius: 1em;
    /* background: #ece9e6; */
    /* background: #081d2a; */
    /* background: linear-gradient(to right, #081d2a, #081d2a); */
    width: 100%;
  }

  .card__header {
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
      max-height: 294px;
      border-radius: 14px;
    }
  }

  .card__body {
    padding: 1rem;
    display: flex;
    /* flex-direction: column; */
    gap: 0.5rem;
    position: absolute;
    transform: translate(65%, 100%);

    .card_item {
      display: flex;
      flex-direction: column;

      .img_item {
        margin: 0 auto;
      }
    }

    p,
    span {
      color: #fff;
      font-size: 13px;
      margin: 0 auto;
    }

    .bet-btn-wrapper {
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;
      align-content: center;

      img {
        cursor: pointer;
      }
    }
  }

  .tag {
    align-self: flex-start;
    padding: 0.25em 0.75em;
    border-radius: 1em;
    font-size: 0.75rem;
  }

  .tag + .tag {
    margin-left: 0.5em;
  }

  .tag-color {
    background-color: #fc4c1e;
    color: #fafafa;
  }

  .tag-brown {
    background: #d1913c;
    background: linear-gradient(to bottom, #ffd194, #d1913c);
    color: #fafafa;
  }

  .tag-red {
    background: #cb2d3e;
    background: linear-gradient(to bottom, #ef473a, #cb2d3e);
    color: #fafafa;
  }

  .card__body h3 {
    /* font-size: 1.5rem; */
    color: #fff;
    text-transform: capitalize;
    margin-bottom: 0px;
  }

  .card__footer {
    display: flex;
    padding: 1rem;
    margin-top: auto;

    button {
      border: none;
      color: #fff;
      padding: 8px 30px;
      background-color: #fc4c1e;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      border-radius: 182px;
    }
  }

  .no-blog-founded {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    h2 {
      color: #fff;
    }
  }

  .user {
    display: flex;
    gap: 0.5rem;
  }

  .user__image {
    border-radius: 50%;
  }

  .user__info > small {
    color: #fff;
  }
`;

export const BackgrounImg = styled("img")`
  background-image: url(${(props) => props.background});
  background-size: cover;
  min-height: 45vh;
  background-repeat: no-repeat;
  width: 100%;
  border-radius: 15px;
`;
