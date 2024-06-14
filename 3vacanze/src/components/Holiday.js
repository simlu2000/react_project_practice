import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
//url dati
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
  //definiamo lo state
  const [data, setData] = useState([]);
  const [selected,setSelected]=useState(0); //restituire elem indice 0

  //funzione per scegliere prossimo valore di selected e la prossima pagina
  const nextHoliday = () => {
    setSelected(prevValue => {
      if(prevValue + 1 === data.data.length){ //se siamo arrivati all'ultimo
        return 0; //torniamo al primo
      }
      else{
        return prevValue+1; //altrimenti non siamo alla fine e vado avanti
      }
    }); //+1 cosi va al successivo dell'attuale
  };


  //funzione precedente
  const prevHoliday= () => {
    setSelected(prevValue => {
      if(prevValue - 1 < 0){
        return(data.data.length- 1);
      }else{
        return prevValue-1;
      }
    })
  }

  //funzione che fetcha dati dalla API
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data); //data ovvero l'intero oggetto
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  //return condizionale per controllare di aver risolto la promise
  /*if(data.success){ //promise soddisfatta
    return <div>Vacanza</div>
  }else{//non soddisfatta
    return <h2>Loading</h2>
  }
  return <div>Vacanza</div>;
  */

  //meglio usare operatore ternario per controllare numero di vacanze:
  if(data.success){
    return <>
    {
      //se > 0 ok, altrimenti no
      data.data.length > 0 ?(
         <SingleHoliday {...data.data[selected]} next={nextHoliday} prev={prevHoliday}/>)
          : ( <h4>No vacanze</h4>
      )
    }
    </>
  } else{
    return <h2>...Loading</h2>
  }
};

export default Holiday;
