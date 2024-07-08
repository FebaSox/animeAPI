import HomePage from './Pages/home.page.jsx';
import './App.css';
import FilmsPage from './Pages/films.page.jsx';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

function App() { 

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element ={<HomePage />} />
        <Route path="films" element ={<FilmsPage />} />
      </Routes>
      
  
    
    </BrowserRouter> 
  
    
    
  )
}

export default App
