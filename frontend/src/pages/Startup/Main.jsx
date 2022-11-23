import FifthContainer from "./FifthContainer";
import FourthContainer from "./FourthContainer";
import SecondContainer from "./SecondContainer";
import SixthContainer from "./SixthContainer";
import "./Startup.css";
import ThirdContainer from "./ThirdContainer";

export default function Main({ colors }) {
  const { background1, background2, background3, font1, font2 } = colors;

  return (
    <div>
      <SecondContainer colors={colors} />
      <ThirdContainer colors={colors} />
      <FourthContainer colors={colors} />
      <FifthContainer colors={colors} />
      <SixthContainer colors={colors} />
    </div>
  );
}
