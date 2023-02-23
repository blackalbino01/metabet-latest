import React, { useState } from "react";
import Step from "./step";
import Step1 from "./step1";
export default function StepNavigation(props) {
  const [currentStep, updateCurrentStep] = useState(1);
  function updateStep(step) {
    updateCurrentStep(step);
  }
  const [currentStep1, updateCurrentStep1] = useState(1);
  function updateStep1(step) {
    updateCurrentStep1(step);
  }
  console.log("tesr", props.currentStep);
  return (
    <>
      <div className="step">
        {" "}
        <div className="stepWrapper">
          {props.labelArray.map((item, index) => (
            <Step
              key={index}
              index={index}
              label={item}
              updateStep={props.updateStep}
              currentStep={currentStep}
              selected={props.currentStep === index + 1}
            ></Step>
          ))}
        </div>
        <span style={{ color: "#6E8799", paddingLeft: "35px" }}>
          {props.currentStep}/20
        </span>
      </div>
      <div className="step">
        <div className="stepWrapper1">
          {props.labelArray.map((item, index) => (
            <Step1
              key={index}
              index={index}
              label={item}
              updateStep1={props.updateStep1}
              selected1={props.currentStep1 === index + 1}
            ></Step1>
          ))}
        </div>
        <span style={{ color: "#6E8799", paddingLeft: "35px" }}>
          {props.currentStep1}/20
        </span>
      </div>
    </>
  );
}
