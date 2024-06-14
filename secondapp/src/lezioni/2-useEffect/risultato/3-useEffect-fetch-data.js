import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.github.com/users";
//1 dichiaro usaestate
//2 funzione per fetchare dati con richiesta get
//3 settato il nuovo state prendo l'array di oggett i che ci viene dato come risposta in data
//4 chiamato funzione nello useeffect, perche puo avere al suo interno chiamate asincrone
//5 dichiarato secondo parametro use effect con array vuoto che comunica di eseguire use effct soltanto al primo render
const FetchComponent = () => {
  /**
   * @type {[[Object], Function]} Lista di User
   */
  const [users, setUsers] = useState([]);

  /**
   * Fetcha i fati utilizzando la libreria axios
   * Inserisce i valori all'interno dello state
   * @returns {undefined}
   */
  const getData = async () => {
    const response = await axios.get(url);
    setUsers(response.data);
  };

  //Fetcha i dati solo al primo render
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Fetch Component</h1>
      <ul className="users">
        {users.map((el) => {
          const { login, id, avatar_url: img, html_url } = el;
          return (
            <li key={id} className="shadow">
              <img src={img} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}> Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchComponent;
