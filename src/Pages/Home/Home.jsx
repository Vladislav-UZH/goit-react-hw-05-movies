import Loader from 'components/Loader';
// import Notification from 'components/Notification';
import TrendingList from 'components/TrendingList';
import { fetchApi } from 'Helpers/fetchApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { Main } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const resp = await fetchApi();
        setMovies([...resp.results]);
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
      <Main>
        {isLoading ? <Loader /> : <TrendingList movies={movies} />}

        {/* {true && <Loader />}
        {!!movies.length ? (
          <TrendingList movies={movies} />
        ) : (
          <Notification title="Nothing here.. Try again later!" />
        )} */}
      </Main>
    </>
  );
};
