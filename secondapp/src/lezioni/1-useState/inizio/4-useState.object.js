import React,{ useState } from "react";

const StateObject = () => {
    //const[name,setName]=useState('simo');
    //const[age,setAge]=useState(23);
    //const[saluto,setSaluto]=useState('ciao');
    const [persona, setPerson] = useState({
      name:"simo",
      age:23,
      saluto:"ciao"
    })

    const cambiaSaluto = () => {
      //setSaluto("Ciao ho fatto gli anni");
      //setAge(24);
      setPerson({
        age:24,
        saluto:"Ciao ho 24 anni",
      })
    }

    return <div className="item shadow">
      <div className="text-left">
        <h5>{persona.name}</h5>
        <h5>{persona.age}</h5>
        <h6>{persona.saluto}</h6>
      </div>
      <button className="button" onClick={cambiaSaluto}>
        Cambia saluto
      </button>
    </div>
};

export default StateObject;
