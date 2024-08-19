import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo-blanc.svg";

export default function Nav({ numMenu }) {
  const [openClose, setOpenClose] = useState(false);

  const openMenu = () => {
    setOpenClose(!openClose);
  };

  return (
    <nav className={`navBar ${openClose && "menuOpen"}`}>
      <Link to="/" className="navBar_logo">
        <img src={logo} />
      </Link>
      <ul className="navBar_links">
        <img src={logo} className="logoBurger" />
        <li className="navBar_item efect2">
          <Link
            to="/"
            className={`navBar_link ${numMenu === 1 && "acti"}`}
            onClick={() => setOpenClose(false)}
          >
            Accueil
          </Link>
        </li>
        <li className="navBar_item efect2">
          <Link
            to="presentation"
            className={`navBar_link ${numMenu === 2 && "acti"}`}
            onClick={() => setOpenClose(false)}
          >
            Présentation
          </Link>
        </li>
        <li className="navBar_item efect3">
          <Link
            to="/produits-siderurgiques"
            className={`navBar_link ${numMenu === 3 && "acti"}`}
            onClick={() => setOpenClose(false)}
          >
            Produits sidérurgiques
          </Link>
        </li>
        <li className="navBar_item efect4">
          <Link
            to=""
            className="navBar_link"
            onClick={() => setOpenClose(false)}
          >
            Parachèvement
          </Link>
        </li>
        <li className="navBar_item efect5">
          <Link
            to=""
            className="navBar_link"
            onClick={() => setOpenClose(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <button
        className={`navBar_burger ${
          openClose ? "navBar_burger_open" : "navBar_burger_close"
        }`}
        onClick={openMenu}
      >
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}
