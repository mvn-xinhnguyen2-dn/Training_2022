import "./App.css";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
      pageAvtive: "active",
    };
    this.pageClick = this.pageClick.bind(this);
  }

  pageClick(e) {
    if (e === "home") {
      this.setState({
        currentPage: "Home",
        pageAvtive: "none",
      });
    } else {
      this.setState({
        currentPage: "About",
        pageAvtive: "active",
      });
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="header">
          <button
            onClick={() => {
              this.pageClick("home");
            }}
          >
            Home
          </button>
          <button
            className={this.state.pageAvtive}
            onClick={() => {
              this.pageClick("about");
            }}
          >
            About
          </button>
        </nav>
        <div id="page">
          {this.state.currentPage === "Home" ? <Home /> : ""}
          {this.state.currentPage === "About" ? <About /> : ""}
        </div>
      </div>
    );
  }
}
