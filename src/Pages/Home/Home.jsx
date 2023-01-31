import TrendingList from 'components/TrendingList';
import { fetchApi } from 'Helpers/fetchApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { Main } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const resp = await fetchApi();
        setMovies([...resp.results]);
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <Main>{movies.length && <TrendingList movies={movies} />}</Main>
    </>
  );
};
