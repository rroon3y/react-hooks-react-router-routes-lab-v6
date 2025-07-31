import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4001/movies/${id}`)
      .then((r) => r.json())
      .then(setMovie)
      .catch((err) => console.error("Failed to fetch movie", err));
  }, [id]);

  if (!movie) return <p>Loading movie...</p>;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </div>
      </main>
    </>
  );
};

export default Movie;