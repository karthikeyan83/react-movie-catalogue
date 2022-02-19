

import React from 'react'
import { render, cleanup,  fireEvent,screen } from '@testing-library/react'
import { MovieProvider, MovieContext,MovieConsumer } from "./context/MovieContext";
import Header from './components/atoms/Header';
import MoviePoster from './components/atoms/MoviePoster';
import MovieLabel from './components/atoms/MovieLabel';
import MovieInfo from "./components/atoms/MovieInfo";

const renderWithContext = (
  component) => {
  return {
    ...render(
        <MovieProvider value={MovieContext}>
            {component}
        </MovieProvider>)
  }
}

afterEach(cleanup);

it('Checks the Movie Title in the Header', () => {
    const { getByTestId } = renderWithContext(<Header />);
    expect(getByTestId('title')).toHaveTextContent('Iron Man')
});

test("Checks the Selected Movie Year in Context", () => {
  const { getByTestId } = renderWithContext(<MovieInfo />);
  expect(getByTestId(`movieyear`)).toBeInTheDocument(2008);
});

test("Checks the Selected Movie Imdb in Context", () => {
  const { getByTestId } = renderWithContext(<MovieInfo />);
  expect(getByTestId(`movieimdb`)).toBeInTheDocument('tt0371746');
});

test("Checks the Selected Movie Type in Context", () => {
  const { getByTestId } = renderWithContext(<MovieInfo />);
  expect(getByTestId(`movietype`)).toBeInTheDocument('movie');
});

test("Checks the Selected Movie Title in Context", () => {
  const { getByTestId } = renderWithContext(<MovieLabel />);
  expect(getByTestId(`movietitle`)).toBeInTheDocument('Iron Man');
});

test("Checks the Selected Movie Image in Context", () => {
  const { getByTestId } = renderWithContext(<MoviePoster />);
  expect(getByTestId(`movieposter`)).toBeInTheDocument('https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg');
});
