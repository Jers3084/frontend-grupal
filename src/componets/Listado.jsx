import React, { useState } from 'react'

export const Listado = () => {
   const [listado, setListado] = useState([]);
   const [nombre, setNombre] = useState("");
   const [correo, setCorreo] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [id, setId] = useState("");
  return (
    <div>Listado</div>
  )
}
