/* import obs from "../../assets/startup/news/newsObs.svg"; */
import { AiFillBank } from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";
import { TbScooter } from "react-icons/tb";
import cellFramePic from "../../assets/startup/cellFrame.png";
import "./Startup.css";

export default function FirstContainer({ colors }) {
  const { background1, background2, background3, font1, font2 } = colors;

  const newsBannerColor = () => {
    const [a, b, c] = font1.match(/\d+/g);
    return `rgba(${a}, ${b}, ${c}, .70)`;
  };

  return (
    <div>
      <header className="startupHeader">
        <div style={{ width: "50%" }}>
          <h2>
            L'assurance qui vous dit tout <br /> (sur tout)
          </h2>
          <p className="mediumOpac">
            Y'a pas de loup chez Luko : des contrats clairs, des remboursements
            2x plus rapides, un modèle 100% digital et transparent. Comme ça,
            vous gagnez du temps, et de l'argent.
          </p>
          <div id="headerButtonContainer">
            <button
              type="button"
              className="headerButton"
              style={{ backgroundColor: background2, color: font2 }}
            >
              <BsFillHouseDoorFill size="37px" color={background1} />
              Assurance habitation
            </button>
            <button
              type="button"
              className="headerButton"
              style={{ backgroundColor: background2, color: font2 }}
            >
              <AiFillBank size="37px" color={background1} />
              Assurance emprunteur
            </button>
            <button
              type="button"
              className="headerButton"
              style={{ backgroundColor: background2, color: font2 }}
            >
              <TbScooter size="37px" color={background1} />
              Trottinettes électriques
            </button>
          </div>
        </div>
        <div>
          <div id="cellphoneImageContainer">
            <img src={cellFramePic} alt="" />
          </div>
        </div>
      </header>
      <div>
        <div className="googleReview">
          <p>
            Google <span>Reviews</span>
          </p>
          <div>
            <RiStarSFill color="gold" size="1.5rem" />
            <RiStarSFill color="gold" size="1.5rem" />
            <RiStarSFill color="gold" size="1.5rem" />
            <RiStarSFill color="gold" size="1.5rem" />
            <RiStarSFill color="gold" size="1.5rem" />
          </div>
        </div>
        <div id="newsBanners">
          <div
            className="newsBanner"
            style={{ backgroundColor: newsBannerColor() }}
          />
          <div
            className="newsBanner"
            style={{ backgroundColor: newsBannerColor() }}
          />
          <div
            className="newsBanner"
            style={{ backgroundColor: newsBannerColor() }}
          />
        </div>
      </div>
    </div>
  );
}
