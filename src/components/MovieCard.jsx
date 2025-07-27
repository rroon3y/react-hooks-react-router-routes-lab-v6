import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ title, id }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
      </Link>
    </div>
    );
    }

    export default MovieCard;