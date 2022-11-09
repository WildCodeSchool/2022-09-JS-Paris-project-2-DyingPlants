import React, { useState } from "react";
import "./Startup.css";
import Header from "./Header";
import Main from "./Main";

export default function Startup() {
  const [background1, setBackground1] = useState("#005df6");
  const [background2, setBackground2] = useState("#fff");
  const [background3, setBackground3] = useState("#112282");
  const [font1, setFont1] = useState("#fff");
  const [font2, setFont2] = useState("#000000");

  const colors = {
    background1,
    background2,
    background3,
    font1,
    font2,
  };

  return (
    <div>
      <Header colors={colors} />
      <Main colors={colors} />
    </div>
  );
}
