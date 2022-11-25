import { BsFillTriangleFill } from "react-icons/bs";
import "../../assets/startup/cellFrame.png";
import "./Startup.css";

function TriangleIcon(color) {
  return (
    <BsFillTriangleFill
      color={color}
      style={{ transform: "rotate(180deg)", margin: "0 0 2px 5px" }}
      size=".4rem"
    />
  );
}

export default function NavContainer({ colors }) {
  const { background1, background2, background3, font1, font2 } = colors;

  return (
    <nav id="navBar">
      <p id="logo">Luko</p>
      <ul id="navBarLeftUl">
        <li>
          Produits
          <TriangleIcon color={font1} />
        </li>
        <li>
          Engagements
          <TriangleIcon color={font1} />
        </li>
        <li>
          Aide
          <TriangleIcon color={font1} />
        </li>
        <li>
          Avis Client
          <TriangleIcon color={font1} />
        </li>
      </ul>
      <ul id="navBarRight">
        <li>Mon espace personnel</li>
        <li>
          <button
            type="button"
            className="navButton"
            style={{ color: background1, backgroundColor: background2 }}
          >
            Obtenir mon prix
          </button>
        </li>
      </ul>
    </nav>
  );
}
