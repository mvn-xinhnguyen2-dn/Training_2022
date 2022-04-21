import "./App.css";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
    };
    this.pageClick = this.pageClick.bind(this);
  }

  pageClick(e) {
    document.getElementsByClassName('page-item')[0].style.color = "white"
    document.getElementsByClassName('page-item')[1].style.color = "white"
    if (e === "home") {
      this.setState({ currentPage: "Home" });
      document.getElementsByClassName('page-item')[0].style.color = "aqua"
    } else {
      this.setState({ currentPage: "About" });
      document.getElementsByClassName('page-item')[1].style.color = "aqua"
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="header">
          <button
            className="page-item"
            onClick={() => {this.pageClick("home");}}
          >
            Home
          </button>
          <button
            className="page-item"
            onClick={() => {this.pageClick("about");}}
          >
            About
          </button>
        </nav>
        <div id="page">
          {this.state.currentPage ==="Home" ? <Home / > : ''}
          {this.state.currentPage ==="About" ? <About / > : ''}
        </div>
      </div>
    );
  }
}
