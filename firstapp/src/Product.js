import React from 'react'
const img = "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f4936.jpg";
const Product = ({img,finalprice,name,price,children}) => {
  //GESTIONE EVENTI
  const handleClick=() =>{
    console.log("mi hai premuto");
  };
  const paramsHandler=(price) => {
    console.log(price);
  };

  const eventHandler = (price) => (e) =>{
    console.log(e.target.innerText);
    console.log(price);
  };
  return (
    <article onMouseOver={()=>console.log(finalprice)}>
      <div className="card">
        <img src={img} alt={`${name}`} onClick={handleClick} />
        <h6>{name}</h6>
        <hr />
        <p>{price}</p>
        <p>{name}</p>
        <p>{finalprice}</p>
        <button onClick={()=> alert(`nome: ${name}`)}>{finalprice}$</button>
        <button onClick={eventHandler(price)}>args</button>

      </div>
    </article>
  )
}


export default Product
