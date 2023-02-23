import React, { useEffect, useState } from "react";
import { Container, Footer } from "./Tokenomics.styles";
import blueRectangle from "../../assets/images/Token/blue-rectangle.webp";
import greenRectangle from "../../assets/images/Token/green-rectangle.webp";
import yellowRectangle from "../../assets/images/Token/yellow-rectangle.webp";
import blueBox from "../../assets/images/Token/blue-box.webp";
import greenBox from "../../assets/images/Token/green-box.webp";
import yellowBox from "../../assets/images/Token/yellow-box.webp";
import Fox from "../../assets/images/Token/meme-fox.webp";
import tag from "../../assets/images/Token/tag.webp";
import crossicon from "../../assets/images/Token/crossicon.webp";
import player from "../../assets/images/Token/player.png";
import Truthfi from "../../assets/images/Token/Truthfi.webp";
import truetoken from "../../assets/images/Token/truetoken.webp";
import walletconnected from "../../assets/images/Token/walletdisconnected.webp";
import USDT from "../../assets/images/USDT.svg";
import TeamWallets from "./TeamWallet/TeamWallets";
import { users } from "./address/address";
import { NavLink } from "react-router-dom";
import TokenomicsFooter from "../../assets/images/Footerbanner/TokenomicsFooter.webp";
function Tokenomics() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState();
  const users = [];
  // let result = []
  const handle = (e) => {
    // result.push(show)
    users.push(show);
    setShow(e.target.value);
  };
  // console.log(show)
  // console.log(result)
  console.log(users);

  return (
    <>
      <Container>
        <div className="Heading">
          <NavLink to="/Tokenomics2">
            <span>TOKENOMICS</span>
          </NavLink>
        </div>
        <div className="sub-headline">
          <p>TRUE Token Sales Details</p>
        </div>
        <div className="Details">
          <ul>
            <li>Token Name:MetaBet</li>
            <li>Ticker:TRUE</li>
            <li>Total Supply:2,500,000</li>
            <li>Circulating Supply:1,500,000</li>
            <li>Total Price:$1.00</li>
          </ul>
          <div className="graph">
            <ul>
              <li>
                <a>
                  <img src={blueRectangle} alt="blueRectangle" />
                </a>
              </li>
              <li>
                <a>
                  <img src={greenRectangle} alt="greenRectangle" />
                  60%
                </a>
              </li>
              <li>
                <a>
                  <img src={yellowRectangle} alt="yellowRectanglee" />
                  40%
                </a>
              </li>
            </ul>
          </div>
          <div className="Icon">
            <ul>
              <li>
                <a>
                  <img src={blueBox} alt="bluebox" />
                  Total Supply
                </a>
              </li>
              <li>
                <a>
                  <img src={yellowBox} alt="yellowbox" />
                  Looked Private Sale Supply
                </a>
              </li>
              <li>
                <a>
                  <img src={greenBox} alt="greenbox" />
                  Circulating Supply
                </a>
              </li>
            </ul>
          </div>
          <img src={Fox} alt="Fox" />
        </div>
        <div className="sub-headline">
          <p>Buy MetaBet</p>
        </div>
        <div className="Buy">
          MetaBet Truthsayer Token
          <div className="Buy-btn">
            <div className="tag">
              <img src={tag} alt="tag" />
              <span>1$</span>
            </div>

            <div className="amount">
              <div className="Status">
                <span>Amount</span>
              </div>
              <label>
                <input type="text" placeholder="1" />
              </label>
            </div>
            <div className="cost">
              <div className="Status">
                <img src={USDT} alt="USDT" />
                <span>Cost</span>
              </div>
              <label>
                <input type="text" placeholder="1.00" />
              </label>
            </div>
            <button>Buy</button>
          </div>
        </div>
        <div className="sub-headline">
          <p>Private Sale Details</p>
        </div>
        <div className="Sale-Details">
          <ul>
            <li>Private Sale</li>
            <li>Supply:1,000,000</li>
            <li>Token Price:$0.60</li>
          </ul>
          <div className="Sales">
            <div className="Buy-btn">
              <div className="amount">
                <div className="Status">
                  <span>Amount</span>
                </div>
                <label>
                  <input type="text" placeholder="1" />
                </label>
              </div>
              <div className="cost">
                <div className="Status">
                  <img src={USDT} alt="USDT" />
                  <span>Cost</span>
                </div>
                <label>
                  <input type="text" placeholder="1.00" />
                </label>
              </div>
              <button>Buy</button>
            </div>
            <p>40% Locked 6 Months 60% Locked 12 months</p>
          </div>
        </div>
        <div className="sub-headline">
          <p>Truthsayer Rights</p>
        </div>
        <div className="Rights">
          <div>
            <div className="status">
              <img src={walletconnected} alt="walletconnected" />
              <span>Wallet Connected</span>
            </div>
            <hr />
            <div className="status">
              <div className="true-token">
                <img src={truetoken} alt="truetoken" width={79} />
                <div className="Balance">
                  <span>Balance</span>
                  <label>
                    <input type="text" placeholder="0" />
                  </label>
                </div>
              </div>
              <span>TRUE Token Balance</span>
            </div>

            <hr />
            <div className="status">
              <img src={crossicon} alt="crossicon" />
              <span>Tell Truth Earn</span>
            </div>
          </div>
          <div className="Truth-History">
            <div className="Headline">
              <span>Truth History</span>
              <p>Paid / Unpaid / Amount High /Amount Low</p>
            </div>
            <div className="Page">
              <div className="wrapper">
                <div className="UFC">
                  {/* <div className="heading">
                    <img src={ufc} alt="ufc" />
                    <div className="TRUTH">
                      <div className="truth">
                        <p>TRUTH</p>
                        <span>Earnt:$30</span>
                        <div className="txID">
                          <p>TxID</p>
                          <img src={txid} alt="txid" />
                        </div>
                      </div>
                      <img src={trueicon} alt="trueicon" />
                    </div>
                  </div>
                  <div className="subheading">
                    <p>Khabib Nurmagomedov VS Conor McGregor</p>
                  </div>
                  <div className="Date">
                    <p>22.08.2022</p>
                    <hr />
                  </div>
                  <div className="Board">
                    <div className="Reactangle">
                      <p>Khabib Nurmagomedov</p>
                      <div className="score">
                        <img src={Khabib} alt="Khabib" />
                      </div>
                    </div>

                    <div className="Reactangle1">
                      <p>Conor McGregor</p>
                      <div className="score">
                        <img src={mcgregor} alt="mcgregor" />
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* <div className="UFC">
                  <div className="heading">
                    <img src={ufc} alt="ufc" />
                    <div className="TRUTH">
                      <div className="truth">
                        <p>TRUTH</p>
                        <span>Earnt:$30</span>
                        <div className="txID">
                          <p>TxID</p>
                          <img src={txid} alt="txid" />
                        </div>
                      </div>
                      <img src={trueicon} alt="trueicon" />
                    </div>
                  </div>
                  <div className="subheading">
                    <p>Khabib Nurmagomedov VS Conor McGregor</p>
                  </div>
                  <div className="Date">
                    <p>22.08.2022</p>
                    <hr />
                  </div>
                  <div className="Board">
                    <div className="Reactangle">
                      <p>Khabib Nurmagomedov</p>
                      <div className="score">
                        <img src={Khabib} alt="Khabib" />
                      </div>
                    </div>

                    <div className="Reactangle1">
                      <p>Conor McGregor</p>
                      <div className="score">
                        <img src={mcgregor} alt="mcgregor" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="UFC">
                  <div className="heading">
                    <img src={ufc} alt="ufc" />
                    <div className="TRUTH">
                      <div className="truth">
                        <p>TRUTH</p>
                        <span>Earnt:$30</span>
                        <div className="txID">
                          <p>TxID</p>
                          <img src={txid} alt="txid" />
                        </div>
                      </div>
                      <img src={trueicon} alt="trueicon" />
                    </div>
                  </div>
                  <div className="subheading">
                    <p>Khabib Nurmagomedov VS Conor McGregor</p>
                  </div>

                  <div className="Date">
                    <p>22.08.2022</p>
                    <hr />
                  </div>
                  <div className="Board">
                    <div className="Reactangle">
                      <p>Khabib Nurmagomedov</p>
                      <div className="score">
                        <img src={Khabib} alt="Khabib" />
                      </div>
                    </div>

                    <div className="Reactangle1">
                      <p>Conor McGregor</p>
                      <div className="score">
                        <img src={mcgregor} alt="mcgregor" />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="footline">
              <p>0</p>
              <p>Truth</p>
              <p>0</p>
            </div>
          </div>
          <div className="Truthfi">
            <img src={Truthfi} alt="Truthfi" />
          </div>
        </div>
        <div className="sub-headline">
          <p>Round Table</p>
        </div>
        <div className="Round-Table">
          <div className="Table">
            <div className="Seats">
              <div className="Seats-text">
                <p>Seats Owned: 0</p>
              </div>
              <div className="seats-owned">
                <div className="Page">
                  <div className="wrapper">
                    <div className="Players">
                      {/* <div
                        onClick={() => {
                          setIndex(0);
                        }}
                      >
                        <img
                          src={player}
                          className={`${index === 0 ? "img" : null}`}
                          alt="player"
                        />
                      </div>
                      <div
                        className={` ${index === 1 ? "img" : null}`}
                        onClick={() => {
                          setIndex(1);
                        }}
                      >
                        <img src={player} alt="player" />
                      </div>
                      <div
                        className={` ${index === 2 ? "img" : null}`}
                        onClick={() => {
                          setIndex(2);
                        }}
                      >
                        <img src={player} alt="player" />
                      </div>
                      <div
                        className={`player ${index === 3 ? "img" : null}`}
                        onClick={() => {
                          setIndex(3);
                        }}
                      >
                        <img src={player} alt="player" />
                      </div>
                      <div
                        className={` ${index === 4 ? "img" : null}`}
                        onClick={() => {
                          setIndex(4);
                        }}
                      >
                        <img src={player} alt="player" />
                      </div>
                      <div
                        className={` ${index === 5 ? "img" : null}`}
                        onClick={() => {
                          setIndex(5);
                        }}
                      >
                        <img src={player} alt="player" />
                      </div>
                      <div
                        className={` ${index === 6 ? "img" : null}`}
                        onClick={() => {
                          setIndex(6);
                        }}
                      >
                        <img src={player} alt="player" />
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="footline1">
                  <p>0</p>
                  <p>NFT</p>
                  <p>0</p>
                </div>
                <div className="line">
                  <hr />
                </div>
                <div className="player-status">
                  <div className="AMOUNT">
                    <div className="Status">
                      <span>Amount($)</span>
                    </div>
                    <label>
                      <input type="text" placeholder="0" />
                    </label>
                  </div>
                  <button>Sell</button>
                </div>
              </div>
            </div>
            <div className="Team-wallets">
              <div className="Seats-text">
                <p>Team Wallets:</p>
              </div>
              <div className="wallet-box">
                <TeamWallets />
              </div>
            </div>
          </div>
          <div className="BuySeat">
            <div className="Seats-text">
              <p>Buy Seat:</p>
              <p>Low to High/High to Low</p>
            </div>
            <div className="SeatBox">
              <div className="Seats">
                <div className="Page1">
                  <div className="wrapper">
                    <div className="Players">
                      <div
                        onClick={() => {
                          setIndex(0);
                        }}
                      >
                        <img
                          src={player}
                          className={`${index === 0 ? "img" : null}`}
                          alt="player"
                        />
                        <p>380$</p>
                      </div>
                      <div
                        className={` ${index === 1 ? "img" : null}`}
                        onClick={() => {
                          setIndex(1);
                        }}
                      >
                        <img src={player} alt="player" />
                        <p>500$</p>
                      </div>
                      <div
                        className={` ${index === 2 ? "img" : null}`}
                        onClick={() => {
                          setIndex(2);
                        }}
                      >
                        <img src={player} alt="player" />
                        <p>900$</p>
                      </div>
                      <div
                        className={`player ${index === 3 ? "img" : null}`}
                        onClick={() => {
                          setIndex(3);
                        }}
                      >
                        <img src={player} alt="player" />
                        <p>1200$</p>
                      </div>
                      <div
                        className={` ${index === 4 ? "img" : null}`}
                        onClick={() => {
                          setIndex(4);
                        }}
                      >
                        <img src={player} alt="player" />
                        <p>1700$</p>
                      </div>
                      <div
                        className={` ${index === 5 ? "img" : null}`}
                        onClick={() => {
                          setIndex(5);
                        }}
                      >
                        <img src={player} alt="player" />
                        <p>2000$</p>
                      </div>
                      <div
                        className={` ${index === 6 ? "img" : null}`}
                        onClick={() => {
                          setIndex(6);
                        }}
                      >
                        <img src={player} alt="player" />
                        <p>2500$</p>
                      </div>
                      <div
                        className={` ${index === 7 ? "img" : null}`}
                        onClick={() => {
                          setIndex(7);
                        }}
                      >
                        <img src={player} alt="player" />
                        <p>3000$</p>
                      </div>
                      <div
                        className={` ${index === 8 ? "img" : null}`}
                        onClick={() => {
                          setIndex(8);
                        }}
                      >
                        <img src={player} alt="player" />
                        <p>3100$</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footline1">
                  <p>1</p>
                  <p>Page number</p>
                  <p>100</p>
                </div>
              </div>
              <div className="buyseat-btn">
                <label>
                  <input id="seatinput" type="text" placeholder="1" />
                  Selected
                </label>
                <label>
                  <input type="text" placeholder="$1700" />
                  Total
                </label>
                <button>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <Footer>
       <img src={TokenomicsFooter} alt="TokenomicsFooter" width="100%" />
     </Footer> */}
    </>
  );
}

export default Tokenomics;
