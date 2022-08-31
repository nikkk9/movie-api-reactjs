import React, { useEffect, useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import axios from "axios";

const App = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("https://swapi.dev/api/films");
      console.log(data);
      const transformed = data.results.map((item) => {
        return {
          id: item.episode_id,
          title: item.title,
          release: item.release_date,
          openingTxt: item.opening_crawl,
        };
      });
      // setMovie(data.results);
      setMovie(transformed);
    } catch (error) {
      alert("something went wrong!");
    }
    setIsLoading(false);
  };

  // fetchMovies function will call when app component load for the very first time
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="app">
      <div className="btn">
        <button onClick={fetchMovies}>Fetch Movies</button>
      </div>
      <div className="movieComponent">
        {isLoading && <p>Loading...</p>}
        {!isLoading && movie.length === 0 && <p>Found no movies</p>}
        {!isLoading && movie.length > 0 && <MoviesList movies={movie} />}
      </div>
    </div>
  );
};

export default App;
