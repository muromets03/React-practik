import React from "react";
import Container from "./components/Grid/Container";
import Row from "./components/Grid/Row";
import Col from "./components/Grid/Col";
import StopWatch from "./components/StopWatch/index";
import UsersDashbord from "./components/UsersDashbord/index";
import Calendar from "./components/Calendar";
import UsersLoader from "./components/UsersLoader";
import WindowsSize from "./components/WindowsSize";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignInform from "./components/forms/SignInForm";
import PageNotFound from "./pages/PageNotFound";
import Error from "./components/Error";
import Spinner from "./components/Spinner";
import Cabinet from "./pages/PageNotFound/CabinetPage";
import CounterPage from "./pages/PageNotFound/CounterPage";
import LoaderPages from "./pages/PageNotFound/LoaderPage";

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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          Site
          <nav>
            <ul>
              <li>
                <Link to="/">loader</Link>
              </li>
              <li>
                <Link to="/stopwatch">stopwatch</Link>
              </li>
              <li>
                <Link to="/signin">sign in</Link>
              </li>
              <li>
                <Link to="/resize">resize</Link>
              </li>
              <li>
                <Link to="/cabinet/">cabinet</Link>
              </li>
              <li>
                <Link to="/counter">counter</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<LoaderPages />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/signin" element={<SignInform />} />
          <Route path="/resize" element={<WindowsSize />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/cabinet/" element={<Cabinet />}>
            <Route path="error" element={<Error />} />
            <Route path="spinner" element={<Spinner />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <footer>@2022</footer>
      </BrowserRouter>
    </>
  );
};

export default App;
