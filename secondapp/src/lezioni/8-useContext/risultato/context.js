import React, { useState, useContext } from "react";
import { data } from "../../../data";

/*
useContext è un hook di React che consente ai componenti funzionali di accedere al valore di un 
contesto senza dover annidare un componente consumatore. È uno dei principali hook di React e viene 
utilizzato per condividere dati tra componenti senza dover passare esplicitamente le props attraverso 
ogni livello dell'albero dei componenti.
*/

// Creiamo il contesto
const AppContext = React.createContext();

const MainComponent = () => {
  /**
   * useState per gestire lo stato 'people' che è inizializzato con i dati importati
   * @type {[[Object], Function]} People
   */
  const [people, setPeople] = useState(data);

  /**
   * Funzione per rimuovere una persona dalla lista 'people' in base all'id
   * @param {Number} id
   * @returns {undefined}
   */
  const removePeople = (id) => setPeople(people.filter((el) => el.id !== id));

  return (
    // Avvolgiamo i componenti con il provider del contesto
    // Il provider passa il valore { people, removePeople } ai componenti figli (Elenco al cui interno abbiamo Persona)
    <AppContext.Provider value={{ people, removePeople }}> 
      <div>
        <h3> Use Context Component </h3>
        <Elenco />
      </div>
    </AppContext.Provider>
  );
};

const Elenco = () => {
  // Usiamo useContext per accedere al valore del contesto fornito dal provider
  const info = useContext(AppContext);
  console.log(info);

  return (
    <div>
      {/* Iteriamo su 'people' e rendiamo un componente Persona per ogni elemento */}
      {info.people.map((el, index) => {
        return <Persona key={index} {...el} />;
      })}
    </div>
  );
};

const Persona = ({ id, name }) => {
  // Usiamo useContext per accedere alla funzione removePeople dal contesto
  const { removePeople } = useContext(AppContext);

  return (
    <div className="item shadow">
      <h5> {name} </h5>
      {/* Quando il bottone è cliccato, chiama removePeople con l'id della persona */}
      <button className="button delete-button" onClick={() => removePeople(id)}>
        {" "}
        x{" "}
      </button>
    </div>
  );
};

export default MainComponent;
