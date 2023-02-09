import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import SearchMovieBox from 'components/SearchMovieBox';
import { fetchMovieByQuery } from 'Helpers/fetchApi';
// import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [nameHistory, setNameHistory] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(location.search);
  const movieName = searchParams.get('name') ?? '';
  console.log(movieName);
  useEffect(() => {
    const controller = new AbortController();
    const option = { signal: controller.signal };
    const getMovieByName = async name => {
      try {
        setIsLoading(true);
        if (!name) {
          return;
        }
        const serialized = name.toLowerCase().trim();
        const resp = await fetchMovieByQuery(serialized, option);
        setMovies(resp.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieByName(movieName);
    return () => controller.abort();
  }, [movieName]);

  const updateQueryString = name => {
    const nextParams = !name ? {} : { name };
    setSearchParams(nextParams);
  };

  const handleSubmit = name => {
    if (!name) {
      return;
    }
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
