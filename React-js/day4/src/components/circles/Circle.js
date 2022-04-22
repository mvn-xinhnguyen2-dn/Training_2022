import React, { Component } from "react";

export default class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "Start",
      times: this.props.times,
      size: this.props.size,
      color: "green",
    };
    this.start = this.start.bind(this);
  }

  start() {
    if (this.state.current === "Start") {
      this.startTimer();
      this.setState({
        current: "Stop",
        color: "red",
      });
    } else {
      this.setState({
        current: "Start",
        color: "green",
      });
      clearInterval(this.timerID);
    }
  }
  startTimer() {
    this.timerID = setInterval(() => {
      this.setState({
        times: this.state.times - 1,
        size: this.state.size - 1,
      });
    }, 1000);
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
        <button className={this.state.current} onClick={this.start}>
          {this.state.current}
        </button>
        <div
          className={`circle ${this.state.color}`}
          style={{
            width: `${this.state.size}px`,
            height: `${this.state.size}px`,
          }}
        >
          <p>{this.state.times}</p>
        </div>
      </div>
    );
  }
}
