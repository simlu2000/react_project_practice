import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";

const ColorGrading = () => {
  const [isError, setIsError] = useState(false);
  const [selectedColor, setSelectedColor] = useState([]);
  const [colorInput, setColorInput] = useState({
    color: '',
    qty: 10, //qta colori
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (colorInput.color && colorInput.qty) {
      const { color, qty } = colorInput;
      try {
        setSelectedColor(
          new Values(color).all(Math.round(100 / parseInt(qty, 10)) * 2) //5 sfumature in totale
        );
        setColorInput({
          color: "",
          qty: 10,
        });
      } catch (error) {
        setIsError(true);
      }
    }
  };


  const handleChange = (e) => {
    if (isError) {
      setIsError(false);
    }
    const { name, value } = e.target;
    setColorInput({ //gestisce entrambi gli inputs
      ...colorInput,
      [name]: value,
    });
  };

  useEffect(() => {
    setColorInput({ qty: 10, color: "" })
    setSelectedColor(
      new Values("#1194ec").all(Math.round(100 / 10) * 2)
    );
  }, [])

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="color"
            id="color"
            value={colorInput.color}
            maxLength={7}
            onChange={handleChange}
            className="input"
          ></input>
          <input
            type="text"
            name="qty"
            id="qty"
            value="0"
            maxLength={colorInput.qty}
            max={100}
            min={5}
            step={5}
            onChange={handleChange}
            className="input"
          ></input>
        </div>
        <button className="btn btn-selector" type="submit">Create</button>
      </form>

      <section className="color-section">
        { //caricamento colori
          isError ? (
            <h4 className="section-center"> Nessun colore trovato</h4>
          ) :
            selectedColor ? (
              selectedColor.map(el => <SingleColor key={uuidv4()}  {...el} />)
            ) : (
              <h4>
                Loading...
              </h4>
            )
        }
      </section>
    </>
  )
};

export default ColorGrading;
