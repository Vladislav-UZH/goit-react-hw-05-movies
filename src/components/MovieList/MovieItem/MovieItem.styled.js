import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// const items = 3;
// const indent = '20px';
const Item = styled.li``;
// flex-basis: calc((100% - ${indent} * ${items} - 1) / ${items});
const Thumb = styled.div`
  margin: 0;
  width: 365px;
  height: 450px;
`;
const MovieLink = styled(NavLink)`
  &:hover,
  :focus {
    transform: scale(1.2);
  }
`;
const FilmWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* min-height: calc(106px - 40px); */
  padding: 20px 20px;
  border-radius: 0 0 10px 10px;
  background-color: #32343b;
`;
const Title = styled.p`
  max-width: calc(365px - 40px);
  font-size: 18px;
  font-weight: 600;
  color: #e2580a;
`;
export { Thumb, Item, FilmWrapper, Title, MovieLink };
