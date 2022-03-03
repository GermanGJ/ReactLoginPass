import React from 'react';

import { Home } from './pages/Home';
import { Navbar } from "./components/Navbar";
import { Login } from './pages/Login';
import { Post } from './pages/Post';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;