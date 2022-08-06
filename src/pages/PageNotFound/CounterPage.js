import React, {Component} from 'react';
import Counter from '../../components/Counter';

class CounterPage extends  Component   {
constructor(props){
    super(props)
this.state ={
    step:1,
    valueInput : 20,

}
}

handlerRange=({target:{value}})=>{this.setState({step:Number(value)})}

handlerValueInput=({target:{value, name}})=>{this.setState({[name]:Number(value)})}

   render() {
      const{step, valueInput}= this.state
    
    return (
      
        <div>
            <h1>Counter</h1>
            <Counter step={step}/>
            <input type='range' name='step' min={1} max ={10} step ={1} value={step} onChange={this.handlerRange}/>
            <input type='range' name='valueInput' min={0} max ={100} step ={10} value={valueInput} onChange={this.handlerValueInput}/>
            <h2>valuInput:{valueInput}</h2>
            <p>step:{step}</p>
        </div>
    );
   }
}

export default CounterPage;
