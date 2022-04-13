import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
  height: 80px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

export default function Navbar() {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLink>Lagalm</StyledLink>
        </Link>
      </div>
      <div>
        <Link href='/' passHref>
          <StyledLink>Incio</StyledLink>
        </Link>
        <Link href='/about' passHref>
          <StyledLink>Nosotros</StyledLink>
        </Link>
        <Link href='/contact' passHref>
          <StyledLink>Contacto</StyledLink>
        </Link>
      </div>
    </Nav>
  );
}