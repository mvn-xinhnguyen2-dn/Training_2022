import React, { Component } from "react";

export default class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "Start",
      times: this.props.times,
    };
    this.start = this.start.bind(this);
  }

  start() {
    // document.querySelector(`.circle.c${this.props.times}`).classList.add("active")
    document.querySelector(`.circle.c${this.state.times}`).classList.add("active")
    if (this.state.current === "Start") {
      this.timerID = setInterval(() => {
        this.setState({ times: this.state.times - 1 });
      }, 1000);
      this.setState({ current: "Stop" });
    } else {
      this.setState({ current: "Start" });
      clearInterval(this.timerID);
    }
  }

  componentDidUpdate() {
    if (this.state.times === 0) {
      clearInterval(this.timerID);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <button 
          className={this.state.current}
          onClick={this.start}>{this.state.current}
        </button>
        <div className={`circle c${this.state.times}`}>
            <p>{this.state.times}</p>
        </div>
      </div>
    );
  }
}
