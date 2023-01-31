import { NavLink, useParams } from 'react-router-dom';

import { Item, Thumb, FilmWrapper, Title } from './TrendingItem.styled';
const TrendingItem = ({ poster, title }) => {
  useParams();
  return (
    <Item>
      <NavLink to="/movies/:id">
        <Thumb>
          <img src={`https://image.tmdb.org/t/p/w400/${poster}`} alt="" />
        </Thumb>
        <FilmWrapper>
          <Title>{title}</Title>
        </FilmWrapper>
      </NavLink>
    </Item>
  );
};
export default TrendingItem;
