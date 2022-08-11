import React, { Component } from "react";
import styles from "./StopWatch.module.scss";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
    };
    this.intervalId = null;
  }
  tick = () => {
    // const { time } = this.state;
    // const newTime = new Date(time.getTime()+1000)
    // this.setState({ time: newTime });
    this.setState((state) => {
      const { time } = state;
      const newTime = new Date(time.getTime() + 1000);
      return { time: newTime };
    });
  };

  start = () => {
    if (this.intervalId === null) {
      this.intervalId = setTimeout(this.tick, 1000);
    }
  };

  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  };
  componentDidMount() {
    this.start();
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    this.intervalId = setTimeout(this.tick, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");

    this.reset();
  }

  render() {
    const { time } = this.state;
    console.log("render");
    return (
      <article className={styles.container}>
        <h2 className={styles.heading}>{time.toLocaleTimeString("en-GB")}</h2>
        <div>
          <button onClick={this.start}>start</button>
          <button onClick={this.stop}>stop</button>
          <button onClick={this.reset}>reset</button>
        </div>
      </article>
    );
  }
}

export default StopWatch;
