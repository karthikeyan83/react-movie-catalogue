import { useState,useEffect,useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "../molecules/MovieList";
import MoviePreview from "../molecules/MoviePreview";
import MovieContext from '../../context/MovieContext';

const MovieCatalogue = () => {
  const {
    setLoading,
    setSelectedMovie,
    setMovieList
  } = useContext(MovieContext);
  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
      .then((res) => res.json())
      .then((response) => {
        setMovieList(response.Search);
        setSelectedMovie(response.Search[0]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row gy-5">
          <div className="col-6">
            <div className="p-3 border bg-light">
              <MoviePreview/>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 border bg-light">
              <MovieList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCatalogue;
