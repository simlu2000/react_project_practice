import React from "react";
//useReducer  fornisce una soluzione alternativa a useState per la gestione dello stato in un componente 
//funzionale, specialmente quando lo stato è complesso e richiede una logica di aggiornamento articolata. 
//È simile al concetto di reducer che si trova in Redux.
const Modal = ({ modalContent, modalState, chiudiModal }) => {
  return (
    <section className={`modal-section ${modalState ? "show-modal" : ""}`}>
      <div className="container modal-content">
        <h4>{modalContent || "Sono un Modal"}</h4>
        <button className="button delete-button" onClick={chiudiModal}>
          x
        </button>
      </div>
    </section>
  );
};

export default Modal;
