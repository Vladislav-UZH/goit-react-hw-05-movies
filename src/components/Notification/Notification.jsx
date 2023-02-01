import { Container, Message } from './Notification.styled';
const Notification = ({ title, children }) => {
  return (
    <Container>{!children ? <Message>{title}</Message> : children}</Container>
  );
};
export default Notification;
