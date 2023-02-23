import React from "react";
import openai from "../../assets/images/Truth2earn/verdict.webp";
import xcircle from "../../assets/images/Truth2earn/xcircle.webp";
import verified from "../../assets/images/verified.webp";

const Truth2earnDropdown = (props) => {
  return (
    <>
      {props.Truth_data && (
        <div className="payments-inputs">
          <div className="openai">
            <img src={openai} alt="openai" />
            <span>ChatGPT Verdict</span>
            <img src={verified} alt="verified" />
          </div>
          <div className="verdict-btn">
            <button id="green">
              YES <img src={verified} alt="verified" />
            </button>
            <button id="red">
              NO <img src={xcircle} alt="cross" />
            </button>
          </div>
          <div className="title-text">
            <span>{props.verdict_title}</span>
            <span id="grey">TRUTH ? 💰 $15 BOUNTY</span>
          </div>
          <div className="verdict-btn">
            <button id="green">YES</button>
            <button id="red">NO</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Truth2earnDropdown;
