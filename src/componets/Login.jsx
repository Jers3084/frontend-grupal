import React from "react";

export const Login = () => {
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
            defaultValue="email@example.com"
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
