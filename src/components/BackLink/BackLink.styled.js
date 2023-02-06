import { NavLink } from 'react-router-dom';
import { root } from 'jsStyledRoot/styledRoot';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 600;
  color: ${root.orange};
  transition: background-color ${root.globalAnim}, color ${root.globalAnim};
  border-radius: 10px 10px 0 0;
  &:hover,
  :focus {
    /* outline: 1px solid ${root.orange}; */
    color: ${root.subTextColor};
    background-color: ${root.mainElementBg};
  }
`;
export { StyledLink };
