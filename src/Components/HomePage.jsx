import { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [movieTitle, setMovieTitle] = useState("");
  const [list, setList] = useState([]);


return (
  <>
    <h1> Movie's</h1>
    <form onSubmit={(submitEvent) => {
      submitEvent.preventDefault();
      const copyArr = Array.from(setList);
      setList(copyArr);
        setList([...list, movieTitle]);
        setName("");
      }}
    >
      <label HTMLfor="movieInput">Enter Movie to Watch later</label>
      <input
        type="text"
        name="movieInput"
        id="movieInput"
        value={movieTitle}
        onChange={(changeEvent) => {
          setMovieTitle(changeEvent.target.value);
        }}
      />
      <button>Add Movie</button> 
    </form>

    <ul id="list">
      {list.map((title, index) => {
        return <li key={index}>{title}</li>;
      })}
      <li>
        <p> Garfield </p>
      </li>
      <li>
        <p>Jurastic Park </p>
      </li>
      <li>
        <p> Elden Ring Live Movie </p>
      </li>
    </ul>
  </>
);
}

export default HomePage;
