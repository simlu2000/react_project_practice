import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'
//utile nel caso in cui svuotiamo local storage
const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode"; //default
  }
};

function App() {
  //dichiarare uno state che conterrà un valore che rappresenta il tema attuale (chiaro/scuro)
  const [theme, setTheme] = useState(getFromLocalStorage()); //default


  //funzione cambio tema, da chiamare su onClick del button
  const changeTheme = () => {
    if (theme == "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };
  useEffect(() => { //al mutare del theme state, attacca una classe al nostro html
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <section className="section-center">
      <div className="container">
        <h2>DARK MODE APP</h2>
        <button className="btn" onClick={changeTheme}>
          Change mode
        </button>
        <section className="article-section">
          {//section con i dati(articoli), stampati con il metodo map
            data.map(el => (<Articolo key={el.id} {...el} />))
          }
        </section>
      </div>
    </section>
  );
}

export default App;
