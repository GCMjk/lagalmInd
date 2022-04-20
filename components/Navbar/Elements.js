import styled from 'styled-components'
import theme from '../../styles/theme';
import Link from 'next/link';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 80px;
  margin-top: -80px;
  font-size: 1rem;
  background: ${theme.colors.muted};
  transition: 0.8s all ease;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  z-index: 1;
`;

export const NavLogo = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  height: 80px;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  font-size: .8rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: ${theme.colors.white};
  cursor: pointer;
  transition: 0.8s all ease;

  :hover {
    color: ${theme.colors.light};
  }
`;