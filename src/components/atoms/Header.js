import React,{useContext} from "react";
import MovieContext from '../../context/MovieContext';

const Header = () => {
  const { selectedMovie  } = useContext(MovieContext)
  return (
    <div>
      <p className="h1 text-center bg-primary" data-testid="title">Iron Man</p>
    </div>
  );
};

export default Header;
