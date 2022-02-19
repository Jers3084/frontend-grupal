import React, { useState } from "react";

export const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  return (
    <div className="container">
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
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
            id="validationCustom02"
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
              id="validationCustomUsername"
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
              id="validationCustomPassword"
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
