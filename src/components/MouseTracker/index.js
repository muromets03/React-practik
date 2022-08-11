import {Component  } from "react";


class MouseTracker extends Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{height : '100vh' }} onMouseMove={this.handleMouseMove}>
          <h1>Перемещайте курсор мыши!</h1>
          <p>Текущее положение курсора мыши: ({this.state.x}, {this.state.y})</p>
        </div>
      );
    }
  }

  export default MouseTracker