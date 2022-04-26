import React, { useEffect, useState } from "react";

export default function UserList() {
  const [dataList, setDataList] = useState([]);
  const [numPage, setNumPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${numPage}`)
      .then(function (response) {
        return response.json();
      })
      .then((users) => {
        setDataList(users.data);
      })
      .catch((error) => console.error(error));
  }, [numPage]);

  return (
    <div>
      <ul className="user-list">
        {dataList.map((user) => {
          let userItem = "";
          userItem = (
            <li key={user.id} className="user-item col-4">
              <img src={user.avatar} alt="" />
              <div>
                <p>ID: {user.id}</p>
                <p>
                  Fullname: {user.first_name} {user.last_name}
                </p>
                <p>Email: {user.email}</p>
              </div>
            </li>
          );
          return userItem;
        })}
      </ul>
      <div className="page-number">
        <button onClick={() => setNumPage(numPage === 1 ? 1 : numPage - 1)}>
          Prev
        </button>
        <button
          onClick={() => setNumPage(1)}
          className={numPage === 1 ? "active" : ""}
        >
          1
        </button>
        <button
          onClick={() => setNumPage(2)}
          className={numPage === 2 ? "active" : ""}
        >
          2
        </button>
        <button onClick={() => setNumPage(numPage === 2 ? 2 : numPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
