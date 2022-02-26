import React, { useEffect, useState } from "react";

export const Listado = () => {
  const [listado, setListado] = useState([]);

  const obtenerUsuarios = async () => {
    try {
      const response = await fetch("35.192.83.171:3500/api/usuarios", {
        method: "GET",
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTQ2Y2Q4OGNhZDQ5YzUyYmRjYmUxNCIsInVzZXJuYW1lIjoiZGllZ29tIiwiaWF0IjoxNjQ1NTg0NDQ3LCJleHAiOjE2NDU1ODgwNDd9.L52f3qrwWNpzWHQI2DYIDjS-5PXBU8beZ9GKv9bOdZQ",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          return setListado(data.data);
        });
    } catch (e) {
      console.log("hubo un error");
      console.log(e);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div>
      <h1>Listado</h1>
      <ul>
        {listado.map((x) => {
          <li key={x.id}>{x.username}</li>;
        })}
      </ul>
    </div>
  );
};
