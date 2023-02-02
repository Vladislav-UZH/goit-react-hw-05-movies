import PropTypes from 'prop-types';
const Button = ({
  type = 'button',
  text = 'Search',
  variant = 'default',
  children,
}) => {
  return (
    <Button type={type} variant={variant}>
      {text} {children}{' '}
    </Button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  variant: PropTypes.string.isRequired,
};
export default Button;
