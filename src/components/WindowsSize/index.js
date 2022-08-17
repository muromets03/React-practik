
import React, { useState, useEffect } from "react";

const WindowsSize =()=> {
  const [size, setSize] = useState(
   {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  );

  useEffect(()=>{
    const handlerResize = () => {
    setSize({
      ...size,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

 
    window.addEventListener("resize", handlerResize);
  

return()=>{
    window.removeEventListener("resize", handlerResize);
}
  },[size]);

  


    return (
      <div>
        <p> width: {size.width}</p>
        <p>height: {size.height}</p>
      </div>
    );
  }


export default WindowsSize;


// import React, { Component } from "react";

// class WindowsSize extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   }

//   handlerResize = () => {
//     this.setState({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };

//   componentDidMount() {
//     window.addEventListener("resize", this.handlerResize);
//   }

//   componentWillUnmount(){
//     window.removeEventListener("resize", this.handlerResize);
//   }

  
//   render() {
//     const { width, height } = this.state;

//     return (
//       <div>
//         <p> width: {width}</p>
//         <p>height: {height}</p>
//       </div>
//     );
//   }
// }

// export default WindowsSize;
