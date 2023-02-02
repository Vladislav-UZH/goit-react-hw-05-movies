import Image from 'components/Image';
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
  return (
    <ul>
      {casting &&
        casting.cast.map(({ name, character, profile_path }) => {
          return (
            <li key={name}>
              <Image
                imgLink={profile_path}
                alt={name}
                size={{ width: '365px', height: '450px' }}
              />

              <p>{name}</p>
              <span>{character}</span>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
