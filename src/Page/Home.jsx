import { useEffect } from "react";
import { Link } from "react-router-dom";

import Img from "../assets/Produits Sidérurgiques.webp";

export default function Home({ setNumMenu }) {
  useEffect(() => {
    document.title = `Accueil`;
    setNumMenu(1);
  }, []);
  return (
    <div className="home">
      <section>
        <h2>
          Produits <span>sidérurgiques</span>
        </h2>
        <div className="row">
          <img src={Img} alt="Accueil" />
          <div>
            <p>
              Présent depuis{" "}
              {new Date().getFullYear() - new Date("01/01/1925").getFullYear()}{" "}
              ans, Loppin et Jean est aujourd’hui une entreprise incontournable
              du Grand Est. D’une petite quincaillerie fondée en 1924, Loppin et
              Jean est devenue l’un des trois plus importants négoces
              INDÉPENDANTS français pour la distribution des produits
              sidérurgiques.
            </p>
            <p>
              Loppin et Jean rayonne ainsi sur l’ensemble de la région Grand
              Est, de la région Parisienne, du nord de la Bourgogne et des Hauts
              de France. Implantée à Vertus sur 4.5 hectares, les
              investissements réalisés en 2019-2020 ont porté sa capacité de
              stockage à plus de 23 000m².
              <br />
              Ces investissements permettent d’avoir aujourd’hui deux lignes de
              coupe ainsi qu’une ligne de grenaillage. Avec sa propre flotte et
              des partenariats avec des transporteurs, ce sont plus de 12
              semi-remorques de 38T qui livrent journellement sa zone de
              chalandise.
            </p>
            <p>
              Sur un marché mature, les critères de gamme, de disponibilité,
              capacité de transformations, de réactivité et de professionnalisme
              sont les gages de la pérennité du négoce.
            </p>
            <p>
              Loppin &amp; Jean s’efforce, depuis sa création, d’être à l’écoute
              de ses clients et de son marché. Tous les collaborateurs (trices)
              se mobilisent chaque jour pour apporter une solution à leurs
              clients.
            </p>
            <p>
              <Link to="/produits-siderurgiques">Gamme/Stock</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
