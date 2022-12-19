import React from 'react';
import { Link } from 'react-router-dom';

const AuthorList = ({ authors, deleteHandler, deleteFromDom }) => {
  // (props) => const {authors} = props;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => {
            return (
              <tr key={author._id}>
                <td>{author.name}</td>
                <td>
                  <Link to={`/edit/${author._id}`}>Update</Link> |
                  <Link to={`/details/${author._id}`}>Details</Link> |
                  <button
                    onClick={() => {
                      deleteHandler(author._id);
                      deleteFromDom(author._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AuthorList;