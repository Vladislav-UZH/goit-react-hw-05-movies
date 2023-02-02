import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import { List } from './MovieList.styled';
const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ poster_path, id, overview, title }) => {
        return (
          <MovieItem key={id} id={id} poster={poster_path} title={title} />
        );
      })}
    </List>
  );
};
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default MovieList;
