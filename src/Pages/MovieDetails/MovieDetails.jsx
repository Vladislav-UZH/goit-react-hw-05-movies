import { fetchMovieDetsById } from 'Helpers/fetchApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
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
  // console.log(movieDetails);
  // const { title, genres, overview, vote_average, backdrop_path } = movieDetails;
  // console.log(movieDetails.genres);
  return (
    <main>
      <div>
        <div style={{ width: 400 }}>
          <img
            src={`https://image.tmdb.org/t/p/w400/${movieDetails.backdrop_path}`}
            alt=""
          />
        </div>
        <div>
          <h2>{movieDetails.title}</h2>
          <span>
            User score:
            {/* <p>{toString(Number(movieDetails.vote_average * 10))}</p> */}
          </span>
          <div>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
          </div>
          <div>
            <h4>Genres</h4>
            <ul>
              {/* {movieDetails.genres.map(({ name, id }) => {
                return <li key={id}>{name}</li>;
              })} */}
            </ul>
          </div>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`reviews`}>Reviews</NavLink>
            </li>
            <Outlet />
          </ul>
        </div>
      </div>
    </main>
  );
};
