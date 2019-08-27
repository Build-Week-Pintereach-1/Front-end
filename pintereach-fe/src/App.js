import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import MainContainer from './components/MainContainer';
import ArticleList from './components/ArticleList.js';

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
     
<<<<<<< HEAD
      <Header search={search} setSearch={setSearch} />
      <MainContainer>
       <ArticleList />
      </ MainContainer>
    
=======
      <Header search={search} setSearch={setSearch}/>
      <ArticleList search={search}/>

>>>>>>> aba21a007263bae2731eeeea68431917b284dcfc
    </div>
  );
}

export default App;
