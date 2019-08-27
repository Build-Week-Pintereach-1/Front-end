import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import MainContainer from './components/MainContainer'

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch}/>
      <MainContainer />
    </div>
  );
}

export default App;
