import styled from 'styled-components'

const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterSection>
      <p>Lagalm 2022 @ Todos los derechos reservados.</p>
    </FooterSection>
  );
}