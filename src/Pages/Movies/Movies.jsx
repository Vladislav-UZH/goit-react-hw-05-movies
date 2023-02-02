import SearchMovieBox from 'components/SearchMovieBox/SearchMovieBox';
// import { useEffect,useState } from "react";
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';
  // const visibleMovie =
  const updateQuerySting = name => {
    const nextParams = !name ? {} : { name };
    setSearchParams(nextParams);
  };
  console.log('is looped?');

  return <SearchMovieBox value={movieName} onChange={updateQuerySting} />;
};
