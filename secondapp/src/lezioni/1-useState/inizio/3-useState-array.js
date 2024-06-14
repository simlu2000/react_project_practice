import React, { useState } from "react";
import { data } from '../../../data';

const ArrayState = () => {
  const [people, setPeople] = useState(data);
  
  const removeItem = (id) => {
    let newPeople = people.filter(el => el.id !== id);
    setPeople(newPeople)
  }
  return (
    <>
      {
        people.map(el => {
          //associo id e name all'elem attuale
          const { id, name } = el //stiamo passando all'interno di ogni elemento dell'array , destrutturiamo tutti gli elementi nel momento in cui passiamo attraverso di loro
          return (
            <div key={id} className="item shadow">
              <h5>{name}</h5>
              <button type="button" className="button delete-button"
                onClick={() => removeItem(id)}>
                X
              </button>

            </div>
          )
        })
      }
    </>
  );
};

export default ArrayState;
