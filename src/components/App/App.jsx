import { Routes, Route } from 'react-router-dom';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';
import { Container, Header, Nav, StyledLink } from './App.styled';
export const App = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/Movies">Movies</StyledLink>
          </Nav>
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
