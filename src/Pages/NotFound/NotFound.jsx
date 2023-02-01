import { Container } from 'components/App/App.styled';
import Notification from 'components/Notification';
import { Main } from '../Home/Home.styled';
import { ThumbGif, MessageError } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Main>
      <Container>
        <Notification>
          <MessageError>Error 404.. Page Not Found!</MessageError>
          <ThumbGif />
        </Notification>
      </Container>
    </Main>
  );
};
