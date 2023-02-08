import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import SearchMovieBox from 'components/SearchMovieBox';
import { fetchMovieByQuery } from 'Helpers/fetchApi';
// import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [nameHistory, setNameHistory] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(location.search);

  useEffect(() => {
    const getMovieByName = async name => {
      try {
        setIsLoading(true);
        if (!name) {
          return;
        }
        const serialized = name.toLowerCase().trim();
        const resp = await fetchMovieByQuery(serialized);
        setMovies(resp.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieByName(nameHistory);
  }, [nameHistory]);

  const updateQueryString = name => {
    const nextParams = !name ? {} : { name };
    setSearchParams(nextParams);
  };
  const handleSubmit = name => {
    if (!name) {
      return;
    }
    setNameHistory(name);
    console.log(nameHistory);
    updateQueryString(name);
  };

  return (
    <>
      <SearchMovieBox searchParams={searchParams} onSubmit={handleSubmit} />
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </>
  );
};
export default Movies;
