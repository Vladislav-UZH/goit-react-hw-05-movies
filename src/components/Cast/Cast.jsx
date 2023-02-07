import Image from 'components/Image';
import { fetchMovieDetsById } from 'Helpers/fetchApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [casting, setCasting] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const controller = new AbortController();
    const option = { signal: controller.signal };
    const getCastInfo = async () => {
      try {
        const resp = await fetchMovieDetsById(movieId, `/credits`, option);
        setCasting(resp);
      } catch (error) {
        console.log(error);
      }
    };
    getCastInfo();
    return () => controller.abort();
  }, [movieId]);
  return (
    <ul>
      {casting &&
        casting.cast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <Image
                imgLink={profile_path}
                alt={name}
                size={{ width: 200, height: 300 }}
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
