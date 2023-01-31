import { Container } from 'components/App/App.styled';
import { Main } from '../Home/Home.styled';
import { ThumbGif, MessageError } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Main>
      <Container>
        <MessageError>Error 404.. Page Not Found!</MessageError>
        <ThumbGif>
          {/* <img src="not-found-tumbleweed.gif" alt="tumbleweed gif" /> */}
        </ThumbGif>
      </Container>
    </Main>
  );
};
