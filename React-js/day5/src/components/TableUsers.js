import React, { Component } from "react";
import ItemUsers from "./ItemUsers";

export default class TableUsers extends Component {
  render() {
    const { userList, handlePopupDelete } = this.props;
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>ID</th>
              <th>User name</th>
              <th>Password</th>
              <th>Gender</th>
              <th>City</th>
              <th className="col-message">Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="insert-user-table">
            <ItemUsers
              userList={userList}
              handlePopupDelete={(row) => handlePopupDelete(row)}
            />
          </tbody>
        </table>
      </>
    );
  }
}
