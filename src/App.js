import logo from './logo.svg';
import './App.css';
import Header from './components/atoms/Header';
import MovieCatalogue from './components/organisms/MovieCatalogue';
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <div className="App">
      <MovieProvider>
              <Header/>
              <MovieCatalogue />
      </MovieProvider>
    </div>
  );
}

export default App;
