import {
  FooterTop,
  FooterLink,
  FooterBottom
} from './Elements'

const Footer = () => {
  return (
    <footer>
    <FooterTop>
      <FooterLink href='/job'>
        <a>Bolsa de trabajo</a>
      </FooterLink>
    </FooterTop>
    <FooterBottom>
      <p>Lagalm 2022 @ Todos los derechos reservados.</p>
    </FooterBottom>
    </footer>
  );
}

export default Footer;