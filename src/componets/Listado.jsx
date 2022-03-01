import React, { useEffect, useState } from "react";
import "./Styles/Styles.css";

export const Listado = () => {
  const [listado, setListado] = useState([]);
  const [boton, setBoton] = useState(false);
  const token = sessionStorage.getItem("tokenUsuario");

  useEffect(() => {
    if (boton === true) {
      if (token === null) {
        setBoton(false);
        return alert("No se ha registrado, se debe registrar primero");
      }
      buscar();
    }
  }, [boton]);

  const buscar = async () => {
    try {
      const response = await fetch("http://35.192.83.171:3500/api/usuarios", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
        .then((response) => response.json())
        .then((data) => setListado(data.data));
      setBoton(false);
    } catch (e) {
      console.log("hubo un error");
      console.log(e);
    }
  };

  return (
    <div>
      <div className="contenBoton">
        <button type="button" className="boton" onClick={() => setBoton(true)}>
          Mostrar Usuarios
        </button>
      </div>

      <h1>Listado</h1>

      <div className="contenedorlistado">
        <ul>
          {listado.map((x) => (
            <li key={x.id}>
              {x.nombre}
              {"_________"} {x.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
