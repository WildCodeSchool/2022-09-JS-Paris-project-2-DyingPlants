import FirstContainer from "./FirstContainer";
import NavContainer from "./NavContainer";
import "./Startup.css";

export default function Header({ colors }) {
  const { background1 } = colors;
  return (
    <div className="headerContainer" style={{ backgroundColor: background1 }}>
      <div id="headerInnerDiv">
        <NavContainer colors={colors} />
        <FirstContainer colors={colors} />
      </div>
    </div>
  );
}
