import './HomePage.css';

function HomePage() {
  return (
       <>
    <h1> Movie WatchList </h1>
    <form id="form">
      <label HTMLfor="">Enter Movie to Watch later</label> 
      <input type="text" name="movieInput" id="movieInput" />
      <button type="submit">Add Movie</button> 
    </form>
    <ul id ="watchlist">
  <li>
    <p>Garfield </p>
  </li>
  <li>
    <p>Jurastic Park</p>
  </li>
  <li>
    <p>Mrs. Doubtfire </p>
  </li>
</ul>
  </>
  )
}

  
export default HomePage;
