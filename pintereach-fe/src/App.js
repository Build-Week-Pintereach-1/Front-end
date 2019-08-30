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
import ArticleBoard from './components/ArticleBoard';

const randomString = () => {
  const bgArray = ["biology", "physics", "astronomy", "geology", "chemistry", "education", "anatomy", "psychology", "kinesiology", "computer science", "art", "history"]

  const randomNum = Math.floor(Math.random() * bgArray.length)
  const pick = bgArray[randomNum]
  return pick;
}


function App() {
  const [search, setSearch] = useState(localStorage.getItem("searchTerm") || randomString);
  const [loggedIn, setLoggedIn] = useState((localStorage.getItem("token") && localStorage.getItem("userID")) || false);
  const [userID, setUserID] = useState(null);
  


  return (
    <div className="App">
  {/*<Header search={search} setSearch={setSearch} />*/}
      <Route path="/" render={props => (
        <Header search={search} setSearch={setSearch} loggedIn={loggedIn} setLoggedIn={setLoggedIn} {...props} />
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
          <LoginForm {...props} userID={userID} setUserID={setUserID} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> )}
        />
        <Route path="/SignUp" render = {props => (
          < SignUpForm {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        )} /> 
      </div>
    </div>
      
  );
}

export default App;
