import Image from 'components/Image';
import { Item, FilmWrapper, Title, MovieLink } from './MovieItem.styled';
const MovieItem = ({ poster, title, id }) => {
  return (
    <Item>
      <MovieLink to={`/movies/${id}`}>
        <Image
          imgLink={poster}
          alt={title}
          size={{ width: '365px', height: '450px' }}
        />

        <FilmWrapper>
          <Title>"{title}"</Title>
        </FilmWrapper>
      </MovieLink>
    </Item>
  );
};
export default MovieItem;
