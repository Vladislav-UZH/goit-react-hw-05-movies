import BackLink from 'components/BackLink';
import DetailedInfo from 'components/DetailedInfo';
import { fetchMovieDetsById } from 'Helpers/fetchApi';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const navigate = useNavigate();
  const locRef = useRef(backLinkHref);
  useEffect(() => {
    const controller = new AbortController();
    const option = { signal: controller.signal };
    const getMovieDetails = async () => {
      try {
        const resp = await fetchMovieDetsById(movieId, '', option);
        setMovieDetails(resp);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
    return () => controller.abort();
  }, [movieId]);
  const handleGoBack = () => {
    console.log(navigate(backLinkHref));
  };
  return (
    <>
      <BackLink onClick={handleGoBack} to={locRef.current}>
        Go Back
      </BackLink>
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
export default MovieDetails;
