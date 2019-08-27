import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import MainContainer from './components/MainContainer'
import ArticleList from './components/ArticleList.js'

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
     
      <Header search={search} setSearch={setSearch}/>
      <MainContainer>
      <ArticleList />
      <MainContainer />

    </div>
  );
}

export default App;
