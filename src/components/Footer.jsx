import { Link } from "react-router-dom";

import logo from "../assets/logo-blanc.svg";

import produitsSiderurgiques from "../JSON/produitsSiderurgiques.json";

export default function Footer({ setNumProduits, setNumProduit }) {
  return (
    <footer>
      <div className="info">
        <Link to="/" className="logo">
          <img src={logo} />
        </Link>
        <section className="footer_adresses_info">
          <h2>Vertus</h2>
          <address>
            <Link to="tel:0326521232">03 26 52 12 32</Link>
            <Link
              to="https://www.google.com/maps/place/Loppin+et+Jean/@48.8978772,4.0090684,582m/data=!3m1!1e3!4m6!3m5!1s0x47e943fe6f8ce4e9:0x6eb2a37db04600c4!8m2!3d48.8978772!4d4.0090684!16s%2Fg%2F1thsqq5r!5m1!1e4?authuser=0&entry=ttu"
              target="_branck"
            >
              10 Avenue du Général de Gaulle
              <br />
              Zone industrielle
              <br />
              51130 Blancs-Coteaux
              <br />
            </Link>
            <Link to="mailto:contact@loppinetjean.com">
              contact@loppinetjean.com
            </Link>
          </address>
        </section>
        <div className="footer_categories">
          <Link to="/produits-siderurgiques">
            <h2>Produits sidérurgiques</h2>
          </Link>
          <ul className="col-6 footer_liste_rubrique">
            {produitsSiderurgiques.map((produit, i) => (
              <li key={i}>
                <Link
                  to="/produits-siderurgiques#liste"
                  onClick={() => {
                    setNumProduit(0);
                    setNumProduits(i);
                  }}
                >
                  {produit}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mentions">
        <section>
          <p>© Loppin &amp; Jean 2024</p>
        </section>
        <section>
          <Link to="/mentions-legales">Mentions légales</Link>
          <p className="media"> | </p>
          <Link to="/regles-de-confidentialite">Règles de confidentialité</Link>
        </section>
      </div>
    </footer>
  );
}
