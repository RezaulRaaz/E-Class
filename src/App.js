import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Pages/Courses/Main/Main';

function App() {
  return (
    <div className="App">
       <div className="top-area bg-dark">
        <div className="container">
            <Header></Header>
        </div>
       </div>
       <Main></Main>
    </div>
  );
}

export default App;
