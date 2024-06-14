import React, { useState } from "react"; // Importiamo React e useState da React
import Gelato from "./Gelato"; // Importiamo il componente Gelato
import axios from "axios"; // Importiamo axios per effettuare richieste HTTP
import data from "../fakeData"; // Importiamo dei dati fittizi per l'app

// URL dell'API per ottenere i dati della gelateria
const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

const Menu = () => {
  // Stato per gestire il caricamento dei dati
  const [isLoading, setIsLoading] = useState(true);

  // Stato per gestire gli errori durante il fetching dei dati
  const [isError, setIsError] = useState(false);

  // Stato per mantenere tutti i prodotti
  const [prodotti, setProdotti] = React.useState(data);

  // Stato per il pulsante attivo (categoria selezionata)
  const [selected, setSelected] = useState(0);

  // Stato per i prodotti filtrati in base alla categoria
  const [filterProducts, setFilterProducts] = useState([]);

  // Stato per le categorie di prodotti
  const [categorie, setCategorie] = useState([]);

  // Funzione per filtrare i prodotti in base alla categoria selezionata
  const filtraProdotti = (categoria, index) => {
    setSelected(index); // Impostiamo il pulsante selezionato
    if (categoria === "all") {
      setFilterProducts(prodotti); // Mostriamo tutti i prodotti
    } else {
      // Filtriamo i prodotti per la categoria selezionata
      setFilterProducts(prodotti.filter(el => el.categoria === categoria));
    }
  };

  // useEffect per effettuare il fetching dei dati al primo render del componente
  React.useEffect(() => {
    (async () => {
      setIsLoading(true); // Impostiamo lo stato di caricamento a true
      setIsError(false); // Resettiamo lo stato di errore
      try {
        const response = await axios.get(url); // Effettuiamo la richiesta all'API
        setProdotti(response.data); // Impostiamo i prodotti ottenuti dalla risposta
        // Impostiamo le categorie uniche ottenute dai prodotti
        const uniqueCategories = Array.from(new Set(response.data.map(el => el.categoria)));
        uniqueCategories.unshift("all"); // Aggiungiamo "all" come prima categoria
        setCategorie(uniqueCategories);
        setFilterProducts(response.data); // Inizialmente mostriamo tutti i prodotti
        setIsLoading(false); // Impostiamo lo stato di caricamento a false
      } catch (error) {
        console.log(error); // Logghiamo l'errore
        setIsLoading(false); // Impostiamo lo stato di caricamento a false
        setIsError(true); // Impostiamo lo stato di errore a true
      }
    })();
  }, []); // L'effetto viene eseguito solo una volta al montaggio del componente

  return (
    <div className="container">
      <h4 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Le nostre scelte
      </h4>
      {!isLoading && !isError ? (
        <>
          {/* Renderizza i pulsanti delle categorie */}
          <div className="lista-categorie">
            {categorie.map((categoria, index) => (
              <button
                key={index}
                className={`btn btn-selector ${index === selected && "active"}`}
                onClick={() => filtraProdotti(categoria, index)}
              >
                {categoria}
              </button>
            ))}
          </div>
          {/* Renderizza i prodotti filtrati */}
          <div className="vetrina">
            {filterProducts.map((el) => (
              <Gelato key={el.id} {...el} />
            ))}
          </div>
        </>
      ) : !isLoading && isError ? (
        // Renderizza un messaggio di errore se c'è stato un problema con il fetching dei dati
        <h4
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          Error...
        </h4>
      ) : null}
    </div>
  );
};

export default Menu;
