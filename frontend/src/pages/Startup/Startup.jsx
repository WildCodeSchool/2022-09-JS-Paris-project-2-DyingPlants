import SoloPalette from "@components/soloPalette/SoloPalette";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./Startup.css";

export default function Startup() {
  const [background1, setBackground1] = useState("rgb(0, 80, 228)");
  const [background2, setBackground2] = useState("rgb(255, 255, 255)");
  const [background3, setBackground3] = useState("rgb(17, 34, 130)");
  const [background4, setBackground4] = useState("rgb(255, 237, 226)");
  const [font1, setFont1] = useState("rgb(255, 255, 255");
  const [font2, setFont2] = useState("rgb(0, 0, 0)");

  const colors = {
    background1,
    background2,
    background3,
    background4,
    font1,
    font2,
  };

  const labelAndColorObj = {
    labels: [
      "background1",
      "background2",
      "background3",
      "background4",
      "font1",
      "font2",
    ],
    colors: Object.values(colors),
    setters: [
      setBackground1,
      setBackground2,
      setBackground3,
      setBackground4,
      setFont1,
      setFont2,
    ],
  };

  return (
    <div className="startupPage">
      <Header colors={colors} />
      <Main colors={colors} />
      <Footer colors={colors} />
      <SoloPalette labelAndColorObj={labelAndColorObj} />
    </div>
  );
}
