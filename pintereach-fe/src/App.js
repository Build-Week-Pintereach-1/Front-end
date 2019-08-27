import React, { useState } from 'react';
import './App.css';


import Header from './components/Header';
import MainContainer from './components/MainContainer'
import LoginForm from "./components/Login";
import SignUpForm from "./components/SignUp";

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
     
      <Header search={search} setSearch={setSearch}/>
      <MainContainer>
        <ArticleList />
      </MainContainer >
      <LoginForm />
      <SignUpForm />
    </div>
  );
}

export default App;
