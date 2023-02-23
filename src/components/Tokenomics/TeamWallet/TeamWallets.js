import React, { useState } from "react";
import User from "./User";
import "./User.css";
import txid from "../../../assets/images/Token/txid.webp";
import removeicon from "../../../assets/images/Token/removeicon.webp";
import AddButton from "../../../assets/images/Token/AddButton.png";
import { users } from "../address/address";

const TeamWallets = () => {
  console.log(users);

  const [search, setSearch] = useState([]);
  console.log("my value", search);
  const [query, setQuery] = useState("");
  const GetQuery = () => {};
  const handleClick = () => {
    setSearch((search) => [...search, query]);
  };
  const updateQuery = ({ target }) => {
    setQuery(target.value);
  };
  const keyPressed = ({ key }) => {
    if (key === "enter") {
      handleClick();
    }
  };
  console.log(query);

  return (
    <div>
      <div className="TeamWallets">
        {/* we need to use Object.values in order to specify that users array holds objects */}
        {Object.values(users).map((item, index) => (
          <ul key={index}>
            <li>
              <div>
                <img src={item.icon1} alt="txid" />
              </div>
              <a>{item.name}</a>
            </li>
            <button>
              <div>
                <img src={item.icon2} alt="remove" />
              </div>
              Remove
            </button>
          </ul>
        ))}
        {search.map((item) => (
          <ul>
            <li>
              <img src={txid} alt="txid" />
              <a>{item}</a>
            </li>
            <button>
              <img src={removeicon} alt="removeicon" />
              Remove
            </button>
          </ul>
        ))}
      </div>
      <div className="SubmitAddress">
        <div className="WalletAddress">
          <label>
            <input
              type="text"
              onChange={updateQuery}
              onKeyPress={keyPressed}
              placeholder="Wallet Address"
            />
          </label>
          <button onClick={handleClick}>
            <img src={AddButton} alt="AddButton" />
            Add
          </button>
        </div>
      </div>
      <button id="Save-btn">Save</button>
    </div>
  );
};

export default TeamWallets;
