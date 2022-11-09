import React from "react";
import "./Startup.css";
import SecondContainer from "./SecondContainer";
import SecondContainer2 from "./SecondContainer2";
import ThirdContainer from "./ThirdContainer";
import ThirdContainer2 from "./ThirdContainer2";
import FourthContainer from "./FourthContainer";
import FourthContainer2 from "./FourthContainer2";
import FifthContainer from "./FifthContainer";
import SixthContainer from "./SixthContainer";
import MyButtons from "./MyButtons";
import SeventhContainer from "./SeventhContainer";
import SeventhContainer2 from "./SeventhContainer2";

export default function Main({ colors }) {
  const { background1, background2, background3, font1, font2 } = colors;

  return (
    <div>
      <SecondContainer colors={colors} />
      <ThirdContainer colors={colors} />
      <ThirdContainer2 colors={colors} />
      <FourthContainer colors={colors} />
      <FourthContainer2 colors={colors} />
      <FifthContainer colors={colors} />
      <SixthContainer colors={colors} />
      <MyButtons colors={colors} />
      <SeventhContainer colors={colors} />
      <SeventhContainer2 colors={colors} />
    </div>
  );
}
