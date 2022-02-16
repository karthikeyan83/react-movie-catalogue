import React, {
  createContext, useEffect, useState,
} from 'react';

const MovieContext = createContext(null);

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


export const withLoader = Component => props => (
  <MovieContext.Consumer>
    {loader => <Component loader={loader} {...props} />}
  </MovieContext.Consumer>
);

export default MovieContext;
