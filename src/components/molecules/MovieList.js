import React,{useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieContext from '../../context/MovieContext';
import MovieItem from '../atoms/MovieItem';

const MovieList = () => {
  const {
    movieList,
    selectedMovie,
    setSelectedMovie,
    loading
  } = useContext(MovieContext);
  const handleMovie = (selected) => {
    const movie = movieList.find(item =>item.imdbID === selected)
    setSelectedMovie(movie)
  }
  if(Object.keys(movieList).length > 0) {
  return (
    <div>
      {movieList.map(({ Poster,Title,Type,Year,imdbID }) => {
        return (
          <MovieItem
            key={imdbID}
            id={imdbID}
            title={Title}
            selected={imdbID === selectedMovie}
            handleMovie={handleMovie}
          />
        );
      })}
    </div>
  );
}
else {
  return  (
    <div/>
  )

}

};

export default MovieList;
