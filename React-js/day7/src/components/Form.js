import React, { Component } from "react";
import TableUsers from "./TableUsers";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "id1",
      userName: "",
      password: "",
      gender: "0",
      city: "London",
      message: "",
      agree: false,
      userList: [],
    };
  }
  handleOnChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  handleOnSubmit = (event) => {
  // handleOnSubmit = (event, {resetForm}) => {
    event.preventDefault();
    this.state.userList.push(this.state);
    this.setState({
      id: `id${Math.floor(Math.random() * 1000) + 1}`,
      userList: this.state.userList,
    });
    // resetForm({value:''})
  };

  handleDelete = (row) => {
    console.log(row);
    console.log("ok");
    if (window.confirm("Are you sure")) {
      this.setState({
        userList: this.state.userList.filter(function (e) {
          return e.id !== row;
        }),
      });
    }
    console.log(this.state.userList);
  };

  render() {
    let element = this.state.userList.map((user, index) => {
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
            <button onClick={(e) => this.handleDelete(user.id)}>Delete</button>
          </td>
        </tr>
      );
      return result;
    });
    return (
      <div className="container">
        <form onSubmit={this.handleOnSubmit} id="register">
          <div>
            <label htmlFor="userName">User name:</label>
            <input
              id="userName"
              type="text"
              name="userName"
              onChange={this.handleOnChange}
              value={this.state.userName}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={this.handleOnChange}
              value={this.state.password}
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
                onChange={this.handleOnChange}
                checked={this.state.gender === "0"}
                required
              />
              <label htmlFor="male">Male</label>
              <input
                id="female"
                type="radio"
                name="gender"
                value="1"
                onChange={this.handleOnChange}
                checked={this.state.gender === "1"}
                required
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          <div>
            <label>City:</label>
            <select
              name="city"
              onChange={this.handleOnChange}
              value={this.state.city}
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
              onChange={this.handleOnChange}
              value={this.state.message}
              required
            />
          </div>
          <div>
            <label htmlFor="agree"> Are you agree?</label>
            <input
              id="agree"
              type="checkbox"
              name="agree"
              onChange={this.handleOnChange}
              value={true}
              checked={this.state.agree === true}
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
}
