import { useState } from "react";
import "./App.css";
import SearchAppBar from "./Components/SearchAppBar";
import MovieList from "./Components/MovieList";
import { movieData } from "./Data";
import AddMovie from "./Components/AddMovie";


function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterName, setFilterName] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <SearchAppBar setFilterName={setFilterName} setSearchRate={setSearchRate} searchRate={searchRate} />
      </div>
      <div className="movie-add">
        <AddMovie movies={movies} setmovies={setMovies} />
      </div>
      <MovieList movies={movies} setMovies={setMovies} filterName={filterName} searchRate={searchRate} />
    </div>
  );
}

export default App;
