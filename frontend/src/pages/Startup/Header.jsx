import FirstContainer from "./FirstContainer";
import NavContainer from "./NavContainer";
import "./Startup.css";

export default function Header({ colors }) {
  const { background1, background2, background3, background4, font1, font2 } =
    colors;
  return (
    <div
      className="headerContainer"
      style={{ backgroundColor: background1, color: font1 }}
    >
      <div id="headerInnerDiv">
        <NavContainer colors={colors} />
        <FirstContainer colors={colors} />
      </div>
    </div>
  );
}
