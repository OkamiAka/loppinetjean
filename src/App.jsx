import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./Page/Home";
import Presentation from "./Page/Presentation";
import ProduitsSiderurgiques from "./Page/Produits-siderurgiques";
import MentionsLegales from "./Page/Mentions-legales";
function App() {
  const [numMenu, setNumMenu] = useState(0);
  const [numProduits, setNumProduits] = useState(false);
  const [numProduit, setNumProduit] = useState(0);
  return (
    <div>
      <Nav numMenu={numMenu} />
      <Routes>
        <Route path="/" element={<Home setNumMenu={setNumMenu} />} />
        <Route
          path="/presentation"
          element={<Presentation setNumMenu={setNumMenu} />}
        />
        <Route
          path="/produits-siderurgiques"
          element={
            <ProduitsSiderurgiques
              setNumMenu={setNumMenu}
              numProduits={numProduits}
              setNumProduits={setNumProduits}
              numProduit={numProduit}
              setNumProduit={setNumProduit}
            />
          }
        />
        <Route
          path="/mentions-legales"
          element={<MentionsLegales setNumMenu={setNumMenu} />}
        />
        <Route path="/regles-de-confidentialite" element="(+_+)?" />
        <Route path="*" element="`(*>﹏<*)′" />
      </Routes>
      <Footer setNumProduits={setNumProduits} setNumProduit={setNumProduit} />
    </div>
  );
}

export default App;
