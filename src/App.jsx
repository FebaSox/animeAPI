import HomePage from './Components/HomePage.jsx';
import './App.css';
import FilmsPage from './Components/FilmsPage';

function App() { 

  return (
    <>
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
    
    <main>
    <HomePage />
    <FilmsPage />
    </main>
    
    </>
  )
}

export default App
