import Loader from 'components/Loader';
// import Notification from 'components/Notification';
import TrendingList from 'components/MovieList';
import { fetchDayTrend } from 'Helpers/fetchApi';
import { useEffect } from 'react';
import { useState } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const resp = await fetchDayTrend();
        setMovies(resp.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : <TrendingList movies={movies} />}

      {/* {true && <Loader />}
        {!!movies.length ? (
          <TrendingList movies={movies} />
        ) : (
          <Notification title="Nothing here.. Try again later!" />
        )} */}
    </>
  );
};
