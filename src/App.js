// import { Formik } from "formik";
 import React, {useState} from "react";
import FuncStopWatch from "./components/FuncStopWatch";
// import LogInForm from "./components/forms/LogInForm";
// import HeaderTask from "./components/HeaderTask";

import { UserContext } from "./contexts";

import LearnHooks from "./components/LearnHooks";







 import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import HomePage from "./components/HeaderTask/HomePage";
// import LoginPage from "./components/HeaderTask/LoginPage";
// import SignUpPage from "./components/HeaderTask/SignUpPage";

// import Header from "./components/Header";
// import Tree from "./components/Tree";
import {  ThemeContext } from "./contexts";
import UserCard from "./components/UserCard";
import WindowsSize from "./components/WindowsSize";
//import { boolean } from "yup";
// import CONSTANTS from "./constants"
//const {THEMES} =CONSTANTS;

// import Container from "./components/Grid/Container";
// import Row from "./components/Grid/Row";
// import Col from "./components/Grid/Col";
// import StopWatch from "./components/StopWatch/index";
// import UsersDashbord from "./components/UsersDashbord/index";
// import Calendar from "./components/Calendar";
// import UsersLoader from "./components/UsersLoader";
// import WindowsSize from "./components/WindowsSize";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import SignInform from "./components/forms/SignInForm";
// import PageNotFound from "./pages/PageNotFound";
// import Error from "./components/Error";
// import Spinner from "./components/Spinner";
// import Cabinet from "./pages/PageNotFound/CabinetPage";
// import CounterPage from "./pages/PageNotFound/CounterPage";
// import LoaderPages from "./pages/PageNotFound/LoaderPage";
// import MouseTracker from "./components/MouseTracker";

/*----------------15.08.2022 React-Hooks---------------------------------*/

const App = () => {
  
  // const [user]=useState({id:1,name:'Elon Musk'})
  // const [theme]= useState({theme})
  // const [isVisible, setIsVisible]= useState (true)
  // const handleSwitch =()=>{setIsVisible(!isVisible)}
  const [user, setUser]= useState({
    id:1,
    fname: "Elon",
    lname: "Musk",
    isSelected: false,
  })
  const [theme, setTheme]= useState(true)
  const handlerTheme =()=>{
    setTheme(!theme)
  }
  return (
    <div style={{backgroundColor:(theme?'#fff':"#222"), color:(theme?'#222':"#fff")}}>
  
     <UserContext.Provider value={[user,setUser]}>
      <button onClick={handlerTheme}> switch theme</button>

    <BrowserRouter>
     <li>
                <Link to="/usercard">loader</Link>
             </li>
             <li>
                <Link to="/">Home</Link>
             </li>
             <li>
                <Link to="/func">FuncStopWatch</Link>
             </li>
             <li>
                <Link to="/ws">WindowsSize</Link>
             </li>
            
            

    <ThemeContext.Provider value={[theme]}>

    </ThemeContext.Provider>
    <Routes>
      <Route path="" element={<HomePage/>}/>
      <Route path="/usercard" element={<UserCard />} />
      <Route path="/func" element={< FuncStopWatch/>}/>
      <Route path="/ws" element={<  WindowsSize/>}/>
     
    </Routes>
    </BrowserRouter>
    </UserContext.Provider> 
    {/* <button onClick={handleSwitch}>switch</button>
    
      {isVisible && < FuncStopWatch/>} */}
    </div>
  );
};

/*----------------------------------------------------------------------*/

// const List = (props) => {
//   const { title, children } = props;
//   return (
//     <ul title={title}>
//       <h2>wweq</h2>
//       {children}
//       <p>lorem</p>
//     </ul>
//   );
// };

// const App = () => {
//   const onSubmit = (values, formikBag) => {
//       formikBag.resetForm();}
//   //   }; {/* <LogInForm onSubmit={onSubmit}/> */}
//   return (

//     <BrowserRouter>
//       <HeaderTask />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage onSubmit={onSubmit}/>} />
//         <Route path="/signup" element={<SignUpPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

//   constructor(props) {
//     super(props);
//     this.state = {
//       theme:THEMES.LIGHT,
//       user: {
//         id: 1,
//         fname: "Elon",
//         lname: "Musk",
//         avatar:
//           "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/876/317/datas/profile.jpg",
//       },
//     };
//   }

//   setTheme=(theme)=> this.setState({theme})

// render() {
//   console.log(UserContext);
//   const { user,theme } = this.state;
//   return (

//     <BrowserRouter>
//     <ThemeContext.Provider value={[theme, this.setTheme]}>

//       <UserContext.Provider value={user}>
//         <Header />
//         <Tree  />
//       </UserContext.Provider>

//       </ThemeContext.Provider>
//     </BrowserRouter>

//   );
// }
// }

// const App=()=>{

//   return (
// <>
//        <BrowserRouter>
//         <header>
//           Site
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">loader</Link>
//               </li>
//               <li>
//                 <Link to="/stopwatch">stopwatch</Link>
//               </li>
//               <li>
//                 <Link to="/signin">sign in</Link>
//               </li>
//               <li>
//                 <Link to="/resize">resize</Link>
//               </li>
//               <li>
//                 <Link to="/cabinet/">cabinet</Link>
//               </li>
//               <li>
//                 <Link to="/counter">counter</Link>
//               </li>
//               <li>
//                 <Link to="/mousetracker">mousetracker</Link>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <Routes>
//           <Route path="/" element={<LoaderPages />} />
//           <Route path="/stopwatch" element={<StopWatch />} />
//           <Route path="/signin" element={<SignInform />} />
//           <Route path="/resize" element={<WindowsSize />} />
//           <Route path="/counter" element={<CounterPage />} />
//           <Route path="/mousetracker" element={<MouseTracker />} />
//           <Route path="/cabinet/" element={<Cabinet />}>
//             <Route path="error" element={<Error />} />
//             <Route path="spinner" element={<Spinner />} />
//           </Route>
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//         <footer>@2022</footer>
//       </BrowserRouter>
//     </>

//   );
// };

export default App;
