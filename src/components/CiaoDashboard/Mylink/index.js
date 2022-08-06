import React from 'react';


const Mylink = (props)=> {
const {className, href}= props;

return (
    
    <>
    <a className={className} href ={href}> Mylink</a>
    </>
)

}


export default Mylink