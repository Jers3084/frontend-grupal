import React, { useState } from "react";
import "./Styles/Styles.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitl = (e) => {
    e.preventDefault();
    enviarLogin();
    setUsername("");
    setPassword("");
    document.getElementById("userN").value = "";
    document.getElementById("inputPassword").value = "";
  };

  const enviarLogin = async () => {
    const registroLogin = {
      username,
      password,
    };
    console.log(registroLogin);

    try {
      const login = async (registroLogin) => {
        const response = await fetch()
        .then(response => response.json())
        .then(data => {console.log(data)})
      }
    } catch (e) {
      console.log("hubo un error");
      console.log(e);
    }
  };

  return (
    <div className="contenedor">
      <form className="formato"  onSubmit={handleSubmitl} >
        <div className="fullentry">
          <label htmlFor="userN" className="form-label">
            Username
          </label>
          <input
            type="text"
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
