import MovieList from 'components/MovieList';
import SearchMovieBox from 'components/SearchMovieBox';
import { fetchMovieByQuery } from 'Helpers/fetchApi';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  const updateQueryString = name => {
    const nextParams = !name ? {} : { name };
    setSearchParams(nextParams);
  };

  const getMovieByName = async name => {
    try {
      updateQueryString(name);
      const serialized = name.toLowerCase().trim();
      const resp = await fetchMovieByQuery(serialized);
      setMovies(resp.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchMovieBox searchParams={searchParams} onSubmit={getMovieByName} />
      <MovieList movies={movies} />
    </>
  );
};
export default Movies;
