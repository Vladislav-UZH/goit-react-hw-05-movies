import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const delay = `300ms`;
const globalAnim = `
    cubic-bezier(.06,.57,.52,.97) ${delay}
`;
const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;
const Header = styled.header`
  padding: 40px 0;
  background-color: #32343b;
`;
const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled(NavLink)`
  position: relative;
  display: block;

  transition: color ${globalAnim}, transform ${globalAnim};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    display: inline-block;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: transform ${globalAnim};
    background-color: #e2580a;
  }
  &.active {
    color: #e2580a;
    transform: scale(1.1);
  }
  &.active::after {
    transform: scaleX(1);
  }
  &:hover::after {
    transform: scaleX(1);
  }
  &:not(.active):hover {
    color: #e2580a;
  }
`;
export { Container, Header, Nav, StyledLink };
// 22232B
// 32343B
// DBD7D7
// E2580A
// D3560F
