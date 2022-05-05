import React from "react";
// import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function Account() {
  const { logout } = useAuth();
  // const [user] = useState(JSON.parse(localStorage.getItem('user')))

  return (
    <>
      {/* <div> this is {user.email}</div> */}
      <div className="mt-30 mx-auto"> this is my account</div>
      <button className="button" onClick={() => logout()}>
        Logout
      </button>
    </>
  );
}
