import React, { useState } from "react";

export const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

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
    try {
      /* const DB = collection(dbConfig, "proy4-reservas");
     const item = await addDoc(DB, reservaAGuardar);
     setReservacion([...reservacion, { id: item.id, nombre, correo, telefono, numpersonas, fecha }]);*/
    } catch (e) {
      console.log("hubo un error");
      console.log(e);
    }
  };

  return (
    <div className="container">
      <form
        className="row g-3 needs-validation"
        onSubmit={handleSubmitr}
        noValidate>
        <div className="col-md-4">
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
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
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
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
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
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Password
          </label>
          <div className="input-group has-validation">
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
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Registrar datos
          </button>
        </div>
      </form>
    </div>
  );
};
