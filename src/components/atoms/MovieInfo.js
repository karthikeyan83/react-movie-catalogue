import React,{useContext} from "react";
import MovieContext from '../../context/MovieContext';
import "bootstrap/dist/css/bootstrap.min.css";

const MovieInfo = () => {
  const { selectedMovie } = useContext(MovieContext)
  return (
    <>
    <div data-testid="movieyear">
      {selectedMovie.Year}
    </div>
    <div data-testid="movieimdb">
      {selectedMovie.imdbID}
    </div>
    <div data-testid="movietype">
      {selectedMovie.Type}
    </div>
    <style jsx>
        {`
          .moviename,
          .imbdno {
            text-transform: capitalize;
          }
        `}
      </style>
    </>

  );
};

export default MovieInfo;
