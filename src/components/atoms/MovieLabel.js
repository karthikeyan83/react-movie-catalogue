import React,{useContext} from "react";
import MovieContext from '../../context/MovieContext';
import "bootstrap/dist/css/bootstrap.min.css";

const MovieLabel = () => {
  const { selectedMovie } = useContext(MovieContext)
  return (
    <h3>{selectedMovie.Title}</h3>
  );
};

export default MovieLabel;
