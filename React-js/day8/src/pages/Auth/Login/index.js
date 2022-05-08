import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  localStorage.setItem('user', email );
  const { login } = useAuth();

  return (
    <div className="container mt-30">
      <div className="login-form">
        <h2 className="center my-30">Login</h2>
        <form className="form">
          <label>Email</label>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
          />
          <label>Password</label>
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </form>
        <button className="btn login-submit mt-20" type="submit" onClick={() => login({ email }, { password })}>
          Login
        </button>
        <Link to="/auth/register" className="btn">Register</Link>
      </div>
    </div>
  );
}
