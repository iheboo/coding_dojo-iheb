import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Views/Main';
import AuthorForm from './Views/AuthorForm';
import EditAuthor from './Views/EditAuthor';
import Details from './Views/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<AuthorForm />} />
        <Route path="/edit/:id" element={<EditAuthor />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

