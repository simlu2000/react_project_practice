import React, { useEffect, useState } from "react";
const postUrl = "https://jsonplaceholder.typicode.com/posts";
/*Questo componente esegue il fetch dei dati degli utenti da un'API al montaggio. Mostra un 
messaggio di caricamento mentre i dati vengono recuperati e, 
una volta completato il fetch, mostra un elenco di utenti con i loro nomi e numeri di telefono. 

*/

// URL dell'API da cui verranno recuperati i dati degli utenti
const url = "https://jsonplaceholder.typicode.com/users";

// Component principale che esegue il fetch dei dati
const FetchComponents = () => {
  // Stato per memorizzare i dati recuperati
  const [data, setData] = useState([]);
  
  // Stato per gestire lo stato di caricamento
  const [isLoading, setIsLoading] = useState(true);

  // useEffect per eseguire il fetch dei dati al montaggio del componente
  useEffect(() => {
    // Funzione asincrona auto-invocante per recuperare i dati
    (async () => {
      setIsLoading(true); // Imposta lo stato di caricamento a true
      try {
        // Esegui la richiesta fetch all'API
        const response = await fetch(url);
        // Converte la risposta in formato JSON
        const data = await response.json();
        // Aggiorna lo stato con i dati recuperati
        setData(data);
      } catch (error) {
        // In caso di errore, stampa l'errore nella console
        console.log(error);
      }
      // Imposta lo stato di caricamento a false perche tutto ok e finito di caricare dati
      setIsLoading(false);
    })();
  }, []); // Array vuoto significa che l'effetto viene eseguito solo al montaggio

  return (
    <div>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <div>
          {data.map((el) => {
            const { id, name, phone } = el;
            return (
              <div key={id} className="users bg-white p-4 shadow rounded">
                <h3>{name}</h3>
                <h5>{phone}</h5>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FetchComponents;
