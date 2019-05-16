import React from "react";

import All from "./AllCheck";
import EmbedStressTest from "./StressTestEmbed";
import LocalStressTest from "./StressTestLocal";

export const StressLocal = LocalStressTest;
export const StressEmbed = EmbedStressTest;

const Test = ({ type = "gallery" }) => {
  switch (type) {
    case "local":
      return <StressLocal />;
    case "embed":
      return <StressEmbed />;
    default:
      return <All />;
  }
};

export default Test;
