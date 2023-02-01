import { FiFilm } from 'react-icons/fi';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'Pages/Home/Home';
import { Movies } from 'Pages/Movies/Movies';
import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
import { NotFound } from 'Pages/NotFound/NotFound';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import {
  Container,
  Header,
  Nav,
  StyledLink,
  FlexWrapper,
  LogoWrapper,
  LogoLink,
} from './App.styled';

export const App = () => {
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
      <Container>
        <Routes>
          <Route path="/" element={<Home />} end />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
