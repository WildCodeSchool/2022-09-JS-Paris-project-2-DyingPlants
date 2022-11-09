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

export default function Main() {
  return (
    <div>
      <SecondContainer />
      <SecondContainer2 />
      <ThirdContainer />
      <ThirdContainer2 />
      <FourthContainer />
      <FourthContainer2 />
      <FifthContainer />
      <SixthContainer />
      <MyButtons />
      <SeventhContainer />
      <SeventhContainer2 />
    </div>
  );
}
