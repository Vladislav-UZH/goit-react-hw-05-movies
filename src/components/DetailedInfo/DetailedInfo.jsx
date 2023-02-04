import { NavLink, Outlet } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Suspense } from 'react';
import Notification from 'components/Notification';
const DetailedInfo = ({
  title,
  genres,
  overview,
  vote_average,
  backdrop_path,
}) => {
  const getAveragePercentageVote = averageVote => {
    const result = Number((averageVote * 10).toFixed(1));
    const stringed = String(result);
    return stringed;
  };
  return (
    <div>
      <div style={{ width: 400 }}>
        <img
          src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
          alt={title}
        />
      </div>
      <div>
        <h2>{title}</h2>
        <span>
          User score:
          <p>{getAveragePercentageVote(vote_average)} %</p>
        </span>
        <div>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
        <div>
          <h4>Genres</h4>
          <ul>
            {genres.map(({ name, id }) => {
              return <li key={id}>{name}</li>;
            })}
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
        </ul>
        <Suspense fallback={<Notification title="Loading.." />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

DetailedInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  backdrop_path: PropTypes.string.isRequired,
};
export default DetailedInfo;
