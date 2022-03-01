import React from 'react';

import { Home } from './pages/Home';
import { Navbar } from "./components/Navbar";
import { Post } from './pages/Post';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Post />
    </div>
  );
}

export default App;