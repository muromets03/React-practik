import React, {useContext, useState, useEffect, useCallback, useMemo} from 'react';
import { UserContext, ThemeContext } from '../../contexts';
import CONSTANTS from "../../constants";
import styles from './UserProfile.module.scss'

const {THEMES} = CONSTANTS;

const mapStyle={
  [THEMES.LIGHT]:{backgroundColor:'#fff', color:'#222'},
  [THEMES.DARK]:{backgroundColor:'#222', color:'#fff'}
}
function calcValue (n){
    let res=0;
    for(let i=0; i<100000 ; i++){
res +=i
    }
    return n*n*n +res
}

const UserProfile = () => {
    const [numberValue , setNumberValue] =useState(0)
  const [{fname, lname}] = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);


  const handlerTheme = useCallback(() => {
    setTheme(theme===THEMES.LIGHT?THEMES.DARK:THEMES.LIGHT);
  }, [theme,setTheme]);

  const handlerInput = useCallback(({target:{value}})=>{
    setNumberValue(Number(value))},
    [])
  

  const logNumberValue =useCallback(()=>{
    console.log(numberValue)
  }, [numberValue])
  
const memocalcValue = useMemo(() => 
    calcValue(numberValue), [numberValue]);

  return (
    <section className={styles.container} style={mapStyle[theme]}>
      <h2 className={styles.container_heading}>User profile</h2>
      <h3>Hi, {fname} {lname}</h3>
      <h3>n*n*n ={memocalcValue}</h3>
      <button onClick={handlerTheme}>switch theme</button>
      <input type ="number" value={numberValue} onChange={handlerInput}/>
      <button onClick={logNumberValue}>log number</button>
    </section>
  );
}

export default UserProfile;