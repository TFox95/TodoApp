import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./hocs/layout";
import Home from "./containers/Home";
import Login from "./containers/auth/Login"
import Register from "./containers/auth/Register"

const App = () => {

  return (
    <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='login' element={<Login />} />
            <Route exact path='register' element={<Register />} />
          </Routes>
        </Layout>
    </Router>
  );
}

export default App;