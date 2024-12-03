import React from "react";
import { WhatTesting } from "./components/WhatTesting/WhatTesting";
import { TestingFundaments } from "./components/TestingFundaments/TestingFundaments";
import { TestingPsychology } from "./components/TestingPsychology/TestingPsychology";
import { HeaderCustom } from "../../../Shared/Header/HeaderCustom";

const Testing: React.FC = () => {
  return (
    <div>
      <HeaderCustom title="Bases del testing" />
      <WhatTesting />
      <TestingFundaments />
      <TestingPsychology /> 
    </div>
  );
};

export default Testing;
