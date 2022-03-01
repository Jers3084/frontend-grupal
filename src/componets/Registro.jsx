import React, { useState } from "react";
import "./Styles/Styles.css";

export const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  var token=sessionStorage.getItem("tokenUsuario");

    const handleSubmitr = async (e) => {
    e.preventDefault();
    if (token===null) {
      return alert("No se ha registrado, se debe registrar primero");
     } 
    await enviarRegistro();
    setNombre("");
    setEmail("");
    setUsername("");
    setPassword("");
    alert("Registro Enviado");
  };

  const enviarRegistro = async () => {
    try {
      return fetch("http://35.192.83.171:3500/api/usuarios", {
        method: "POST",
        body: JSON.stringify({ nombre, email, username, password }), // data {object}
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
    } catch (e) {
      console.log("hubo un error");
      console.log(e);
    }
  };

  return (
    <div className="contenedor">
      <form className="formato" onSubmit={handleSubmitr}>
        <div className="fullentry">
          <label htmlFor="validationCustom01" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNombre"
            value={nombre}
            placeholder="Nombre"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>

        <div className="fullentry">
          <label htmlFor="validationCustom02" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            value={email}
            placeholder="Correo electronico"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="fullentry">
          <label htmlFor="validationCustomUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            aria-describedby="inputGroupPrepend"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="fullentry">
          <label htmlFor="validationCustomUsername" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            aria-describedby="inputGroupPrepend"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="contenBoton">
          <button className="boton" type="submit">
            Registrar datos
          </button>
        </div>
      </form>
    </div>
  );
};
