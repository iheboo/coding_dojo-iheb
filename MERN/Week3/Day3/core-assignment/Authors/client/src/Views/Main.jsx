import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthorList from '../components/AuthorList';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [authors, setAuthors] = useState([]);

  // GET ALL AUTHORS
  useEffect(() => {
    axios.get('http://localhost:5000/api/authors/').then((res) => {
      setAuthors(res.data);
      setIsLoading(false);
    });
  }, []);

  // DELETE AUTHOR
  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/authors/${id}`)
      .then(() => console.log('Author deleted'))
      .catch((err) => console.log(err));
  };

  // DELETE FROM DOM
  const deleteFromDom = (id) => {
    setAuthors(authors.filter((author) => author._id !== id));
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Favorite Authors</h1>
      <Link to="/create">Add New Author</Link>
      <p>We Have Quotes By:</p>
      <AuthorList
        authors={authors}
        deleteHandler={deleteHandler}
        deleteFromDom={deleteFromDom}
      />
    </>
  );
};

export default Main;
