import React,{useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieContext from '../../context/MovieContext';
const MovieItem = (props) => {
  const { selectedMovie } = useContext(MovieContext);
  return (
    <li
      key={props.id}
      index={props.id}
      className={
        props.id === selectedMovie.imdbID
          ? "list-group-item active"
          : "list-group-item"
      }
      onClick ={() => props.handleMovie(props.id)}
    >
      <span>{props.title}</span>
    </li>
  );
};

export default MovieItem;
