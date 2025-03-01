import React from 'react';
import { Router, Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Notes from './components/Notes.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/Signup.jsx';
import Welcome from './components/Welcome.jsx';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
