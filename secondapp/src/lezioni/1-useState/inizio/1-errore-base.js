import React from "react";
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo
const ErroreBase = () => {
  let title = "Hello";

  const changeTitle= () =>{
    title ="nuovo titolo";
    console.log(title);
  };
  return <>
    <h2>{title}</h2>
    <button type="button" 
    className="btn btn-info" 
    onClick={changeTitle}>Change me</button>
  </> //per avere una struttura piu semplice
};

export default ErroreBase;
