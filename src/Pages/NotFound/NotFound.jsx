import Notification from 'components/Notification';
import { ThumbGif, MessageError } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Notification>
      <MessageError>Error 404.. Page Not Found!</MessageError>
      <ThumbGif />
    </Notification>
  );
};
