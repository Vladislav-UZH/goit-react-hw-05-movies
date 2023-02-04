// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const BackLink = ({ to, children }) => {
  return <NavLink to={to}>{children}</NavLink>;
};
BackLink.propTypes = {};
export default BackLink;
