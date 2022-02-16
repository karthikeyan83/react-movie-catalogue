import React,{useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieContext from '../../context/MovieContext';
import MovieInfo from "../atoms/MovieInfo";
import MovieLabel from "../atoms/MovieLabel";
import MoviePoster from "../atoms/MoviePoster";

const MoviePreview = () => {
  return (
    <div>
    <MoviePoster />
    <MovieLabel />
    <MovieInfo />
    </div>
  );
};

export default MoviePreview;
