import React from "react";
import "./Startup.css";
import Header from "./Header";
import Main from "./Main";

export default function Startup() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
/*
    <div>
    <header>
    <div className="nav-container">
      <nav id="barNav">
        <span id="logo">Luko</span>
        <ul id="navBarLeftUl">
          <li>Produits</li>
          <li>Engagements</li>
          <li>Aide</li>
          <li>Avis Client</li>
        </ul>
        <ul id="navBarRight">
          <li>Mon espace personnel</li>
          <li>
            {" "}
            <button className="navButton" style={{ color: "blue" }}>Obtenir mon prix</button>
          </li>
        </ul>
      </nav>
    </div>
     
    <main style={{ width: "70%", margin: "auto" }}>
     <div className="firstContainer">
      <div style={{ width: "70%" }}>
        <h1>
          L'assurance qui vous dit tout (sur tout)
        </h1>
        <p>
          Y'a pas de loup chez Luko : des contrats clairs, des
          remboursements
          2x plus rapides, un modèle 100% digital et transparent. Comme ça, vous gagnez du temps, et de l'argent.
        </p>
    
        <div id="buttonsContainer" style={{ display: "flex" }}>
          <button className="buttonHeader" style={{ color: "black" }}>Assurance habitation</button>
          <button className="buttonHeader" style={{ color: "black" }}>Assurance emprunter</button>
          <button className="buttonHeader" style={{ color: "black" }}>Trottinettes électriques</button>
        </div>
      </div>
    </div>
    </header>

    <div style={{ width: "50%", marginLeft: "auto" }}>
      <div>
        <h3>Vous êtes entre de bonnes mains.</h3>
      </div>
    
      <div className="secondContainer">
        <div className="borderLeft" style={{ borderLeft: "2px solid" }}>
          <h3> 2 minutes, top chrono</h3>
          <p>
            Des contrats clairs et personnalisables pour assurer ce qui compte pour vous en quelques clics
          </p>
        </div>
    
        <div className="borderLeft" style={{ borderLeft: "2px solid" }}>
          <h3>7 jours sur 7</h3>
          <p>
            Toujours à vos côtés : des équipes vous répondent tous les jours (même dimanche) en moins de 100 secondes
          </p>
        </div>
    
        <div className="borderLeft" style={{ borderLeft: "2px solid" }}>
          <h3>2x plus rapide</h3>
          <p>
            Un pépin chez vous ? Vous êtes remboursé avant même d'avoir dit "ouf"
          </p>
        </div>
      </div>
    </div>
    
    <div className="devis">
      <button className="buttonHeader" style={{ color: "black" }}> Mon devis en 2 minutes </button>
    </div>
    
    <div className="thirdContainer">
      <div className="underThird">
        <h3>Nos engagements</h3>
        <p>
          Chez Luko, nous travaillons chaque jour afin de proposer un
          meilleur modèle et service d'assurance,qui soit vraiment du côté
          des assurés.
        </p>
      </div>
      <div className="underThird2">
        <h3>Un prix juste</h3>
        <p>
          Votre assurance augmente chaque année et vous ne savez pas
          pourquoi ? Chez Luko, nous nous engageons à construire une
          politique plus équitable et proposer le meilleur rapport qualité
          et prix, sur la durée
        </p>
        <h3>Un modèle transparent</h3>
        <h3>Un service 5 étoiles</h3>
      </div>
    </div>
    
    <div className="fourthContainer">
      <div className="underFourth" style={{ width: "50%", marginLeft: "auto" }}>
        <h3>Vous voulez savoir où va votre argent ?</h3>
        <p>
          L’assurance traditionnelle est bâtie sur un conflit d’intérêt :
          moins vous êtes remboursé, plus l’assureur gagne de l’argent. Nous
          avons donc décidé d'y mettre fin, en adoptant un modèle
          transparent et vertueux : le Giveback.
        </p>
    
        <div className="underFourth2">
          <div className="borderLeft" style={{ borderLeft: "2px solid" }}>
            <h3>
              30% de votre cotisation est dédié aux frais de gestion de Luko
            </h3>
            <p>Service client, gestion de sinistre, innovation, etc.</p>
          </div>
          <div className="borderLeft" style={{ borderLeft: "2px solid" }}>
            <h3>
              70% de votre cotisation est placé dans le pot commun pour tous
              les assurés.
            </h3>
            <p>
              Si vous avez un sinistre, cet argent sert à vous rembourser.
            </p>
          </div>
          <div className="borderLeft" style={{ borderLeft: "2px solid" }}>
            <h3>
              S'il reste de l'argent en fin d'année, il est reversé à
              l'association de votre choix.
            </h3>
            <p>Il ne vient pas accroitre nos profits.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="prix">
      <button className="buttonHeader" style={{ color: "black" }}>Obtenir mon prix</button>
    </div>
    
    <div className="fifthContainer">
      <div className="underFifth" style={{ width: "50%" }}>
        <h3>Plus de 400 000 assurés ont sauté le pas. Et vous ?</h3>
        <p>Ils ont confié leur foyer à Luko. Découvrez pourquoi.</p>
      </div>
      <div className="avisClients">
        <button className="buttonHeader" style={{ color: "black" }}>Lire nos autres avis clients</button>
      </div>
    </div>
    
    <div className="sixthContainer">
      <h3>Une question ? Nous sommes là pour vous.</h3>
      <div class="underSixth">
        <p>
          Nos conseillers sont disponible sur le tchat ou par mail de 8h à
          21h en semaine et de 9h à 20h le week-end pour répondre à toutes
          vos questions. Et en moyenne, ils répondent en moins de 2 minutes.
        </p>
      </div>
      <div class="underSixth2">
        <button className="button buttonHeader" style={{ color: "black" }}>Miriam Service clientMadrid, Spain</button>
        <button className="button buttonHeader" style={{ color: "black" }}>Andrea  Service client Paris, France</button>
        <button className="button buttonHeader" style={{ color: "black" }}>Yassine  Service client Paris, France</button>
        <button className="button buttonHeader" style={{ color: "black" }}>Mathilde Gestionnaire de sinistre Berlin, Germany</button>
        <button className="button buttonHeader" style={{ color: "black" }}>Patrick Chef des lapins Paris, France  </button>
      </div>
      <h3>
        <button className="button buttonHeader" style={{ color: "black" }}> {"--> J'ai une question "} </button>
      </h3>
    </div>
    
    <div className="seventhContainer">
      <h3>Déjà assuré ? Luko s'occupe de tout</h3>
      <div id="underSeventh">
        <p>
          Souscrivez en ligne en 2 minutes et nos équipes prennent le
          relais, vous garantissant un passage vers Luko sans accroc, ni
          prise de tête.
        </p>
      </div>
      <div className="underSeventh2">
        <h3>
          <button className="button buttonHeader" style={{ color: "black" }}> 1 Assurez-vous en 2 minutes sur luko.fr </button>
        </h3>
        <h3>
          <button className="button buttonHeader" style={{ color: "black" }}>
            2 Partagez-nous les informations de votre ancien contrat </button>
        </h3>
        <h3>
          <button className="button buttonHeader" style={{ color: "black" }}> 3 Luko résilie pour vous </button>
        </h3 >
        <h3>
          <button className="button buttonHeader" style={{ color: "black" }}>4 Votre contrat Luko démarre dès que l'ancien prend fin </button>
        </h3>
      </div >
    </div >
    </main >
    <footer />
    </div >
    
     */
