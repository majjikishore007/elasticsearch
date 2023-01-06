import React from 'react';

const Card = ({ movie }) => {
  return (
    <div className='card'>
      <img
        src={movie._source.poster_url}
        alt={movie._source.name}
        className='card-img-top'
      />
      <div className='card-body'>
        <h5 className='card-tile'>{movie._source.name}</h5>
        <p>Actors: {movie._source.actors}</p>
        <p>Genre: {movie._source.genre}</p>
        <p>Release Date: {movie._source.release_date}</p>
      </div>
    </div>
  );
};

export default Card;
