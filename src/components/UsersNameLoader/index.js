import React, { Component } from "react";

class UsersNameLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      error: null,
      isFetching: false,
    };
  }



  componentDidMount() {
    this.setState({isFetching:true})
    fetch("/users.json")
    .then((res) => res.json())
    .then((names)=>{this.setState({names})})
    .catch((err)=>{this.setState({err})})
    .finally(()=>{this.setState({isFetching:false})})
  }



  render() {const {names,error, isFetching}= this.state
    return(
    


     <div>
<p></p>

    </div>
    )
  }
}

export default UsersNameLoader;
