import React, { Component } from "react";

class WindowsSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  handlerResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handlerResize);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.handlerResize);
  }

  
  render() {
    const { width, height } = this.state;

    return (
      <div>
        <p> width: {width}</p>
        <p>height: {height}</p>
      </div>
    );
  }
}

export default WindowsSize;
