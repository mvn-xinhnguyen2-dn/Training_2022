import React, { useState } from "react";
import TableUsers from "./TableUsers";

export default function Form() {
  const [inputValue, setInputValue] = useState({
    id: "id1",
    userName: "",
    password: "",
    gender: "0",
    city: "London",
    message: "",
    agree: false,
    userList: [],
  });

  const handleOnChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    inputValue.userList.push(inputValue);
    setInputValue({
      ...inputValue,
      id: `id${Math.floor(Math.random() * 1000) + 1}`,
      userList: inputValue.userList,
    });
  };

  const handleDelete = (row) => {
    if (window.confirm("Are you sure")) {
      setInputValue({
        userList: inputValue.userList.filter(function (e) {
          return e.id !== row;
        }),
      });
    }
  };

  let element = inputValue.userList.map((user) => {
    let result = "";
    result = (
      <tr key={user.id} id={user.id}>
        <TableUsers
          id={user.id}
          userName={user.userName}
          password={user.password}
          gender={user.gender === "0" ? "Male" : "Female"}
          city={user.city}
          message={user.message}
        />
        <td>
          <button onClick={(e) => handleDelete(user.id)}>Delete</button>
        </td>
      </tr>
    );
    return result;
  });

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit} id="register">
        <div>
          <label htmlFor="userName">User name:</label>
          <input
            id="userName"
            type="text"
            name="userName"
            onChange={handleOnChange}
            value={inputValue.userName}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleOnChange}
            value={inputValue.password}
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="0"
              onChange={handleOnChange}
              checked={inputValue.gender === "0"}
              required
            />
            <label htmlFor="male">Male</label>
            <input
              id="female"
              type="radio"
              name="gender"
              value="1"
              onChange={handleOnChange}
              checked={inputValue.gender === "1"}
              required
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div>
          <label>City:</label>
          <select
            name="city"
            onChange={handleOnChange}
            value={inputValue.city}
            required
          >
            <option value="London">London</option>
            <option value="Paris">Paris</option>
          </select>
        </div>

        <div>
          <label>Message:</label>
          <textarea
            cols="30"
            name="message"
            onChange={handleOnChange}
            value={inputValue.message}
            required
          />
        </div>

        <div>
          <label htmlFor="agree"> Are you agree?</label>
          <input
            id="agree"
            type="checkbox"
            name="agree"
            onChange={handleOnChange}
            value={true}
            checked={inputValue.agree === true}
            required
          />
        </div>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User name</th>
            <th>Password</th>
            <th>Gender</th>
            <th>City</th>
            <th className="col-message">Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="insert-user-table">{element}</tbody>
      </table>
    </div>
  );
}
