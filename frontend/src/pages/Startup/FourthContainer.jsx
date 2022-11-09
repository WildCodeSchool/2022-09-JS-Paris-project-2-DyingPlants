import "./Startup.css";

export default function FourthContainer({ colors }) {
  const { background1, background2, background3, font1, font2 } = colors;
  return (
    <div
      className="fourthContainer"
      style={{ width: "50%", marginLeft: "auto" }}
    >
      <h3>Vous voulez savoir où va votre argent ?</h3>
      <p>
        L’assurance traditionnelle est bâtie sur un conflit d’intérêt : moins
        vous êtes remboursé, plus l’assureur gagne de l’argent. Nous avons donc
        décidé d'y mettre fin, en adoptant un modèle transparent et vertueux :
        le Giveback.
      </p>
    </div>
  );
}
