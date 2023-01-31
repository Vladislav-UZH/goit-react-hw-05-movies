import styled from 'styled-components';

const Item = styled.li`
  flex-basis: auto;
`;
const Thumb = styled.div`
  margin: 0;
  width: 365px;
  height: 450px;
`;
const FilmWrapper = styled.div`
  padding: 20px 20px;
  border-radius: 0 0 10px 10px;
  background-color: #32343b;
`;
const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #e2580a;
`;
export { Thumb, Item, FilmWrapper, Title };
