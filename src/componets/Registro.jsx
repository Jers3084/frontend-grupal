import React, { useState } from "react";
import "./Styles/Styles.css";

export const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitr = (e) => {
    e.preventDefault();
    enviarRegistro();
    setNombre("");
    setCorreo("");
    setUsername("");
    setPassword("");
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputUsername").value = "";
    document.getElementById("inputPassword").value = "";
    alert("Registro Enviado");
  };

  const enviarRegistro = async () => {
    const registroGuardar = {
      nombre,
      correo,
      username,
      password,
    };
    console.log(registroGuardar);
    try {
      const login = async (registroLogin) => {
        const response = await fetch()
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      };
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
            defaultValue=""
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
            defaultValue=""
            placeholder="Correo electronico"
            required
            onChange={(e) => {
              setCorreo(e.target.value);
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
