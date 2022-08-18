
import  {useState, useEffect} from 'react';

const UseClicker = (initialValue=0) => {
   const [count, setCount]= useState(initialValue)

   useEffect(()=>{
      
 const handlerClick =()=>{
    setCount(count=> count +1)
}
     window.addEventListener("click", handlerClick);

  return ()=>{
    window.removeEventListener("click", handlerClick)
  }
}, [])
   return count;
}

export default UseClicker;
