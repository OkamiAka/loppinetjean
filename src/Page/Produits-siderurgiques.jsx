import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GrCatalogOption } from "react-icons/gr";

//Étirés
import Etires from "../assets/image/produits-siderurgiques/Étirés/Étirés.webp";

//Tôles
import TolesDSK from "../assets/image/produits-siderurgiques/Tôles/TôlesDKP.webp";
import TolesGALVA from "../assets/image/produits-siderurgiques/Tôles/TôlesGALVA.webp";
import TolesLAC from "../assets/image/produits-siderurgiques/Tôles/TôlesLAC.webp";
import TolesALU from "../assets/image/produits-siderurgiques/Tôles/TôlesALU.webp";
import TolesPERFOREES from "../assets/image/produits-siderurgiques/Tôles/TôlesPERFORÉES.webp";

import TOLES from "../assets/PDF/TOLES.pdf";
import POUTRELLES from "../assets/PDF/POUTRELLES.pdf";
import PRODUITS_BETON from "../assets/PDF/PRODUITS_BETON.pdf";
import COUVERTURE_BARDAGE from "../assets/PDF/COUVERTURE_BARDAGE.pdf";
import METALLERIE from "../assets/PDF/METALLERIE.pdf";

import produitsSiderurgiques from "../JSON/produitsSiderurgiques.json";

export default function ProduitsSiderurgiques({
  setNumMenu,
  numProduits,
  setNumProduits,
  numProduit,
  setNumProduit,
}) {
  const produitsSiderurgiquesData = [
    [
      {
        name: "Étirés",
        img: Etires,
        lien: "261064790",
        style: { width: "13rem", height: "10.1rem" },
      },
    ],
    [
      {
        name: "Tôles DSK",
        img: TolesDSK,
        lien: "0",
        style: { width: "28rem", height: "36.1rem" },
      },
      {
        name: "Tôles GALVA",
        img: TolesGALVA,
        lien: "2112451270",
        style: { width: "28rem", height: "35.1rem" },
      },
      {
        name: "Tôles LAC",
        img: TolesLAC,
        lien: "2025624163",
        style: { width: "33rem", height: "86.1rem" },
      },
      {
        name: "Tôles ALU",
        img: TolesALU,
        lien: "1417040486",
        // style: { width: "28rem", height: "35.1rem" },
      },
      {
        name: "Tôles PERFORÉES",
        img: TolesPERFOREES,
        lien: "705984785",
        // style: { width: "28rem", height: "35.1rem" },
      },
    ],
  ];

  useEffect(() => {
    document.title = `Produits siderurgiques`;
    setNumMenu(3);
    sessionStorage.removeItem("numProduits");
  }, []);

  return (
    <div className="produits-siderurgiques">
      <section className="description">
        <h1>
          Produits
          <br />
          <span>sidérurgiques</span>
        </h1>
        <p>
          Depuis toujours, <strong>Loppin &amp; Jean</strong>&nbsp;s’est fixé
          pour objectif de vous satisfaire dans toutes vos demandes de{" "}
          <strong>
            produits ferreux, aluminium, inox et accessoires tels que le métal
            déployé, grillage…{" "}
          </strong>
          Son développement en Champagne Ardenne et dans tout le quart Nord-Est
          de la France et sa notoriété se fondent sur sa capacité à être pour
          vous un réel partenaire à la hauteur de vos projets.
        </p>
        <p>
          Disponibilité, avec 23 000 m² et 12 000 tonnes de stockage ACIERS, 18
          ponts roulants.
        </p>
        <p>Réactivité, avec 12 camions semis.</p>
      </section>
      <a href="#liste">
        <section id="liste" className="liste">
          {produitsSiderurgiques.map((produit, i) => (
            <button
              onClick={() => {
                setNumProduit(0);
                setNumProduits(i);
              }}
              key={i}
            >
              {produit}
            </button>
          ))}
        </section>
      </a>
      {produitsSiderurgiquesData[numProduits] && (
        <section className="affichage">
          <div className="produits">
            {produitsSiderurgiquesData[numProduits].map((produit, index) => (
              <button
                className={`produit ${numProduit === index && "selection"}`}
                onClick={() => setNumProduit(index)}
                key={index}
              >
                <img src={produit.img} />
                <p>{produit.name}</p>
              </button>
            ))}
          </div>
          <iframe
            src={`https://docs.google.com/spreadsheets/u/0/d/1HReW71g23BrhF4TRanLMBzaYWKs-PlXcFT5WNmy8e6c/pubhtml/sheet?headers=false&gid=${produitsSiderurgiquesData[numProduits][numProduit].lien}`}
            style={produitsSiderurgiquesData[numProduits][numProduit].style}
          ></iframe>
        </section>
      )}
      <section className="catalogues">
        <h2>Catalogues</h2>
        <section className="PDFListe">
          <Link to={TOLES} target="_blank">
            <GrCatalogOption className="ico" />
            TÔLES
            <br />
            PDF
          </Link>
          <Link to={POUTRELLES} target="_blank">
            <GrCatalogOption className="ico" />
            LAMINES POUTRELLES
            <br />
            PDF
          </Link>
          <Link to={PRODUITS_BETON} target="_blank">
            <GrCatalogOption className="ico" />
            PRODUITS BÉTON
            <br />
            PDF
          </Link>
          <Link to={COUVERTURE_BARDAGE} target="_blank">
            <GrCatalogOption className="ico" />
            COUVERTURE BARDAGE
            <br />
            PDF
          </Link>
          <Link to={METALLERIE} target="_blank">
            <GrCatalogOption className="ico" />
            METALLERIE
            <br />
            PDF
          </Link>
        </section>
      </section>
    </div>
  );
}
