import React from 'react';
import './App.css';


import Header from './components/Header';
import MainContainer from './components/MainContainer'
import LoginForm from "./components/Login";
import SignUpForm from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <LoginForm />
      <SignUpForm />
    </div>
  );
}

export default App;
