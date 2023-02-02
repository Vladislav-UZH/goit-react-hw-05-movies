import PropTypes from 'prop-types';
import { Container, Message } from './Notification.styled';
const Notification = ({ title, children }) => {
  return (
    <Container>{!children ? <Message>{title}</Message> : children}</Container>
  );
};
Notification.propTypes = {
  title: PropTypes.string,
};
export default Notification;
