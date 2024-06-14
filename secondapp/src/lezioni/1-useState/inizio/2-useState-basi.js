import React, { useState } from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {

  //const value = useState()[0];
  //const handler = useState()[1];
  //console.log(value,handler);
  const [title, setTitle] = useState("Hello world");//destrutturo
  const changeTitle = () => {
    if (title === "Hello world") {
      setTitle("React Magic!");
    } else {
      setTitle("Hello world");
    }
  }
  return (
    <>
      <h2> {title} </h2>
      <button type="button"
        className="btn btn-info shadow"
        onClick={changeTitle}
      >
        Change me
      </button>
    </>
  );
};

export default UsoBase;
