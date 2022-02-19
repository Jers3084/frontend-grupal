import React, { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitr = (e) => {
    e.preventDefault();
    enviarLogin();
    setUsername("");
    setPassword("");
    document.getElementById("inputUsername").value = "";
    document.getElementById("inputPassword").value = "";
  };

  const enviarLogin = async () => {
    const registroGuardarL = {
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
      <form className="row g-3">
        <div className="col-auto">
          <label htmlFor="staticEmail2" className="visually-hidden">
            Username
          </label>
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="staticEmail2"
            defaultValue=""
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Confirm identity
          </button>
        </div>
      </form>
    </div>
  );
};
