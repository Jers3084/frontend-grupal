import React, { useState } from "react";
import "./Styles/Styles.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var registro = "";
  var usuario = sessionStorage.getItem("cuentaUsuario");
  var token=sessionStorage.getItem("tokenUsuario");

  if (token === null) {
    registro = "No se ha registrado";
  } else {
    registro = "Ya esta Registrado con el usuario: " + usuario;
  }

  const handleSubmitl = async (e) => {
    e.preventDefault();
    await enviarLogin();
    setUsername("");
    setPassword("");
  };

  const enviarLogin = async () => {
    try {
      return fetch("http://35.192.83.171:3500/api/usuarios/login", {
        method: "POST", // or 'PUT'
        body: JSON.stringify({ username, password }), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          const tokenU = response.data.token;
          const cUsuario = response.data.user.username;
          sessionStorage.setItem("tokenUsuario", tokenU);
          sessionStorage.setItem("cuentaUsuario", cUsuario);
        });
    } catch (e) {
      console.log("hubo un error");
      console.log(e);
    }
  };

  return (
    <div className="contenedor">
      <form className="formato" onSubmit={handleSubmitl}>
        <div className="fullentry">
          <label htmlFor="userN" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="userN"
            value={username}
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="fullentry">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="contenBoton">
          <button type="submit" className="boton">
            Login
          </button>
          {<p>{registro}</p>}
        </div>
      </form>
    </div>
  );
};
