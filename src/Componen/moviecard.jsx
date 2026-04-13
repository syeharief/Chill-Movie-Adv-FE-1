import React from "react";
import "../assets/Style/moviecard.css";

const MovieCard = ({ image, title, variant = "portrait" }) => {
  return (
    <div className={`movie-card ${variant}`}>
      <img src={image} alt={title} />
      <div className="movie-overlay">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
