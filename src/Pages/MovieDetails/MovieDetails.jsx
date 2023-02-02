import DetailedInfo from 'components/DetailedInfo';
import { fetchMovieDetsById } from 'Helpers/fetchApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const resp = await fetchMovieDetsById(movieId);
        console.log(resp);
        setMovieDetails(resp);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    movieDetails && (
      <DetailedInfo
        title={movieDetails.title}
        genres={movieDetails.genres}
        overview={movieDetails.overview}
        vote_average={movieDetails.vote_average}
        backdrop_path={movieDetails.backdrop_path}
      />
    )
  );
};
