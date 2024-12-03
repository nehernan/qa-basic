import React from "react";
import { WhatTesting } from "./components/WhatTesting/WhatTesting";
import { TestingFundaments } from "./components/TestingFundaments/TestingFundaments";
import { TestingPsychology } from "./components/TestingPsychology/TestingPsychology";
import { HeaderCustom } from "../../../Shared/Header/HeaderCustom";
import { TestingLevel } from "./components/TestingLevel/TestingLevel";
import { TestingSoftwareModel } from "./components/TestingSoftwareModel/TestingSoftwareModel";
import { TestingMaintenance } from "./components/TestingMaintenance/TestingMaintenance";

const Testing: React.FC = () => {
  return (
    <div>
      <HeaderCustom title="Bases del testing" />
      <WhatTesting />
      <TestingFundaments />
      <TestingPsychology /> 
      <TestingSoftwareModel/>
      <TestingLevel/>
      <TestingMaintenance/>
    </div>
  );
};

export default Testing;
