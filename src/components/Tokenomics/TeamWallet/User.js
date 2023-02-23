import React from "react";
import removeicon from "../../../assets/images/Token/removeicon.webp";
const User = (props) => {
  return (
    <li>
      <a>
        <img src={props.icon} />
        {props.children}
      </a>
      <button onClick={props.delEvent}>
        <img src={removeicon} alt="removeicon" />
        Remove
      </button>
    </li>
  );
};

export default User;
