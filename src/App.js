import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login"
import Register from "./views/Register";

function App() {
  return (
          <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home /> }/>
                <Route path={"/Login"} element={<Login />}/>
                <Route path={"/Register"} element={<Register />}/>




            </Routes>
          </BrowserRouter>
  );
}

export default App;

