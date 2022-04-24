import React, { Component } from "react";

export default class ItemUsers extends Component {
  render() {
    const { userList, handlePopupDelete } = this.props;
    let element = userList.map((user, index) => {
      let result = "";
      result = (
        <tr key={user.id}>
          <td>{index + 1}</td>
          <td>{user.id}</td>
          <td>{user.userName}</td>
          <td>{user.password}</td>
          <td>{user.gender === "0" ? "Male" : "Female"}</td>
          <td>{user.city}</td>
          <td>{user.message}</td>
          <td>
            <button onClick={() => handlePopupDelete(user.id)}>Delete</button>
          </td>
        </tr>
      );
      return result;
    });
    return <>{element}</>;
  }
}
