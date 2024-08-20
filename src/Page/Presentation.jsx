import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Presentation({ setNumMenu }) {
  useEffect(() => {
    document.title = `Présentation`;
    setNumMenu(2);
  }, []);
  return (
    <div className="presentation">
      <section className="histoire">
        <div className="date">
          <h1>
            {new Date().getFullYear() - new Date("01/01/1925").getFullYear()}{" "}
            ANS
          </h1>
          <h1>D'HISTOIRE</h1>
          <h3>
            <p>Depuis 1924</p>
          </h3>
        </div>
        <div className="presentationText">
          <h3>
            La société Loppin &amp; Jean
            <br />a été <strong>fondée en 1924</strong>.
          </h3>
          <p>
            Exerçant à l’origine essentiellement une activité de quincaillerie,
            la société <strong>Loppin &amp; Jean</strong> a su rapidement
            étendre ses domaines de compétences, pour prendre un véritable essor
            vers la fin des années 1970.
          </p>
          <p>
            C’est à cette époque que Monsieur Frédéric JEAN, actuel Président
            intègre la société aux cotés de son père, Monsieur Michel JEAN.
          </p>
        </div>
      </section>
      <section className="chiffres">
        <h1>
          Quelques <br />
          <span>chiffres</span>
        </h1>
        <div className="row">
          <div className="col-2">
            <div className="chiffre_prefixe">Since </div>
            <div className="chiffre_chiffre pictodate">
              <span className="taille_chiffres_defaut">1924</span>
            </div>
            <div className="chiffre_descriptif">
              Date de création
              <br />
              1924
            </div>
          </div>
          <div className="col-2">
            <div className="chiffre_prefixe"></div>
            <div className="chiffre_chiffre pictochiffreaffaire">
              <span className="taille_chiffres_deux">53</span>
              M€
            </div>
            <div className="chiffre_descriptif">
              Chiffre d’affaire <br />
              53 millions d’euros
            </div>
          </div>
          <div className="col-2">
            <div className="chiffre_prefixe"></div>
            <div className="chiffre_chiffre pictosalaries">
              <span className="taille_chiffres_deux">80</span>
            </div>
            <div className="chiffre_descriptif">
              80
              <br />
              salariés
            </div>
          </div>
          <div className="col-2">
            <div className="chiffre_prefixe"></div>
            <div className="chiffre_chiffre localisation">
              <span className="taille_chiffres_trois">400</span>
              km
            </div>
            <div className="chiffre_descriptif">
              Rayon d’action <br />
              400 km
            </div>
          </div>
        </div>
      </section>
      <section className="produits-siderurgiques">
        <h1>
          Produits{" "}
          <Link to="/produits-siderurgiques" className="blackLink">
            sidérurgiques
          </Link>
        </h1>
        <div className="row">
          <div className="col-2">
            <div className="chiffre_prefixe"></div>
            <div className="chiffre_chiffre surface">
              <span className="taille_chiffres_defaut">23 000</span>
              M²
            </div>
            <div className="chiffre_descriptif">
              Surface produits sidérurgiques
              <br />
              20.000 m²
            </div>
          </div>
          <div className="col-2">
            <div className="chiffre_prefixe"></div>
            <div className="chiffre_chiffre stock">
              <span className="taille_chiffres_defaut">12 000</span>t
            </div>
            <div className="chiffre_descriptif">
              Stock
              <br />
              12 000 tonnes
            </div>
          </div>
          <div className="col-2">
            <div className="chiffre_prefixe"></div>
            <div className="chiffre_chiffre pont">
              <span className="taille_chiffres_deux">18</span>
            </div>
            <div className="chiffre_descriptif">18 ponts roulants </div>
          </div>
          <div className="col-2">
            <div className="chiffre_prefixe"></div>
            <div className="chiffre_chiffre scie">
              <span className="taille_chiffres_un">3</span>
            </div>
            <div className="chiffre_descriptif">3 scies automatiques </div>
          </div>
          <div className="col-2">
            <div className="chiffre_prefixe"></div>
            <div className="chiffre_chiffre">
              <span className="taille_chiffres_un">1</span>
            </div>
            <div className="chiffre_descriptif">1 Grenailleuse </div>
          </div>
        </div>
      </section>
    </div>
  );
}
