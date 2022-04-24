import React, { Component } from "react";

export default class TableUsers extends Component {
  render() {
    const { id, userName, password, gender, city, message } = this.props;
    return (
      <>
        <td>{id}</td>
        <td>{userName}</td>
        <td>{password}</td>
        <td>{gender}</td>
        <td>{city}</td>
        <td className="col-message">{message}</td>
      </>
    );
  }
}
