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
  // console.log(casting);
  return (
    <ul>
      {casting.cast.map(({ name, character, profile_path }) => {
        return (
          <li key={name}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w400/${profile_path}`}
                alt={name}
              />
            </div>
            <p>{name}</p>
            <span>{character}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;
