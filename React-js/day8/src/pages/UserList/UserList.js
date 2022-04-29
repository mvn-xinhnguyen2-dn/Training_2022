import React, { useEffect, useState } from "react";
import UserItem from "../../components/modules/UserItem/UserItem";

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
    <div className="container">
      <ul className="user-list flex">
        {dataList.map((user) => {
          let userItem = "";
          userItem = (
            <UserItem user = {user}/>
          );
          return userItem;
        })}
      </ul>
      <div className="page-number my-0 mx-auto">
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

