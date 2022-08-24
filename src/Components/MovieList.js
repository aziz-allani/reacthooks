import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({ movies, filterName, searchRate }) => {
  return (
    <div className="movie-list">
      {movies
        .filter((movie) =>
          movie.name
            .toLowerCase()
            .trim()
            .includes(filterName.toLowerCase().trim()) &&
          movie.rating >= searchRate

        )
        .map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} key={movie.id} />
          </div>
        ))}
    </div>
  );
};

export default MovieList;
