import { Link } from "react-router-dom";
import logo from "../../assets/cameleonWithe.png";
import "./Home.css";

export default function Home() {
  return (
    <main className="homeMain">
      <div className="homeLogoContainer">
        <p className="homeLogoText" style={{ right: -60, bottom: "2%" }}>
          generate
        </p>
        <img className="homeLogo" src={logo} alt="logo" />
        <p className="homeLogoText" style={{ left: -80, bottom: "30%" }}>
          coloses
        </p>
      </div>
      <Link to="../e-commerce">Site e-commerce</Link>
      <Link to="../Restaurant">Site restaurant</Link>
      <Link to="../Startup">Site Startup</Link>
    </main>
  );
}
