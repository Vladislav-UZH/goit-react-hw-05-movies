import { Item, Thumb, FilmWrapper, Title } from './TrendingItem.styled';

const TrendingItem = ({ poster, title }) => {
  return (
    <Item>
      <Thumb>
        <img src={`https://image.tmdb.org/t/p/w400/${poster}`} alt="" />
      </Thumb>
      <FilmWrapper>
        <Title>{title}</Title>
      </FilmWrapper>
    </Item>
  );
};
export default TrendingItem;
