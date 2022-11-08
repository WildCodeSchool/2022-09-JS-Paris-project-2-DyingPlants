import React from "react";
import "./Startup.css";
import FirstContainer from "./FirstContainer";
import FirstContainer2 from "./FirstContainer2";
import NavContainer from "./NavContainer";

export default function Header({ colors }) {
  return (
    <div>
      <NavContainer colors={colors} />
      <FirstContainer colors={colors} />
      <FirstContainer2 colors={colors} />
    </div>
  );
}
