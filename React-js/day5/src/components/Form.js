import React, { Component } from "react";
import TableUsers from "./TableUsers";
import Popup from "./Popup";

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
      popupActive: "none",
      rowId: "",
    };
  }

  //Get input value.
  handleOnChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  //Submit form and save user into userList.
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.state.userList.push(this.state);
    this.setState({
      id: `id${Math.floor(Math.random() * 1000) + 1}`,
      userList: this.state.userList,
    });
    //Reset form
    this.setState({
      userName: "",
      password: "",
      gender: "0",
      city: "London",
      message: "",
      agree: false,
    });
  };

  //Active popup, delete user, close popup.
  handlePopupDelete = (row) => {
    this.setState({
      popupActive: "popup-active",
      rowId: row,
    });
  };
  deleteUser = (rowId) => {
    this.setState({
      popupActive: "none",
      userList: this.state.userList.filter(function (e) {
        return e.id !== rowId;
      }),
    });
  };
  handlePopupClose() {
    this.setState({
      popupActive: "none",
    });
  }

  render() {
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
              />
              <label htmlFor="male">Male</label>
              <input
                id="female"
                type="radio"
                name="gender"
                value="1"
                onChange={this.handleOnChange}
                checked={this.state.gender === "1"}
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
            />
          </div>
          <button className="btn-submit" type="submit">
            Submit
          </button>
        </form>
        <TableUsers
          userList={this.state.userList}
          handlePopupDelete={(row) => this.handlePopupDelete(row)}
        />
        <Popup
          popupActive={this.state.popupActive}
          deleteUser={(e) => this.deleteUser(this.state.rowId)}
          handlePopupClose={(e) => this.handlePopupClose(e)}
          rowId={this.state.rowId}
        />
      </div>
    );
  }
}
