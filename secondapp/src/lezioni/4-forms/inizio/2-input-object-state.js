import React, { useEffect, useState } from "react";

//devo interagire con i valori mandati dalla compilazione form, uso quindi gli useState
//i dati verranno poi stampati usando {nome}, {email}, {cellulare}
const ControlledInput = () => {
  const [nome, setNome] = useState(""); //ne faccio uno per ogni campo di dato
  const [email, setEmail] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [persone, setPersone] = useState([]); //tutte le persone -> array

  const handleSumbit = (e) => {
    e.preventDefault(); //impedisce caricamento pagina al submit del form
    setPersone([ //per asegnare dati inviati a persona -> nuova persona registrata
      ...persone,
      {
        id: persone.length + 1,
        nome,
        email,
        cellulare,
      },
    ]);
    setNome("");
    setEmail("");
    setCellulare("");
  };

  useEffect(() => { //ogni volta che aggiorneremo l'array persona, lo useEffect manda un log
    const { log } = console;
    log(persone);
  }, [persone]);
  
  return (
    <form className='bg-white shadow p-4' onSubmit={(e) => handleSumbit(e)}>
      <div className='form-group d-flex align-items-center container mt-2'>
        <label htmlFor='nome' className='text-left font-weight-bold col-2'>
          {" "}
          Nome:{" "}
        </label>
        <input
          type='text'
          id='nome'
          name='nome'
          className='form-control'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className='form-group d-flex align-items-center container mt-2'>
        <label htmlFor='email' className='text-left font-weight-bold col-2'>
          {" "}
          Email:{" "}
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group d-flex align-items-center container mt-2'>
        <label htmlFor='cellulare' className='text-left font-weight-bold col-2'>
          {" "}
          Cellulare:{" "}
        </label>
        <input
          type='tel'
          id='cellulare'
          name='cellulare'
          className='form-control'
          value={cellulare}
          onChange={(e) => setCellulare(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-info mt-4'>
        {" "}
        Invia
      </button>
    </form>
  );
};

export default ControlledInput;
