const TrendingItem = ({ poster, title }) => {
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" />
      <p>{title}</p>
    </li>
  );
};
export default TrendingItem;
