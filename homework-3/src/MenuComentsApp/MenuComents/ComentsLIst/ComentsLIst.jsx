import React from 'react';

const ComentsList = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item.id}>
        <p>{item.coment} </p>
        <span>{item.rating}</span>
      </li>
    ))}
  </ul>
);

export default ComentsList;
