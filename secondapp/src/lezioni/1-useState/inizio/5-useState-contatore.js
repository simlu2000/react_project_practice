import React, { useState } from "react";

const CounterComponent = () => {
  const [cont, setCont] = useState(0);
  const reset = () => {
    setCont(0);
  };

  const diminuisci = () => {
    setCont(cont - 1);
  }
  const aumenta = () => {
    /*setCont((oldValue) => {
      if(oldValue + 1 === 5){
        return oldValue;
      }
      return oldValue+1;
    })*/
    setTimeout(function () {
      setCont((oldValue) => {
        return oldValue +1;
      });
    }, 2000);

  };

  return (
    <div>
      <h3>{cont}</h3>
      <div className="d-flex justify-content-between">
        <button className="button my-2" onClick={() => diminuisci}>Diminuisci</button>
        <button className="button my-2" onClick={aumenta}>Aumenta</button>

      </div>
      <button className="button reset-button my-2" onClick={reset}>Resetta</button>

    </div>
  );
};

export default CounterComponent;
