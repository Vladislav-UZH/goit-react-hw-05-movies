import PropTypes from 'prop-types';
import { StyledLink } from './BackLink.styled';
const BackLink = ({ onClick, to, children }) => {
  // console.log(to);
  return (
    <StyledLink onClick={onClick} to={to}>
      {children}
    </StyledLink>
  );
};
BackLink.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default BackLink;
