import React, { useState } from "react";
import './Styles/Styles.css'

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitr = (e) => {
    e.preventDefault();
    enviarLogin();
    setUsername("");
    setPassword("");
    document.getElementById("userN").value = "";
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
    <div className="contenedor">
      <form className="formato">
        <div className="fullentry">
          <label htmlFor="userN" className='form-label'>
            Username
          </label>
          <input
            type="text"
            readOnly
            className="form-control"
            id="userN"
            defaultValue=""
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="contenBoton">
          <button type="submit" className="boton">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
