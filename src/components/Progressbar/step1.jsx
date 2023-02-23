import React from "react";
export default function Step1(props) {
  return (
    <div className={"stepBlock" + (props.selected1 ? " selected" : "")}>
      <div
        className="circleWrapper"
        onClick={() => props.updateStep1(props.index + 1)}
      >
        <div className="circle">{props.index + 1}</div>
      </div>
    </div>
  );
}
