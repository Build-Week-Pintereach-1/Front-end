import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

import Header from './components/Header';
import MainContainer from './components/MainContainer'
import LoginForm from "./components/Login";
import SignUpForm from "./components/SignUp";
import ArticleList from "./components/ArticleList";
import UserDashboard from './components/UserDashboard';
import PrivateRoute from "./components/PrivateRoute";
import SavedCard from './components/SavedCard';

function App() {
  const [search, setSearch] = useState("")
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") || false)
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <div>
        <Route exact path="/" render = {props => (
          <ArticleList
            {...props}
            search={search}
          />
        )} />
        <PrivateRoute path="/user/:id" component={UserDashboard} />
        <Route path="/Login" component={LoginForm} />
        <Route path="/SignUp" component={SignUpForm} />
      </div>
         
    </div>
  );
}

export default App;
