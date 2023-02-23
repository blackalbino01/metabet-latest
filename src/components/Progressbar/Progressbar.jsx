import React, { useState } from "react";
import ProgressNavigation from "./ProgressNavigation";
import "./Progress.css";
function Progressbar() {
  const labelArray = [
    "Step 0",
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Step 5",
    "Step 6",
    "Step 7",
    "Step 8",
    "Step 9",
  ];

  const [currentStep, updateCurrentStep] = useState(1);
  function updateStep(step) {
    updateCurrentStep(step);
  }
  const [currentStep1, updateCurrentStep1] = useState(1);
  function updateStep1(step) {
    updateCurrentStep1(step);
  }
  const [progress, setProgress] = useState(0);

  return (
    <div className="progress">
      <ProgressNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        currentStep1={currentStep1}
        updateStep={updateStep}
        updateStep1={updateStep1}
      ></ProgressNavigation>
    </div>
  );
}

export default Progressbar;
