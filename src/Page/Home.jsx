import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

import Img from "../assets/Produits Sidérurgiques.webp";

export default function Home({ setNumMenu }) {
  useEffect(() => {
    document.title = `Accueil`;
    setNumMenu(1);
  }, []);

  const [VideoBLM, setVideoBLM] = useState(false)

  return (
    <div className="home">
      <div class="container-titre">
			    <h1><span>Produits</span>
          <br/>Sidérurgiques</h1>

		        <button onClick={()=>setVideoBLM(true)} href="https://www.youtube.com/watch?v=9ELpNmuW52s" class="pastille">
			        <MdOutlineSlowMotionVideo size={'3rem'} />{" "}LASERTUBE (LT8.20)</button>

          <video playsinline="" autoplay="true" loop="true" muted="true" poster="https://www.loppinetjean.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/cochetconcept/video/BG-video.jpg.webp" id="bgvid">
			        <source src="https://www.loppinetjean.com/wp-content/themes/cochetconcept/video/BG-loppin-jean.mp4" type="video/mp4"/>
			    </video>
		    </div>
      {VideoBLM&&
      <div className="videoBlm" onClick={()=>setVideoBLM(false)}>
              <ReactPlayer
              url="https://www.youtube.com/watch?v=9ELpNmuW52s"
              controls
              playing
              muted
              onEnded={()=>setVideoBLM(false)}
              width={"60%"}
              height={"70.5%"}
              />
			    </div>
        }
      <section>
        <h2>
          Produits{" "}
          <Link to="/produits-siderurgiques" className="blackLink">
            <span>sidérurgiques</span>
          </Link>
        </h2>
        <div className="row">
          <img src={Img} alt="Accueil" />
          <div>
            <p>
              Présent depuis plus de 100{" "}
              {/* {new Date().getFullYear() - new Date("01/01/1925").getFullYear()}{" "} */}
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
              stockage à plus de 35 000m² dont 23.000 m² couvert.
              <br />
              Ces investissements permettent d’avoir aujourd’hui deux lignes de
              coupe ainsi qu’une ligne de grenaillage et un lasertube. Avec sa
              propre flotte et des partenariats avec des transporteurs, ce sont
              plus de 12 semi-remorques de 38T qui livrent journellement sa zone
              de chalandise.
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
