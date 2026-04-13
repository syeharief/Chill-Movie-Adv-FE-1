import React from "react";
import MovieCard from "../Componen/moviecard";
import "../assets/Style/movierow.css";

const MovieRow = ({ title, movies, variant }) => {
  return (
    <div className="movie-row">

      <h2>{title}</h2>

      <div className="movie-row-container">

        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            image={movie.image}
            title={movie.title}
            variant={variant}
          />
        ))}

      </div>

    </div>
  );
};

export default MovieRow;
