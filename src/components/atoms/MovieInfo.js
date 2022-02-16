import React,{useContext} from "react";
import MovieContext from '../../context/MovieContext';
import "bootstrap/dist/css/bootstrap.min.css";

const MovieInfo = () => {
  const { selectedMovie } = useContext(MovieContext)
  return (
    <>
    <div>
      {selectedMovie.Year}
    </div>
    <div>
      {selectedMovie.imdbID}
    </div>
    <div>
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
