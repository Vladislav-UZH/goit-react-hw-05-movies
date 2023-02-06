import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
// import Notification from 'components/Notification';
import Loader from 'components/Loader';
import {
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
} from './DetailedInfo.styled';
import Image from 'components/Image';
const DetailedInfo = ({
  title,
  genres,
  overview,
  vote_average,
  backdrop_path,
}) => {
  const getAveragePercentageVote = averageVote => {
    const result = Number((averageVote * 10).toFixed(1));
    const stringed = String(result);
    return stringed;
  };

  return (
    <Container>
      {' '}
      <Wrapper>
        <Image
          size={{ width: 400, height: 225 }}
          imgLink={backdrop_path}
          alt={title}
        />

        <ContentWrapper>
          <Title>{title}</Title>
          <UserScore>
            User score:
            <Vote>{getAveragePercentageVote(vote_average)}%</Vote>
          </UserScore>
          <OverviewWrapper>
            <OverviewLabel>Overview</OverviewLabel>
            <Overview>{overview}</Overview>
          </OverviewWrapper>
          <GenresWrapper>
            <GenresLabel>Genres:</GenresLabel>
            <GenresList>
              {genres.map(({ name, id }) => {
                return <GenresItem key={id}>{name}</GenresItem>;
              })}
            </GenresList>
          </GenresWrapper>
        </ContentWrapper>
      </Wrapper>
      <AdditionalInfoWrapper>
        <AdditionalInfoLabel>Additional information</AdditionalInfoLabel>
        <Navigation>
          <li>
            <StyledLink to={`cast`}>Cast</StyledLink>
          </li>
          <li>
            <StyledLink to={`reviews`}>Reviews</StyledLink>
          </li>
        </Navigation>
        <Suspense fallback={<Loader /> /*<Notification title="Loading.." />*/}>
          <Outlet />
        </Suspense>
      </AdditionalInfoWrapper>
    </Container>
  );
};

DetailedInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  backdrop_path: PropTypes.string.isRequired,
};
export default DetailedInfo;
