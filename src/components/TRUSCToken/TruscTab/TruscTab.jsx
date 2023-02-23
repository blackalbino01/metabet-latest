import React, { Component } from "react";
import TabsList from "./TabsList";
import TabsItem from "./TabsItem";
import TabsContent from "./TabsContent";
import { TabsStyle } from "./TabsStyle";
import icon from "../../../assets/images/TRUSC/switch_icon.webp";
import swap_btn from "../../../assets/images/TRUSC/swap_btn.webp";
import foxhalo from "../../../assets/images/TRUSC/fox_2.webp";
import Tether from "../../../assets/images/TRUSC/Tether.webp";
import USDC from "../../../assets/images/TRUSC/USDC.webp";
import BNB from "../../../assets/images/TRUSC/BNB.webp";
import fox from "../../../assets/images/TRUSC/fox_plain.webp";
import rightTab from "../../../assets/images/TRUSC/right_tab.png";
import foxmini from "../../../assets/images/TRUSC/fox-mini.webp";
import usdc from "../../../assets/images/TRUSC/usdc-mini.webp";

class Tabs extends Component {
  state = {
    selectedTab: 0,
  };

  handleClick = (itemIndex) => {
    this.setState({
      selectedTab: itemIndex,
    });
  };

  render() {
    let data = [
      { id: 1, title: "TruSwap" },
      { id: 2, title: "TruLiquidity" },
    ];
    return (
      <TabsStyle>
        <TabsList>
          {data.map((item, index) => (
            <TabsItem
              handleClick={this.handleClick.bind(this, index)}
              className={this.state.selectedTab === index ? "active" : ""}
              key={item.id}
            >
              <span>{item.title}</span>
            </TabsItem>
          ))}
        </TabsList>
        <div className="tabs__content-wrapper">
          <TabsContent tabId="0" activeTab={this.state.selectedTab}>
            <div className="Truswap">
              {" "}
              <div className="truSwap">
                <div className="tru">
                  {" "}
                  <img src={foxhalo} alt="foxhalo" />
                  <div className="truai">
                    <label>
                      From: <input placeholder="TRUAI" />
                    </label>{" "}
                    <span>2500000</span>
                    <div className="text">
                      <span>Balance: 2500000</span>
                      <span>MAX</span>
                    </div>
                    <span>$25</span>
                  </div>
                </div>
              </div>
              <div className="swap">
                <img src={icon} alt="icon" />
                <img src={swap_btn} alt="swap_btn" />
              </div>
              <div className="truSwap">
                <div className="tru">
                  {" "}
                  <img src={fox} alt="fox" />
                  <div className="truai">
                    <label>
                      From: <input placeholder="TRUSC" />
                    </label>{" "}
                    <span>25</span>
                    <div className="text">
                      <span>Balance: 0.00</span>
                      <span>MAX</span>
                    </div>
                    <span>$25</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="TruLiquidity active1">
              <div className="balance">
                <div className="icon">
                  <img src={Tether} al="Tether" />
                  <span>$0.00</span>
                </div>
                <div className="icon">
                  <img src={BNB} al="BNB" />
                  <span>$0.00</span>
                </div>
                <div className="icon">
                  <img src={USDC} al="USDC" />
                  <span>$25.00</span>
                </div>
              </div>
              <div className="convert">
                <div className="truai">
                  <label>
                    From: <img src={foxmini} />
                    <input placeholder="TRUSC" />
                  </label>{" "}
                  <span>00.00</span>
                  <div className="text">
                    <span>Balance: 00.00</span>
                    <span>MAX</span>
                  </div>
                </div>
                <img src={icon} alt="icon" />
                <div className="truai">
                  <label>
                    To: <img src={usdc} />
                    <input placeholder="TRUSC" />
                  </label>{" "}
                  <span>00.00</span>
                  <div className="text">
                    <span>Balance: 25.00</span>
                    <span>MAX</span>
                  </div>
                </div>
              </div>
              <div className="img">
                <img src={swap_btn} alt="swap_btn" />
              </div>
            </div>{" "}
          </TabsContent>
          <TabsContent tabId="1" activeTab={this.state.selectedTab}>
            <div className="Truswap  active1">
              {" "}
              <div className="truSwap">
                <div className="tru">
                  {" "}
                  <img src={foxhalo} alt="foxhalo" />
                  <div className="truai">
                    <label>
                      From: <input placeholder="TRUAI" />
                    </label>{" "}
                    <span>2500000</span>
                    <div className="text">
                      <span>Balance: 2500000</span>
                      <span>MAX</span>
                    </div>
                    <span>$25</span>
                  </div>
                </div>
              </div>
              <div className="swap">
                <img src={icon} alt="icon" />
                <img src={swap_btn} alt="swap_btn" />
              </div>
              <div className="truSwap">
                <div className="tru">
                  {" "}
                  <img src={fox} alt="fox" />
                  <div className="truai">
                    <label>
                      From: <input placeholder="TRUSC" />
                    </label>{" "}
                    <span>25</span>
                    <div className="text">
                      <span>Balance: 0.00</span>
                      <span>MAX</span>
                    </div>
                    <span>$25</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="TruLiquidity">
              <div className="balance">
                <div className="icon">
                  <img src={Tether} alt="Tether" />
                  <span>$0.00</span>
                </div>
                <div className="icon">
                  <img src={BNB} alt="BNB" />
                  <span>$0.00</span>
                </div>
                <div className="icon">
                  <img src={USDC} alt="USDC" />
                  <span>$25.00</span>
                </div>
              </div>
              <div className="convert">
                <div className="truai">
                  <label>
                    From: <img src={foxmini} />
                    <input placeholder="TRUSC" />
                  </label>{" "}
                  <span>00.00</span>
                  <div className="text">
                    <span>Balance: 00.00</span>
                    <span>MAX</span>
                  </div>
                </div>
                <img src={icon} alt="icon" />
                <div className="truai">
                  <label>
                    To: <img src={usdc} />
                    <input placeholder="TRUSC" />
                  </label>{" "}
                  <span>00.00</span>
                  <div className="text">
                    <span>Balance: 25.00</span>
                    <span>MAX</span>
                  </div>
                </div>
              </div>
              <div className="img">
                <img src={swap_btn} alt="swap_btn" />
              </div>
            </div>{" "}
          </TabsContent>
        </div>
      </TabsStyle>
    );
  }
}

export default Tabs;
