import React from "react";
import useFetch from "./useFetch";
/*Questo componente esegue il fetch dei dati degli utenti da un'API al montaggio. Mostra un 
messaggio di caricamento mentre i dati vengono recuperati e, 
una volta completato il fetch, mostra un elenco di utenti con i loro nomi e numeri di telefono. 

*/
const url = "https://jsonplaceholder.typicode.com/users";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

const FetchComponents = () => {
  const { data, isLoading } = useFetch(url);
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
          <Post />
        </div>
      )}
    </div>
  );
};

const Post = () => {
  const { data, isLoading } = useFetch(postUrl);
  return (
    <div>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <div>
          {data.map((el) => {
            const { id, title, body } = el;
            return (
              <div key={id} className="users bg-white p-4 shadow rounded">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FetchComponents;
