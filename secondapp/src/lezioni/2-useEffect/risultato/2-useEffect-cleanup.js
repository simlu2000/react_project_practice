import React, { useState, useEffect } from "react";
//use effect potrebbe essere utile anche se vogliamo tenere traccia della dimensione della finestra
const CleanUp = () => {
  /**
   * @type {[Number, Function]} Dimensione Finestra
   */
  const [size, setSize] = useState(window.innerWidth);
  
  /**
   * Modifica lo state size
   * @returns {undefined}
   */
  const dimensioneFinestra = () => {
    setSize(window.innerWidth);
  };

  /*
   * Ad ogni resize della pagina Aggiorna la state size e rimuove l'event Listener
   */
  useEffect(() => {
    window.addEventListener("resize", dimensioneFinestra);
    return () => {
      window.removeEventListener("resize", dimensioneFinestra);
    };
  });
  return (
    <div
      className='container w-75 col-6 offset-3 bg-white shadow p-4 mx-auto'
      style={{ textAlign: "center" }}
    >
      <h1> {size} </h1>
    </div>
  );
};

export default CleanUp;
