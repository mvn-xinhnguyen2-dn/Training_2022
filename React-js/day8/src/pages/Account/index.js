import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function Account() {
  const { logout } = useAuth();
  const [user] = useState(JSON.stringify(localStorage.getItem('user')))
  console.log(user)
  return (
    <div className="page-account center">
      <div className="container">
        <h2 className="mt-30 mx-auto"> Hello {user}. This is my account!!!</h2>
        <button className="btn mt-30" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </div>
  );
}
