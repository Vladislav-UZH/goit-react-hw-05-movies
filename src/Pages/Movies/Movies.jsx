import MovieList from 'components/MovieList';
import SearchMovieBox from 'components/SearchMovieBox';
import { fetchMovieByQuery } from 'Helpers/fetchApi';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';
  // const visibleMovie =
  const updateQueryString = name => {
    const nextParams = !name ? {} : { name };
    setSearchParams(nextParams);
  };

  const getMovieByName = async name => {
    console.log(name);
    try {
      const serialized = name.toLowerCase().trim();

      const resp = await fetchMovieByQuery(serialized);
      setMovies(resp.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movies);

  return (
    <>
      <SearchMovieBox
        value={movieName}
        onSubmit={getMovieByName}
        onChange={updateQueryString}
      />
      {movies && <MovieList movies={movies} />}
    </>
  );
};
