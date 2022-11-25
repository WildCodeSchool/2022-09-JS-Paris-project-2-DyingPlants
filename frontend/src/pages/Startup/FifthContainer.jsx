import { HiArrowRight } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";
import "./Startup.css";

export default function FifthContainer({ colors }) {
  const { background1, background2, background3, background4, font1, font2 } =
    colors;

  return (
    <div id="fifthContainer">
      <div
        id="fifthCText"
        style={{ backgroundColor: background3, color: font1 }}
      >
        <h2>Plus de 400 000 assurés ont sauté le pas. Et vous ?</h2>
        <p>Ils ont confié leur foyer à Luko. Découvrez pourquoi.</p>

        <button
          type="button"
          id="obtainPriceButton"
          style={{
            backgroundColor: background1,
            color: "inherit",
            border: "none",
          }}
          className="navButton arrowButton"
        >
          <HiArrowRight size="1.4rem" /* style={{maxHeight: "230px"}} */ />
          Lire nos autres avis clients
        </button>
        <div className="googleReview">
          <p>
            Google <span>Reviews</span>
          </p>
          <div>
            <RiStarSFill color="gold" size="1.5rem" />
            <RiStarSFill color="gold" size="1.5rem" />
            <RiStarSFill color="gold" size="1.5rem" />
            <RiStarSFill color="gold" size="1.5rem" />
            <RiStarSFill color="rgba(255, 255, 255, .7)" size="1.5rem" />
          </div>
        </div>
      </div>
      <div id="fifthCCarou" style={{ backgroundColor: background4 }}>
        <div id="carouWrapper">
          <div className="carouReview">
            <div className="avatarDiv">
              <BsPersonFill color="purple" size="3rem" />
              <div>
                <p className="opac75">Fred Baudin</p>
                <p className="mediumOpac">10/23/2022</p>
              </div>
            </div>
            <p>
              Résiliation de mon ancien contrat très facile, un service de
              diagnostique de mon logement aux petits oignons et un service
              client réactif : je recommande 👍{" "}
            </p>
            <div>
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
            </div>
          </div>
          <div className="carouReview">
            <div className="avatarDiv">
              <BsPersonFill color="green" size="3rem" />
              <div>
                <p className="opac75">Fabrice Dupont</p>
                <p className="mediumOpac">20/09/2019</p>
              </div>
            </div>
            <p>
              Rapide et efficace pour le changement de mon assurance emprunteur.
              Bon accompagnement dans les démarches administratives et dans le
              suivi du dossier.
            </p>
            <div>
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
            </div>
          </div>
          <div className="carouReview">
            <div className="avatarDiv">
              <BsPersonFill color="blue" size="3rem" />
              <div>
                <p className="opac75">Joseline P.</p>
                <p className="mediumOpac">17/06/2022</p>
              </div>
            </div>
            <p>
              Notre interlocuteur Qiti a rendu l'adhésion et choix très simple
              et efficace. L'application Luko est simple d'usage et intuitive.
            </p>
            <div>
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
            </div>
          </div>
          <div className="carouReview">
            <div className="avatarDiv">
              <BsPersonFill color="orange" size="3rem" />
              <div>
                <p className="opac75">Mahmoud F.</p>
                <p className="mediumOpac">18/01/2020</p>
              </div>
            </div>
            <p>
              Luko est une entreprise responsable qui se soucis de ses clients.
              Ils m'ont toujours répondu parfois même au moment où j'attendais
              pas une réponse, c'est à dire que en dehors des heures de travail.
            </p>
            <div>
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
            </div>
          </div>
          <div className="carouReview">
            <div className="avatarDiv">
              <BsPersonFill color="yellow" size="3rem" />
              <div>
                <p className="opac75">Guillaume Blondin</p>
                <p className="mediumOpac">30/05/2021</p>
              </div>
            </div>
            <p>
              Conditions et courvertures des l'assurance claires et faciles à
              comprendre. Processus de contractualisation rapide et simple.
            </p>
            <div>
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
            </div>
          </div>
          <div className="carouReview">
            <div className="avatarDiv">
              <BsPersonFill color="purple" size="3rem" />
              <div>
                <p className="opac75">Mario H.</p>
                <p className="mediumOpac">10/23/2022</p>
              </div>
            </div>
            <p>
              Résiliation de mon ancien contrat très facile, un service de
              diagnostique de mon logement aux petits oignons et un service
              client réactif : je recommande 👍{" "}
            </p>
            <div>
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
              <RiStarSFill color={background3} size="1.5rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
