import TrendingItem from './TrendingItem';
import { List } from './TrendingList.styled';
const TrendingList = ({ movies }) => {
  console.log(movies);
  return (
    <List>
      {' '}
      {movies.map(({ poster_path, id, overview, title }) => {
        return <TrendingItem key={id} poster={poster_path} title={title} />;
      })}
    </List>
  );
};
export default TrendingList;
