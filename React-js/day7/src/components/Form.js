import React, { useState } from "react";
import TableUsers from "./TableUsers";
import useField from "./useField";

export default function Form() {
  const username = useField("");
  const password = useField("password");
  const gender = useField("radio");
  const city = useField("");
  const message = useField("");
  const agree = useField("checkbox");

  const [userList, setUserList] = useState([]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    const id = `id${Math.floor(Math.random() * 1000) + 1}`;
    const userInfo = {
      id,
      username: username.inputValue,
      password: password.inputValue,
      gender: gender.inputValue,
      city: city.inputValue,
      message: message.inputValue,
      agree: agree.inputValue,
    };
    setUserList([...userList, userInfo]);
  };

  const handleDelete = (row) => {
    if (window.confirm("Are you sure")) {
      setUserList(
        userList.filter(function (e) {
          return e.id !== row;
        })
      );
    }
  };

  let element = userList.map((user) => {
    let result = "";
    result = (
      <tr key={user.id} id={user.id}>
        <TableUsers
          id={user.id}
          username={user.username}
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
          <input {...username} id="userName" name="userName" required />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input {...password} id="password" name="password" required />
        </div>

        <div>
          <label>Gender:</label>
          <div>
            <input {...gender} id="male" name="gender" value="0" required />
            <label htmlFor="male">Male</label>
            <input {...gender} id="female" name="gender" value="1" required />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div>
          <label>City:</label>
          <select {...city} name="city" required>
            <option value="">Choose city</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
          </select>
        </div>

        <div>
          <label>Message:</label>
          <textarea {...message} cols="30" name="message" required />
        </div>

        <div>
          <label htmlFor="agree"> Are you agree?</label>
          <input {...agree} id="agree" name="agree" required />
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
