import React, { useState, useEffect } from "react";
import { rgbToHex } from '../utils/helpers'

const SingleColor = ({ rgb, type, weight }) => {

  const [message, setMessage] = useState(false);

  //per copiare valore colore negli appunti dispositivo
  const copiaColore = () => {
    navigator.clipboard.writeText(rgbToHex(...rgb))
      .then(() => setMessage(true))
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setMessage(false);
    }, 3000)
    return () => clearTimeout(timer);
  },[message]);
  
  return (
    <article
      className={`single color ${type}`} //cosi mostro che colore selezionato
      style={{ backgroundColor: rgbToHex(...rgb) }}
      onClick={copiaColore}
    >
      {" "}
      <h5>{rgbToHex(...rgb)}</h5>
      {
        message && <p>Colore copiato negli appunti</p>//se rilevato message true, colore copiato in appunti
      }
    </article>
  )
};

export default SingleColor;
