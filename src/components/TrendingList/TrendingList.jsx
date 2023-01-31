import TrendingItem from './TrendingItem';

const TrendingList = ({ movies }) => {
  console.log(movies);
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexGrow: 1,
      }}
    >
      {' '}
      {movies.map(({ poster_path, id, overview, title }) => {
        return <TrendingItem key={id} poster={poster_path} title={title} />;
      })}
    </ul>
  );
};
export default TrendingList;
