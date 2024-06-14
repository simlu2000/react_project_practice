import React from "react";

// Definisce un componente funzionale chiamato ErroreBase
const ErroreBase = () => {
  /**
   * @type {String} titolo
   * Definisce una variabile di tipo stringa chiamata titolo e le assegna il valore iniziale "Hello world!"
   */
  let titolo = "Hello world!";

  /**
   * Funzione che modifica il contenuto della variabile titolo
   * @returns {undefined}
   */
  const cambiaTitolo = () => {
    // Cambia il valore di titolo a "nuovo titolo"
    titolo = "nuovo titolo";
    // Stampa il nuovo valore di titolo nella console
    console.log(titolo);
  };

  // Ritorna il JSX del componente
  return (
    <React.Fragment>
      {/* Mostra il valore attuale di titolo in un elemento h2 */}
      <h2>{titolo}</h2>
      {/* Definisce un bottone che, quando cliccato, esegue la funzione cambiaTitolo */}
      <button
        type="button"
        className="btn btn-info my-3"
        onClick={cambiaTitolo}
      >
        {" "}
        Change Me{" "}
      </button>
    </React.Fragment>
  );
};

// Esporta il componente ErroreBase come predefinito
export default ErroreBase;
