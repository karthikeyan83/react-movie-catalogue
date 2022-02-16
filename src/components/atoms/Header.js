import React,{useContext} from "react";
import MovieContext from '../../context/MovieContext';

const Header = (props) => {
  const { selectedMovie } = useContext(MovieContext)
  return (
    <div>
      <p className="h1 text-center bg-primary">{selectedMovie.Title}</p>
    </div>
  );
};

export default Header;
