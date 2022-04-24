import React, { Component } from "react";

export default class Popup extends Component {
  render() {
    const { rowId, deleteUser, handlePopupClose, popupActive } = this.props;
    // console.log(this.state.rowId)
    return (
      <div className={`popup ${popupActive}`}>
        <h2> {`Do you want delete this user: ${rowId} ?`} </h2>
        <button onClick={() => deleteUser()}>Yes</button>
        <button onClick={() => handlePopupClose()}>Close</button>
      </div>
    );
  }
}
