import * as React from 'react';
import { useState } from "react";
import Stepper from "../Steps/Stepper";
import StepperControl from "../Steps/StepperControl";
import { UseContextProvider } from "../Steps/StepperContext";
import { UserInt } from "../pages/UserInt";
import { Trackings } from "../pages/Trackings";

function Table() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Introduce Usuario",
    "Introduce Trackings"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <UserInt />;
      case 2:
        return <Trackings />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}
export {Table};