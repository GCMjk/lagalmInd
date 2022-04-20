import React, { useState } from 'react'
import Image from 'next/image'
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink
} from './Elements'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavContainer>

          <NavLogo href='/'>
            <Image
              src='/lagalm.svg'
              alt='Lagalm Industrial'
              width={50} height={50} />
          </NavLogo>
          
          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <NavMenu>

            <NavItem href='/'>
              <NavLink>Inicio</NavLink>
            </NavItem>
            <NavItem href='/about'>
              <NavLink>Nosotros</NavLink>
            </NavItem>
            <NavItem href='/contact'>
              <NavLink>Contacto</NavLink>
            </NavItem>

          </NavMenu>

        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;