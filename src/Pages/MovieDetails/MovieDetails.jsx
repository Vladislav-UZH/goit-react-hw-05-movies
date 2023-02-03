import BackLink from 'components/BackLink';
import DetailedInfo from 'components/DetailedInfo';
import { fetchMovieDetsById } from 'Helpers/fetchApi';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const locRef = useRef(backLinkHref);
  console.log(location.state);

  useEffect(() => {
    const controller = new AbortController();
    const option = { signal: controller.signal };
    const getMovieDetails = async () => {
      try {
        const resp = await fetchMovieDetsById(movieId, option);
        console.log(resp);
        setMovieDetails(resp);
      } catch (error) {
        console.log(error);
      }
    };
    // controller.abort();
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <BackLink to={locRef.current}>Go Back</BackLink>
      {movieDetails && (
        <DetailedInfo
          title={movieDetails.title}
          genres={movieDetails.genres}
          overview={movieDetails.overview}
          vote_average={movieDetails.vote_average}
          backdrop_path={movieDetails.backdrop_path}
        />
      )}
    </>
  );
};
