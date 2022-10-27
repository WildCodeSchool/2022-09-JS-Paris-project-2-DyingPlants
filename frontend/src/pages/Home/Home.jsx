import { Link } from "react-router-dom";
import logo from "../../assets/cameleonWithe.png";
import "./Home.css";

// <Link to={"e-commerce"} >Site e-commerce</Link>

const style = {
  main: {
    backgroundColor: "black",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logoContainer: {
    height: "120px",
    width: "120px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  logo: {
    maxHeight: "100%",
    width: "auto",
  },
  logoText: {
    color: "white",
    position: "absolute",
    fontFamily: "Poppins",
    fontSize: "22px",
  },
};

export default function Home() {
  return (
    <main style={style.main}>
      <div style={style.logoContainer}>
        <p style={{ ...style.logoText, right: -60, bottom: "2%" }}>generate</p>
        <img style={style.logo} src={logo} alt="logo" />
        <p style={{ ...style.logoText, left: -80, bottom: "30%" }}>coloses</p>
      </div>
      <Link to="../e-commerce">Site e-commerce</Link>
      <Link to="../Restaurant">Site restaurant</Link>
    </main>
  );
}
