import React,{useContext} from "react";
import MovieContext from '../../context/MovieContext';
import "bootstrap/dist/css/bootstrap.min.css";


const MoviePoster = () => {
  const { selectedMovie } = useContext(MovieContext)
  return (
    <>
      <h6 className="card-subtitle mb-2 text-muted" data-testid="movieposter">
        <img src={selectedMovie?.Poster} alt="Logo" className="img-thumbnail" />
      </h6>
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

export default MoviePoster;
