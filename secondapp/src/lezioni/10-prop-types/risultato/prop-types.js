import React from "react";
import PropTypes from "prop-types";
import { datiIncompleti } from "../../../data";
const defaultImage =
  "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg";

  // Componente principale che mappa e visualizza una lista di prodotti
const PropComponent = () => {
  return (
    <div>
      {datiIncompleti.map((el) => (
         // Per ogni elemento nei dati incompleti, rendere un componente Prodotto
        // Passa tutte le proprietà di 'el' al componente 'Prodotto' usando lo spread operator
        <Prodotto key={el.id} {...el} />
      ))}
    </div>
  );
};

// Componente figlia di PropComponent che rappresenta un singolo prodotto
const Prodotto = ({ nome, image, prezzo }) => {
  /**
   * @type {String || undefined}
   */
  const img = image && image.url;

  return (
    <article className="card shadow my-3 p-2">
      <div className="card-body">
        <img
          src={img || defaultImage}
          alt={nome || "divano default"}
          className="card-img-top"
        />
        <div className="card-text">
          <h4 className="card-title">{nome || "divano default"}</h4>
          <p className="card-subtitle">€ {prezzo || 17.99}</p>
        </div>
      </div>
    </article>
  );
};

// Definizione dei tipi di proprietà attesi per 'Prodotto'
Prodotto.propTypes = {
  nome: PropTypes.string.isRequired, // 'nome' deve essere una stringa ed è obbligatorio
  prezzo: PropTypes.number.isRequired, // 'prezzo' deve essere un numero ed è obbligatorio
  image: PropTypes.object.isRequired, // 'image' deve essere un oggetto ed è obbligatorio
};

// Proprietà di default per 'Prodotto'
Prodotto.defaultProps = {
  nome: "divano default", // Nome di default se 'nome' non viene passato come prop
  prezzo: 17.99, // Prezzo di default se 'prezzo' non viene passato come prop
};

export default PropComponent;
