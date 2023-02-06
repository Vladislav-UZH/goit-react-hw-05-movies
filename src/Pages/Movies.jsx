import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import SearchMovieBox from 'components/SearchMovieBox';
import { fetchMovieByQuery } from 'Helpers/fetchApi';
// import toast, { Toaster } from 'react-hot-toast';

// import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  const updateQueryString = name => {
    const nextParams = !name ? {} : { name };
    setSearchParams(nextParams);
  };
  // useEffect(() => {
  const getMovieByName = async name => {
    try {
      setIsLoading(true);
      if (!name) {
        //   toast.error('Enter the movie name!');
        //   return <Toaster />;
        return;
      }
      updateQueryString(name);
      const serialized = name.toLowerCase().trim();
      const resp = await fetchMovieByQuery(serialized);
      setMovies(resp.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  //   getMovieByName();
  // },[searchParams]);

  return (
    <>
      <SearchMovieBox searchParams={searchParams} onSubmit={getMovieByName} />
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </>
  );
};
export default Movies;
