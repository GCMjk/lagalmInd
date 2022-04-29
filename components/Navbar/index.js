import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Nav,
  Logo,
  MobileIcon,
  Menu
} from './Styled'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav>
        <div className='nav__container'>

          <Logo href='/'>
            <Image
              src='/lagalm.svg'
              alt='Lagalm Industrial'
              width={50} height={50} />
          </Logo>
          
          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <Menu>
            <Link href='/'>
              <a className='menu__link'>
                Inicio
              </a>
            </Link>

            <Link href='/about'>
              <a className='menu__link'>
                Nosotros
              </a>
            </Link>

            <Link href='/contact'>
              <a className='menu__link'>
                Contacto
              </a>
            </Link>
          </Menu>

        </div>
      </Nav>
    </>
  );
};

export default Navbar;