import { fetchApi } from 'Helpers/fetchApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const resp = await fetchApi(`/movie/${movieId}`);
        setMovieDetails({ ...resp });
        // console.log(resp);
        // console.log(movieDetails);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [movieId]);
  console.log(movieDetails);
  return (
    <main>
      <div>
        <span>{movieId}</span>
      </div>
    </main>
  );
};
