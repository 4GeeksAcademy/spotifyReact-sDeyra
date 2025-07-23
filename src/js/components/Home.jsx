import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <div className="lista-de-canciones">
        <ul className="list-group">
          <li className="list-group-item">Canción 1</li>
          <li className="list-group-item">Canción 2</li>
          <li className="list-group-item">Canción 3</li>
        </ul>
      </div>

      <div className="footer mt-4">
        <div className="botones d-flex justify-content-center gap-2">
          <button type="button" className="btn btn-primary btn-sm">
            <i className="bi bi-skip-backward-fill"></i>
          </button>
          <button type="button" className="btn btn-secondary btn-sm">
            <i className="bi bi-play-fill"></i>
          </button>
          <button type="button" className="btn btn-primary btn-sm">
            <i className="bi bi-skip-forward-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

// Hola! primer commit
