export default function Footer({ colors }) {
  const { background1, background2, background3, background4, font1, font2 } =
    colors;

  return (
    <div style={{ backgroundColor: background1, color: font1 }}>
      <div id="footerContainerInnerDiv">
        <div>
          <p id="logoFooter">Luko</p>
          <p
            className="mediumOpac "
            style={{ fontSize: "1rem", marginTop: ".7rem" }}
          >
            hello@luko.eu
          </p>
          <p className="mediumOpac " style={{ fontSize: "1rem" }}>
            91 rue du Faubourg Saint-Honoré 75008 Paris
          </p>
        </div>
        <div>
          <p className="topCategoryFooter mediumOpac">Produits</p>
          <p style={{ marginTop: 0 }}>Assurance habitation</p>
          <p>Assurance propriétaire non-occupant</p>
          <p>Assurance habitation colocation</p>
          <p>Assurance trottinette électrique</p>
          <p>Assurance emprunteur</p>
          <p>Avis clients Luko</p>
          <p>Foire aux questions</p>
        </div>
        <div>
          <p className="topCategoryFooter mediumOpac">Services</p>
          <p style={{ marginTop: 0 }}>Résiliation ancien contrat</p>
          <p>Remboursements ultra rapides</p>
          <p>Services réparation & rénovation</p>
          <p>Comprendre l'assurance</p>
          <p>Attestation de télétravail</p>
          <p>Luko × Netatmo</p>
          <p>Avantages exclusifs</p>
          <p>Parrainez vos proches</p>
        </div>
        <div>
          <p className="topCategoryFooter mediumOpac">Plus sur Luko</p>
          <p style={{ marginTop: 0 }}>Équipe et mission</p>
          <p>Blog</p>
          <p>Espace presse</p>
          <p>Contactez-nous</p>
          <p>Devenir partenaire</p>
          <p>Rejoignez-nous, on recrute !</p>
          <p>Gérer les cookies</p>
          <p>Utilisation des cookies</p>
          <p>Politique de confidentialité</p>
          <p>Mentions légales</p>
          <p>CGU</p>
        </div>
      </div>
    </div>
  );
}
