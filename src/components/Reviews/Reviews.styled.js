import styled from 'styled-components';
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0 0 0;
  padding: 10px 20px;
  background-color: #32343b;
`;
const Item = styled.li``;
const TextContainer = styled.span`
  color: #e2580a;
`;
const Author = styled.h3`
  color: #d7d7d7;
`;
const Review = styled.p``;
export { List, Item, TextContainer, Author, Review };
