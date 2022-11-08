import React from "react";
import "./Startup.css";
import FirstContainer from "./FirstContainer";
import FirstContainer2 from "./FirstContainer2";
import NavContainer from "./NavContainer";

export default function Header() {
  return (
    <div>
      <NavContainer />
      <FirstContainer />
      <FirstContainer2 />
    </div>
  );
}
