import Link from 'next/link'
import {
  FooterTop,
  FooterBottom
} from './Styled'

const Footer = () => {
  return (
    <footer>
    <FooterTop>
      <Link href='/job'>
        <a>Bolsa de trabajo</a>
      </Link>
    </FooterTop>
    <FooterBottom>
      <p>Lagalm 2022 @ Todos los derechos reservados.</p>
    </FooterBottom>
    </footer>
  );
}

export default Footer;