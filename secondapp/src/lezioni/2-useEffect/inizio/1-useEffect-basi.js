import React, { useEffect } from "react";
//sideeffect -> azione che avviene non all'interno del componente, ad esempio modifica del titolo del componente
const useEffectBasi = () => {
  const [value, setValue] = React.useState(0);

  const aumenta = () => {
    setValue((oldValue) => oldValue + 1);
  };
  if(value <1){
  useEffect(() => {
    console.log("Sono uno use effect"); //use effect dopo che viene effettuato render del componente
    if(value < 1){
    document.title = `Nessun messaggio`;
    }else{
      document.title = `Nuovo messaggio : ${value}`;
    }
  }, [value]);
}
  return (
    <div>
      <h4>Value:{value}</h4>
      <button onClick={aumenta}>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;
