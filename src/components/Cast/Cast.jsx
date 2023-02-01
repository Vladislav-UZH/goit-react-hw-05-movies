import { fetchMovieDetsById } from 'Helpers/fetchApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [casting, setCasting] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getCastInfo = async () => {
      try {
        const resp = await fetchMovieDetsById(movieId, `/credits`);
        setCasting(resp);
      } catch (error) {
        console.log(error);
      }
    };
    getCastInfo();
  }, [movieId]);

  return <div>hadsgzg</div>;
};
export default Cast;
