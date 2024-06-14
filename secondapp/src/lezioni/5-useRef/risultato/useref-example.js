import React from "react";
//useState tiene traccia dello stato di un elemento e il suo valore e aggiornarlo
//useEffect per controllare i side effect della applicazione
//useRef -> lo usiamo per interagire con il DOM
const RefExample = () => {
  // Creiamo una ref usando useRef e la inizializziamo con null
  // Questo ci permette di ottenere una referenza diretta a un elemento DOM
  const ref = React.useRef(null);
  
  // Stampiamo la ref per vedere il suo valore iniziale (null) e successivamente il valore aggiornato
  console.log(ref);

  // Funzione per gestire lo scroll
  const handleScroll = () => {
    // Controlliamo se la ref è definita e se contiene un elemento DOM
    if (!ref || !ref.current) {
      return;
    }

    // Utilizziamo il metodo scrollIntoView per scrollare l'elemento referenziato nel viewport
    //Quindi inserisco la funzione handleScroll che si attiva quando clicco su un bottone, ed essa porta la visualizzazione pagina
    //all'elemento il cui ref è {ref} (elemento referenziato)
    // Il comportamento di scroll sarà "smooth" e l'elemento sarà centrato nel viewport
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <>
      <h1>Use Ref</h1>
      <div
        className="my-5 mx-auto"
        style={{
          height: "100vh",
        }}
      >
        <button className="btn btn-info" onClick={handleScroll}>
          Scroll
        </button>
      </div>

      <div
        style={{
          height: "100vh",
        }}
      ></div>

      <h2 ref={ref}>Testo Testo</h2>
      <div
        style={{
          height: "30vh",
        }}
      ></div>
    </>
  );
};

export default RefExample;
