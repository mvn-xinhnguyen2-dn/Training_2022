import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login } = useAuth();

  return (
    <>
      <form className="form">
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </form>
      <button className="btn" onClick={() => login({ email }, { password })}>
        Login
      </button>
      <Link to="/auth/register">Register</Link>
    </>
  );
}
