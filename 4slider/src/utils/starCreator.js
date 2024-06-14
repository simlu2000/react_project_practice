// Importazione di icone di stelle piene, mezze stelle e stelle vuote dalla libreria react-icons.
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

/**
 * Funzione che crea un array di componenti di icone di stelle in base a un numero di valutazione fornito.
 * @param {number} num - Il numero di valutazione, che può essere un numero intero o decimale (ad esempio, 3.5).
 * @returns {Array} Un array di componenti di icone di stelle (<BsStarFill>, <BsStarHalf>, <BsStar>).
 */
const starCreator = (num) => {
  // Creazione di un array di 5 elementi, utilizzando Array.from e il callback map.
  return Array.from({ length: 5 }, (_, index) => {
    // Se il numero di valutazione è maggiore o uguale all'indice + 1, viene restituita una stella piena.
    if (num >= index + 1) {
      return <BsStarFill key={index} className="star" fill="#fca903" />;
      // Se il numero di valutazione è maggiore o uguale all'indice + 0.5, ma inferiore a indice + 1, viene restituita una mezza stella.
      //ad esempio 0.6, viene data stella.5
    } else if (num >= index + 0.5) {
      return <BsStarHalf key={index} className="star" fill="#fca903" />;
      // Se il numero di valutazione è inferiore all'indice + 0.5, viene restituita una stella vuota.
      //ad esempio stella.3  
    } else {
      return <BsStar key={index} className="star" fill="#fca903" />;
    }
  });
};

// Esportazione della funzione starCreator come default export del modulo.
export default starCreator;
