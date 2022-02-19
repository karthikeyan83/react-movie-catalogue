import React, {
  createContext, useState,
} from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState({});
  const [selectedMovie, setSelectedMovie] = useState({});
  return (
    <MovieContext.Provider
      value={{
        loading,
        setLoading,
        movieList,
        setMovieList,
        selectedMovie,
        setSelectedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContext;
