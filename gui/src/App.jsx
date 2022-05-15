import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./hocs/layout";
import Home from "./containers/Home";
import Login from "./containers/auth/Login"
import Register from "./containers/auth/Register"

import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./containers/Dashboard";

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='Dashboard' element={<Dashboard />} />
            <Route exact path='login' element={<Login />} />
            <Route exact path='register' element={<Register />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;