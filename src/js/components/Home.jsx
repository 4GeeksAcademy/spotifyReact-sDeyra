import React, { useEffect, useRef, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [lista, setLista] = useState([])
  const cancionActiva = useRef()

  const obtenerCanciones = async () => {
    try {
      const response = await fetch("https://playground.4geeks.com/sound/songs")
      console.log(response)
      const data = await response.json()
      console.log(data.songs)
      setLista(data.songs)
    } catch (error) {
      console.log(error)
    }
  }

  function reproduce(urlCancion) { //concatena la url base con la urla de la cancion//
    let urlBase = "https://playground.4geeks.com"
    cancionActiva.current.src = urlBase.concat(urlCancion)
    cancionActiva.current.play() // cuando tenemos el usl la ejecuta//
  }

  useEffect(() => {
    obtenerCanciones()
  }, []) // SE EJECUTA UNA SOLA VEZ //


  return (
    <div className="text-center">
      <h1>Audio Player</h1>
      <div className="lista-de-canciones container">
        <ul className="list-group">
          {lista.map((cancion) => ( // () = return, para mostar la informacion de una estado que sea un array//
            <li
              key={cancion.id} // pos cada map poner un key//
              className="list-group-item"
              value={cancion} 
              onClick={() => reproduce(cancion.url)}
            >
              {cancion.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer mt-4">
        <audio controls ref={cancionActiva}>
          <source src={cancionActiva} type="audio/mp3"/> 
        </audio>
        {/* <div className="botones d-flex justify-content-center gap-2">
          <button type="button" className="btn btn-primary btn-sm">
            <i className="bi bi-skip-backward-fill"></i>
          </button>
          <button type="button" className="btn btn-secondary btn-sm">
            <i className="bi bi-play-fill"></i>
          </button>
          <button type="button" className="btn btn-primary btn-sm">
            <i className="bi bi-skip-forward-fill"></i>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;

// Hola! primer commit
