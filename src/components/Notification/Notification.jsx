import PropTypes from 'prop-types';
import { Container, Message } from './Notification.styled';
const Notification = ({ message, children }) => {
  return (
    <Container>{!children ? <Message>{message}</Message> : children}</Container>
  );
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
