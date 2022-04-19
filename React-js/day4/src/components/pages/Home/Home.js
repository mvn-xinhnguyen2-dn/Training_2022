import React, { Component } from 'react'
import Circle from '../../circles/Circle'

export default class Home extends Component {
  render() {
    return (
      <>
        <h2>This is Home page</h2>
        <div className="timer">
          <Circle times='50'/>
          <Circle times='40'/>
          <Circle times='30'/>
        </div>
      </>
    )
  }
}
