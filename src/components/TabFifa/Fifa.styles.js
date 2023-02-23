import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StatContainer = styled.div`
  max-width: 100%;
  min-height: 200px;
  background: #0f212e;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px;

  .Portfolio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
  }
  p {
    font-weight: 800;
    font-size: 30px;
    line-height: 95%;
    color: #ffffff;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .VS {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 75px;
    p {
      font-weight: 700;
      font-size: 60px;
      color: #ffffff;
    }
    span {
      font-weight: 700;
      font-size: 12px;
      line-height: 140%;
      display: flex;
      align-items: center;
      text-align: center;
      color: #ffffff;
      padding: 10px;
    }
    .time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #ffffff;
      p {
        font-size: 16px;
        color: #ffffff;
      }
      span {
        font-size: 16px;
        color: #ffd600;
      }
    }
  }
  .Rectangle {
    max-width: 153px;
    min-height: 175px;
    grid-gap: 10px;
    padding: 41px 7px;
    background: #112533;

    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      color: #b6b6b6;
      font-weight: 700;
      font-size: 14px;
      line-height: 165%;
    }
    p {
      font-weight: 700;
      font-size: 18px;
      color: #ffffff;
    }
  }

  @media screen and (max-width: 620px) {
    min-height: 107px;
    .Portfolio {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-gap: 5px;
      img {
        width: 106px;
        height: 63px;
      }
    }
    p {
      font-size: 11.25px;
    }
    .VS {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 0px;
      p {
        font-weight: 500;
        font-size: 22.5px;
      }
      span {
        font-weight: 500;
        font-size: 4.5px;
        line-height: 140%;

        padding: 10px;
      }
      .time {
        font-size: 4.5px;
        p {
          font-weight: 500;
          font-size: 4.5px;
        }
        span {
          font-size: 4.5px;
        }
      }
    }
    .Rectangle {
      max-width: 155px;
      min-height: 100px;
      background: #112533;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      grid-gap: 10px;
      padding: 7px 0pxs;

      li {
        font-size: 5.25px;
        line-height: 140%;
      }
      p {
        font-size: 6.75px;
        line-height: 140%;
      }
    }
  }
`;
export const Info = styled.div`
  background: #112533;
  border-radius: 10px;
  max-width: 953px;
  min-height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  /* margin: 0px 10px; */

  .WIN {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #0a1a25;
    border-radius: 10px;
    padding: 10px 45px;

    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
      color: #ffffff;
      display: flex;
      justify-content: center;
    }
    button {
      width: 200px;
      height: 37px;
      background: #fc4c1e;
      border-radius: 6px;
      color: #ffffff;
      border: none;
      cursor: pointer;
    }
    span {
      font-weight: 500;
      font-size: 10px;
      line-height: 140%;
      display: flex;
      align-items: center;
      color: #d6d6d6;
    }
  }

  @media screen and (max-width: 620px) {
    min-height: 47px;
    .WIN {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #0a1a25;
      border-radius: 4px;
      padding: 5px 10px;
      p {
        font-weight: 500;
        font-size: 9px;
        line-height: 140%;
      }
      button {
        width: 79px;
        height: 13px;
        border-radius: 4px;
        font-size: 5.25px;
        line-height: 6px;
        cursor: pointer;
      }
      span {
        font-weight: 500;
        font-size: 10px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #d6d6d6;
      }
    }
  }
`;

export const Table = styled.div`
  max-width: 956px;
  min-height: 200px;
  border-radius: 10px;

  .head {
    background: #0a1a25;
    border-radius: 10px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    transform: translate(0px, 10px);

    span {
      font-weight: 700;
      font-size: 15px;
      color: #ffffff;
    }

    span:nth-child(2) {
      transform: translate(33px, 0px);
    }
    span:nth-child(3) {
      transform: translate(10px, 0px);
    }
    span:nth-child(5) {
      transform: translate(10px, 0px);
    }
  }
  .item {
    display: flex;
    align-items: center;
    grid-gap: 100px;
  }
  .Currency,
  .Pool {
    margin: 15px;
    ul {
      display: flex;
      flex-direction: column;
      grid-gap: 25px;
      list-style: none;
      text-decoration: none;
      a {
        display: flex;
        align-items: center;
        grid-gap: 15px;
        color: #ffffff;
        font-weight: 700;
        font-size: 14px;
        line-height: 140%;
      }
    }
  }
  .Bet li {
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
  }
  .Bet button {
    max-width: 150px;
    height: 21px;
    background: #fc4c1e;
    border-radius: 6px;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
  .item {
    display: flex;
    align-items: center;
    grid-gap: 81px;

    span:nth-child(1) {
      transform: translate(-70px, 0px);
    }

    span:nth-child(2) {
      transform: translate(-25px, 0px);
    }

    span {
      font-weight: 700;
      font-size: 15px;
      color: #ffffff;
    }
  }
  .ITEM {
    display: flex;
    align-items: center;
    grid-gap: 100px;
  }
  .Head {
    display: flex;
    padding: 15px 10px;
    background: #112533;
  }

  .Head:nth-child(1) {
    padding: 25px 10px 15px;
  }

  .Head:nth-child(5) {
    border-radius: 0px 0px 8px 8px;
  }

  .Hwrapper {
    display: flex;
    gap: 15px;
    width: 100%;

    .currency_item {
      display: flex;
      gap: 5px;
    }

    button {
      cursor: pointer;
      align-items: center;
      background: #fc4c1e;
      border: none;
      border-radius: 6px;
      color: #fff;
      display: flex;
      font-size: 15px;
      height: 21px;
      justify-content: center;
      width: 100%;
    }

    span {
      width: 100%;
      font-weight: 700;
      font-size: 15px;
      color: #ffffff;
    }
  }

  // BlockChain Payment Input Fields //
  .payments-inputs-wrapper {
    display: flex;
    gap: 10px;
  }

  label {
    display: flex;
    background: #0a1a25;
    border-radius: 10px;
    align-items: center;
    min-width: 124px;
    padding: 16px 9px;
  }

  label:nth-child(1) {
    min-width: 150px;
  }
  label:nth-child(5) {
    min-width: 130px;
  }

  .status {
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: relative;

    span {
      font-size: 13px;
      transform: translate(12px, 0px);
    }

    div {
      position: absolute;
      transform: translate(0px, -3px);
      left: -4px;
    }
  }

  .status_3 {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    span {
      font-size: 13px;
    }

    div {
      position: absolute;
      transform: translate(5px, -11px);
      left: 0;
    }
  }

  .status_4 {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    position: relative;
    span {
      font-size: 13px;
    }

    div {
      position: absolute;
      transform: translate(2px, -2px);
      left: 0;
    }
  }

  .status_5 {
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: relative;
    span {
      transform: translate(6px, 0px);
      font-size: 13px;
    }

    div {
      position: absolute;
      transform: translate(5px, -10px);
      left: 0;
    }
  }

  input {
    max-width: 55px;
    max-height: 20px;
    background: none;
    border: none;
    color: #ffffff;
    text-align: end;
  }

  @media screen and (max-width: 820px) {
    max-width: 430px;
    .Head {
      padding: 5px 10px;
    }
    .payments-inputs-wrapper {
      flex-direction: column;
      width: 100%;
      gap: 10px;
      max-width: 445px;
      margin: 0 auto;
    }
    .Hwrapper {
      align-items: center;
      span {
        font-size: 10px;
      }
    }
    .changeItem {
      button {
        width: 70px;
        font-size: 10px;
      }
    }

    .status {
      justify-content: flex-start;
      gap: 10px;

      div {
        transform: none;
        position: initial;
        height: 20px;
      }

      span {
        margin-top: 3px;
      }
    }

    .status_3 {
      justify-content: flex-start;
      gap: 10px;

      div {
        transform: none;
        position: initial;
        height: 20px;
      }

      span {
        margin-top: 3px;
      }
    }

    label {
      max-width: 420px;
    }

    label:nth-child(3) {
      max-width: 420px;
      justify-content: space-between;
    }
    .head {
      padding: 5px 10px;

      span {
        font-size: 10px;
      }
      span:nth-child(2) {
        transform: translate(3px, 0px);
      }
      span:nth-child(3) {
        transform: translate(0px, 0px);
      }
      span:nth-child(5) {
        transform: translate(0px, 0px);
      }
    }
    .item {
      gap: 83px;
    }

    span {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 956px;

    .payments-inputs-wrapper {
      flex-direction: column;
      width: 100%;
      gap: 10px;
      max-width: 445px;
      margin: 0 auto;
    }
    .Hwrapper {
      span {
        font-size: 15px;
      }
    }

    .status {
      justify-content: flex-start;
      gap: 10px;

      div {
        transform: none;
        position: initial;
        height: 20px;
      }

      span {
        margin-top: 3px;
      }
    }

    .status_3 {
      justify-content: flex-start;
      gap: 10px;

      div {
        transform: none;
        position: initial;
        height: 20px;
      }

      span {
        margin-top: 3px;
      }
    }

    .status_4 {
      justify-content: space-between;
      gap: 10px;

      div {
        transform: none;
        position: initial;
        height: 20px;
      }

      span {
        margin-top: 3px;
      }
    }

    label {
      max-width: 420px;
    }

    label:nth-child(3) {
      max-width: 420px;
      justify-content: space-between;
    }
    .head {
      span {
        font-size: 15px;
      }
      span:nth-child(2) {
        transform: translate(33px, 0px);
      }
      span:nth-child(3) {
        transform: translate(10px, 0px);
      }
      span:nth-child(5) {
        transform: translate(10px, 0px);
      }
    }
    .item {
      gap: 83px;
    }

    span {
      font-size: 15px;
    }
    .changeItem {
      button {
        width: 150px;
        font-size: 15px;
      }
    }
  }

  @media screen and (max-width: 620px) {
    .payments-inputs-wrapper {
      flex-direction: column;
      width: 100%;
      gap: 10px;
      max-width: 395px;
      margin: 0 auto;
    }

    .status {
      justify-content: flex-start;
      gap: 10px;

      div {
        transform: none;
        position: initial;
        height: 20px;
      }

      span {
        margin-top: 3px;
      }
    }

    label {
      max-width: 420px;
    }

    label:nth-child(3) {
      max-width: 420px;
    }
    .head {
      span {
        font-size: 12px;
      }
    }
    .item {
      gap: 50px;
    }
  }

  @media screen and (max-width: 420px) {
    .head {
      span {
        font-size: 8px;
      }
    }

    .item {
      span {
        font-size: 12px;
      }
      button {
        max-width: 125px;
        font-size: 12px;
        cursor: pointer;
      }
    }

    .Hwrapper {
      span {
        font-size: 12px;
        margin-top: 3px;
      }
    }

    .payments-inputs-wrapper {
      flex-direction: column;
      width: 100%;
      gap: 10px;
      max-width: 395px;
      margin: 0 auto;
    }

    .status {
      justify-content: flex-start;
      gap: 10px;

      div {
        transform: none;
        position: initial;
        height: 20px;
      }

      span {
        margin-top: 3px;
      }
    }

    label {
      max-width: 420px;
    }

    label:nth-child(3) {
      max-width: 420px;
    }
    .head {
      span {
        font-size: 8px;
      }
    }
    .item {
      gap: 83px;
    }
  }
  @media screen and (max-width: 390px) {
    .item {
      span {
        font-size: 8px;
      }
      button {
        max-width: 105px;
        font-size: 12px;
        cursor: pointer;
      }
    }
    .changeItem {
      button {
        width: 75px;
        font-size: 10px;
      }
    }

    .Hwrapper {
      gap: 10px;

      span {
        font-size: 8px;
        margin-top: 3px;
      }
    }

    .payments-inputs-wrapper {
      flex-direction: column;
      width: 100%;
      gap: 10px;
      max-width: 275px;
      margin: 0 auto;
    }

    .status {
      justify-content: flex-start;
      gap: 10px;

      div {
        transform: none;
        position: initial;
        height: 20px;
      }

      span {
        margin-top: 3px;
      }
    }

    label {
      max-width: 420px;
    }

    label:nth-child(3) {
      max-width: 420px;
    }
    .head {
      span {
        font-size: 8px;
      }
      span:nth-child(2) {
        transform: translate(8px, 0px);
      }
      span:nth-child(3) {
        transform: translate(3px, 0px);
      }
      span:nth-child(5) {
        transform: translate(0px, 0px);
      }
    }
    .item {
      gap: 83px;
    }
  }
  @media screen and (max-width: 375px) {
    .item {
      span {
        font-size: 8px;
      }
      button {
        max-width: 105px;
        font-size: 12px;
        cursor: pointer;
      }
    }
    .changeItem {
      button {
        width: 75px;
        font-size: 10px;
      }
    }

    .Hwrapper {
      gap: 10px;

      span {
        font-size: 8px;
        margin-top: 3px;
      }
    }

    .payments-inputs-wrapper {
      flex-direction: column;
      width: 100%;
      gap: 10px;
      max-width: 275px;
      margin: 0 auto;
    }

    .status {
      justify-content: flex-start;
      gap: 10px;

      div {
        transform: none;
        position: initial;
        height: 20px;
      }

      span {
        margin-top: 3px;
      }
    }

    label {
      max-width: 420px;
    }

    label:nth-child(3) {
      max-width: 420px;
    }
    .head {
      span {
        font-size: 8px;
      }
      span:nth-child(2) {
        transform: translate(8px, 0px);
      }
      span:nth-child(3) {
        transform: translate(3px, 0px);
      }
      span:nth-child(5) {
        transform: translate(0px, 0px);
      }
    }
    .item {
      gap: 83px;
    }
  }
`;

export const Interface = styled.div`
  width: 100%;
  max-width: 965px;
  min-height: 941px;
  margin-left: 10px;

  .Inter-Headline,
  .Inter-Headline1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    p {
      font-size: 18px;
    }
  }
  .Inter-Headline1 {
    padding: 15px 0px;
  }
  .waiting {
    display: flex;
    align-items: center;
    grid-gap: 5px;
  }
  .Cash,
  .Truth-Teller {
    display: flex;
    align-items: center;
    grid-gap: 10px;
  }
  .Paid,
  .cash {
    display: flex;
    align-items: center;
    grid-gap: 10px;
    span {
      font-size: 24px;
      line-height: 140%;
      color: #fc4c1e;
    }
  }
  .MadridBoard {
    max-width: 965px;
    min-height: 290px;
    background: #112533;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
  }
  .board {
    width: 946px;
    height: 185px;
    background: #0a1a25;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
  }
  .Votes,
  .TruthTime {
    display: flex;
    flex-direction: column;
    color: #ffffff;
    font-size: 12px;
    span {
      font-size: 22px;
      line-height: 140%;
      color: #dadada;
    }
    p {
      font-size: 12px;
      line-height: 140%;
      color: #ffffff;
    }
  }
  .RealMadrid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    span {
      font-weight: 700;
      font-size: 26px;
      line-height: 95%;
      display: flex;
      align-items: center;
      color: #ffffff;
    }
  }

  .box {
    width: 140px;
    height: 61px;
    background: #112533;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      background: #fc4c1e;
      border-radius: 6px;
      font-size: 12px;
      border: none;
      width: 120.71px;
      height: 34px;
      cursor: pointer;
      color: #ffffff;
    }
  }
  .Madrid-btn-box {
    display: flex;
    grid-gap: 10px;
  }
  .Progress {
    width: 284px;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 140%;
      text-align: center;
      color: #dadada;
    }
  }
  .ProgressBar {
    display: flex;
    grid-gap: 20px;
    justify-content: space-between;
  }
  .player-table {
    display: flex;
    grid-gap: 20px;
    margin-left: 20px;
  }
  .player-sub-table {
    display: flex;
    grid-gap: 18px;
  }
  .Connect-list,
  .Truth-list {
    display: flex;
    grid-gap: 20px;
    ul {
      display: flex;
      list-style: none;
      text-decoration: none;
      flex-direction: column;
      grid-gap: 50px;
      align-items: center;
      justify-content: center;

      li {
        display: flex;
        font-size: 18px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #dadada;
        grid-gap: 10px;
      }
      a {
        font-size: 18px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #dadada;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .Player-list {
    display: flex;
    grid-gap: 60px;
    ul {
      display: flex;
      list-style: none;
      text-decoration: none;
      flex-direction: column;
      grid-gap: 5px;

      li {
        display: flex;
        font-size: 20px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #dadada;
        grid-gap: 10px;
      }
      a {
        font-size: 20px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #dadada;
        align-items: center;
        justify-content: center;
        grid-gap: 10px;
      }
    }
  }
  .connect-truth {
    display: flex;
    grid-gap: 35px;
  }

  .veification-text {
    p {
      font-weight: 700;
      font-size: 20px;
      line-height: 140%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0px;
      color: #ffffff;
    }
  }

  @media screen and (max-width: 620px) {
    min-height: 790px;
    margin-left: 5px;
    .Inter-Headline,
    .Inter-Headline1 {
      padding-right: 22px;
      justify-content: space-around;
      gap: 20px;
      img {
        width: 42.13px;
        height: 25.7px;
      }
      p {
        font-size: 7.14px;
      }
    }
    .Inter-Headline1 {
      padding: 5px 0px;
      gap: 50px;
    }
    .waiting {
      display: flex;
      align-items: center;
      grid-gap: 2px;
      img {
        width: 8.57px;
        height: 8.57px;
      }
    }
    .Cash,
    .Truth-Teller {
      display: flex;
      align-items: center;
      grid-gap: 5px;
    }
    .Paid,
    .cash {
      display: flex;
      align-items: center;
      grid-gap: 5px;
      span {
        font-size: 8.568px;
      }
    }
    .cash {
      img {
        width: 8.57px;
        height: 8.57px;
      }
    }
    .Paid {
      img {
        width: 11.42px;
        height: 10.35px;
      }
    }
    .MadridBoard {
      min-height: 130px;
      padding: 10px 10px;
      max-width: 345px;
    }
    .board {
      width: 348.43px;
      height: 71.74px;
      border-radius: 3.57px;
      img {
        width: 100.67px;
        height: 60.32px;
      }
    }
    .Votes,
    .TruthTime {
      font-size: 4.284px;
      span {
        font-size: 8.568px;
      }
      p {
        font-size: 4.284px;
      }
    }
    .RealMadrid {
      grid-gap: 10px;
      span {
        font-size: 8.925px;
      }
    }

    .box {
      width: 52.19px;
      height: 21.77px;
      border-radius: 4px;

      button {
        border-radius: 2.142px;
        font-size: 4.998px;
        width: 46.29px;
        height: 13.14px;
        cursor: pointer;
      }
    }
    .Madrid-btn-box {
      grid-gap: 2px;
    }
    .Progress {
      width: 284px;
      display: flex;
      flex-direction: column;
      grid-gap: 10px;

      p {
        font-size: 8.568px;
      }
    }
    .ProgressBar {
      display: flex;
      grid-gap: 20px;
      justify-content: space-between;
    }
    .player-table {
      margin-left: 0px;
      grid-gap: 10px;
      background: #112533;
      margin-right: 10px;
      border-top-left-radius: 3.57px;
      border-top-right-radius: 3.57px;
    }
    .player-sub-table {
      grid-gap: 10px;
    }
    .Connect-list,
    .Truth-list {
      display: flex;
      grid-gap: 20px;
      ul {
        display: flex;
        list-style: none;
        text-decoration: none;
        flex-direction: column;
        grid-gap: 24px;
        align-items: center;
        justify-content: center;

        li {
          font-size: 7.14px;
          grid-gap: 5px;
        }
        a {
          font-size: 7.14px;
          gap: 5px;
        }
        img {
          width: 11.42px;
          height: 10.35px;
        }
      }
    }
    .Player-list {
      display: flex;
      grid-gap: 60px;
      ul {
        display: flex;
        list-style: none;
        text-decoration: none;
        flex-direction: column;
        grid-gap: 5px;

        a {
          font-size: 7.14px;
          gap: 5px;
        }
        img {
          width: 13.57px;
          height: 28.55px;
        }
      }
    }
    .connect-truth {
      display: flex;
      grid-gap: 10px;
    }

    .veification-text {
      p {
        font-size: 7.14px;
        padding: 5px 0px;
        background: #112533;
        margin-right: 10px;
        border-bottom-right-radius: 3.57px;
        border-bottom-left-radius: 3.57px;
      }
    }
  }
`;
