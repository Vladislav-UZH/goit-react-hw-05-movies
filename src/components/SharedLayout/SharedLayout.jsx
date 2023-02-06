import {
  Container,
  Header,
  Nav,
  StyledLink,
  FlexWrapper,
  LogoWrapper,
  LogoLink,
  Main,
} from './SharedLayout.styled';
import { FiFilm } from 'react-icons/fi';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <FlexWrapper>
            <LogoWrapper>
              <LogoLink to="/">
                <FiFilm size={50} />
                <p>Filmoteka</p>
              </LogoLink>
            </LogoWrapper>
            <Nav>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/movies">Movies</StyledLink>
            </Nav>
          </FlexWrapper>
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </Suspense>
    </>
  );
};
export default SharedLayout;
