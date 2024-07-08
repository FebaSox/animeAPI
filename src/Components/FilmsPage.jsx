import { useEffect, useState } from "react";
import "../App.css";
function FilmsPage() {
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay.");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);
      })

      .catch(() => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h1> Studio Ghibli Films</h1>
      <div className="sort-buttons">
        <button onClick={() => handleSort("title")}>Sort By Title</button>
        <button onClick={() => handleSort("director")}>Sort By Director</button>
        <button onClick={() => handleSort("rt_score")}>Sort By Rating</button>
      </div>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <strong>{movie.title}</strong> by {movie.director} (Rating:{" "}
              {movie.rt_score})
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
