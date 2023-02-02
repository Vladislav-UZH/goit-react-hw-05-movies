import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';
const Button = ({
  type = 'button',
  text = 'Search',
  variant = 'default',
  children,
}) => {
  return (
    <ButtonStyled type={type} variant={variant}>
      {text} {children}
    </ButtonStyled>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  variant: PropTypes.string.isRequired,
};
export default Button;
