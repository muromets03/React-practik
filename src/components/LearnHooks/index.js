import React, {useState} from "react";


const LearnHooks = () => {

    const [coord, setCoord] = useState({x:0, y:0});


    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
 
  const handlerClick = () => {
    setCount(count+step)
 };
    const handlerInput =({target:{value}})=>{
setStep(Number(value))
    }
  const handlerMove =(event)=>{
    setCoord({
        x: event.clientX,
        y: event.clientY
    })
}
 
  return (
    <div style ={{height:'80vh', backgroundColor:'#eee'}} onMouseMove ={handlerMove}>
      <h2>Count: {count}</h2>
      <button onClick={handlerClick}>add</button>
      <input type="number" value={step} onChange={handlerInput}/>
<p>{coord.x}</p>
<p>{coord.y}</p>

    </div>
  );
};

export default LearnHooks;
