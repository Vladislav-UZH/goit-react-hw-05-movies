import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const delay = `300ms`;
const globalAnim = `
    cubic-bezier(.06,.57,.52,.97) ${delay}
`;
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;
const Header = styled.header`
  padding: 40px 0;
  background-color: #32343b;
  border-bottom: 1px solid #e2580a;
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoWrapper = styled.div`
  margin-right: auto;
`;
const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
  font-size: 32px;
  font-weight: 700;
`;
const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: flex-start;
`;

const StyledLink = styled(NavLink)`
  position: relative;
  display: block;
  font-size: 18px;
  font-weight: 600;
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
export {
  Container,
  Header,
  Nav,
  StyledLink,
  FlexWrapper,
  LogoWrapper,
  LogoLink,
};
// 22232B
// 32343B
// DBD7D7
// E2580A
// D3560F
