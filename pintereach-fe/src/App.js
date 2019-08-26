import React from 'react';
import './App.css';

import Header from './components/Header';
import MainContainer from './components/MainContainer'
import ArticleList from './components/ArticleList.js'

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <ArticleList />
    </div>
  );
}

export default App;
