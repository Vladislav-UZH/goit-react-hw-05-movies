import PropTypes from 'prop-types';
import TrendingItem from './TrendingItem';
import { List } from './TrendingList.styled';
const TrendingList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ poster_path, id, overview, title }) => {
        return (
          <TrendingItem key={id} id={id} poster={poster_path} title={title} />
        );
      })}
    </List>
  );
};
TrendingList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default TrendingList;
