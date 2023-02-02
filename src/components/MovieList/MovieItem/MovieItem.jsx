import { Item, Thumb, FilmWrapper, Title, MovieLink } from './MovieItem.styled';
const MovieItem = ({ poster, title, id }) => {
  return (
    <Item>
      <MovieLink to={`/movies/${id}`}>
        <Thumb>
          <img src={`https://image.tmdb.org/t/p/w400/${poster}`} alt="" />
        </Thumb>
        <FilmWrapper>
          <Title>"{title}"</Title>
        </FilmWrapper>
      </MovieLink>
    </Item>
  );
};
export default MovieItem;
