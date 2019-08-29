import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import SavedCard from './components/SavedCard'
import Header from './components/Header';
import MainContainer from './components/MainContainer'
import LoginForm from "./components/Login";
import SignUpForm from "./components/SignUp";
import ArticleList from "./components/ArticleList";
import UserDashboard from './components/UserDashboard';
import PrivateRoute from "./components/PrivateRoute";
import DisplayArticleBoard from './components/DisplayArticleBoard';

function App() {
  const [search, setSearch] = useState("")
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") || false)
  const [userID, setUserID] = useState(null)


  return (
    <div className="App">
  {/*<Header search={search} setSearch={setSearch} />*/}
      <Route path="/" render={props => (
        <Header search={search} setSearch={setSearch} {...props} />
      )} />
      <div>
        <Route exact path="/" render = {props => (
          <ArticleList
            {...props}
            search={search}
          />
        )} />
        <PrivateRoute path="/user/:id" component={UserDashboard} userID={userID}/>
        <Route path="/Login" render = {props => (
          <LoginForm {...props} userID={userID} setUserID={setUserID}/> )}
        />
        <Route path="/SignUp" component={SignUpForm} />
      </div>
         
    </div>
  );
}

export default App;
