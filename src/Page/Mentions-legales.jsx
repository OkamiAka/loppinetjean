import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MentionsLegales({ setNumMenu }) {
  useEffect(() => {
    document.title = `Accueil`;
    setNumMenu(0);
  }, []);
  return (
    <div class="mentions_legales">
      <div className="corps_page">
        <h1>Mentions légales</h1>
        <section>
          <h3>Éditeur</h3>
          <p>
            Ce site web est édité par : Champagne Jacquinot &amp; Fils
            <br />
            Siège : Avenue du Général de Gaulle – Zone industrielle – 51130
            VERTUS
            <br />
            Tél. : 03 26 52 12 32
            <br />
            <Link to="mailto:contact@loppinetjean.com">
              contact@loppinetjean.com
            </Link>
          </p>
          <hr />
          <h3>Crédits</h3>
          <p>
            Design et réalisation :{" "}
            <Link to="/" target="_blank">
              ***
            </Link>
            <br />
            Webmaster:
            <Link to="mailto:">***</Link>
            <br />
            Crédits photos : Image de Marque
          </p>
          <hr />
          <h3>Droits de reproduction</h3>
          <p>
            Les informations présentées sur ce site sont publiques. La
            reproduction des informations de ce site, à l’exception de
            l’iconographie, est autorisée à la condition d’en mentionner la
            source et de créer un lien sur la ou les pages de référence. Les
            informations de ce site ne peuvent en aucun cas être utilisées à des
            fins commerciales ou publicitaires.
          </p>
          <hr />
          <h3>Données personnelles</h3>
          <p>
            Lorsque des données présentes sur ce site ont un caractère
            nominatif, les utilisateurs doivent en faire un usage conforme aux
            réglementations en vigueur et aux recommandations de la Commission
            nationale de l’informatique et des libertés (CNIL). Les informations
            utilisées ne doivent l’être qu’à des fins personnelles, associatives
            ou professionnelles, toute diffusion ou utilisation à des fins
            commerciales ou publicitaires étant exclues.
          </p>
        </section>
      </div>
    </div>
  );
}
