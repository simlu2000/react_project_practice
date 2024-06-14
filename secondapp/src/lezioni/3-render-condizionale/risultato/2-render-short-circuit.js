import React, { useState } from "react";
//Javascript Short Circuit evaluation
//Operatore Ternario
//Una render short circuit è una espressione che ritorna un valore in base allo stato di una costante o una variabile, return fatto in base a se è t/f
/*
  ESEMPI:
  const[parola,setParola] = useState["Sono una parola"];
  //1)short circuit evaluation con OR :
  const esempio1 = parola || "sono un esempio"; //se faccio return mi verrà dato "sono una parola". Ma se parola fosse vuoto (=falsy), mi verrebbe dato "sono un esempio"

  //2)short circuit evaluation con AND :
  const esempio2 = parola && "ho un valore"; //non avrei nessun return se lo use state fosse nullo. Ma se metto !parola ottengo "ho un valore" 

  //3) OPERATORE TERNARIO (per semplificare gli if statement)
   const esempio2 = parola === "valore" ? "sono vero" : "sono falso"; //i due punti sono l'else

  */
const ShortRender = () => {
  /**
   * @type {[String, Function]} State della parola
   */
  const [parola, setParola] = useState("Sono una Parola");

  /**
   * @type {[Boolean, Function]} Toggle State
   */
  const [toggle, setToggle] = useState(false);
  //const esempio = parola || "sono un esempio";
  return (
    <div>
      <h2>{parola || "Uso un Esempio se non è inserito un valore"}</h2>
      {/* {toggle ? "vero" : "falso"} */}
      {toggle ? (
        <h2 className="text-success"> Vero </h2>
      ) : (
        <h5 className="text-danger"> Falso</h5>
      )}
      <button className="button" onClick={() => setToggle(!toggle)}>
        {" "}
        {toggle ? "falso" : "vero"}{" "}
      </button>
    </div>
  );
};

export default ShortRender;
