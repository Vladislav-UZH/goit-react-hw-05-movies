import { FiFilm } from 'react-icons/fi';
import { Routes, Route } from 'react-router-dom';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';
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
              <StyledLink to="/Movies">Movies</StyledLink>
            </Nav>
          </FlexWrapper>
        </Container>
      </Header>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />}></Route>
        </Routes>
      </Container>
    </>
  );
};
