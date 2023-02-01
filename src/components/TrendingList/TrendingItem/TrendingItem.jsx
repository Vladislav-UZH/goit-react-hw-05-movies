// import { useParams } from 'react-router-dom';

import {
  Item,
  Thumb,
  FilmWrapper,
  Title,
  MovieLink,
} from './TrendingItem.styled';
const TrendingItem = ({ poster, title, id }) => {
  // const { movieId } = useParams();
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
export default TrendingItem;
