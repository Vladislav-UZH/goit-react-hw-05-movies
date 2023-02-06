import { NavLink } from 'react-router-dom';
import { root } from 'jsStyledRoot/styledRoot';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 50px 15px;
  background-color: #32343b;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.h2``;
const UserScore = styled.span`
  color: ${root.orange};
  display: flex;
  gap: 5px;
`;
const Vote = styled.p`
  font-weight: 500;
  color: ${root.text};
`;

const OverviewWrapper = styled.div``;
const OverviewLabel = styled.h3`
  color: ${root.orange};
  margin-bottom: 5px;
`;
const Overview = styled.p``;

const GenresWrapper = styled.div``;
const GenresLabel = styled.p`
  font-weight: 600;
  color: ${root.orange};
`;
const GenresList = styled.ul`
  display: flex;
  gap: 5px;
`;
const GenresItem = styled.li`
  font-weight: 700;
`;

const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const AdditionalInfoLabel = styled.p``;
const Navigation = styled.ul`
  display: flex;
  gap: 10px;
`;
const StyledLink = styled(NavLink)`
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 600;
  color: ${root.orange};
  transition: outline ${root.globalAnim}, color ${root.globalAnim};
  border-radius: 10px;
  &:hover,
  :focus {
    outline: 1px solid ${root.orange};
    color: ${root.subTextColor};
  }
`;

export {
  Title,
  Container,
  Wrapper,
  UserScore,
  Vote,
  OverviewWrapper,
  OverviewLabel,
  Overview,
  GenresList,
  GenresItem,
  AdditionalInfoWrapper,
  AdditionalInfoLabel,
  Navigation,
  StyledLink,
  GenresWrapper,
  GenresLabel,
  ContentWrapper,
};
