import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("https://localhost:3000/actors")
      .then((res) => res.json())
      .then(setActors);
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li key={movie.id}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
      </div>
  );
}

export default Actors;
