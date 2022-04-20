import styled from 'styled-components'
import Link from 'next/link'

export const FooterTop = styled.div`
  background: #000;
  color: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLink = styled(Link)`
  
`;

export const FooterBottom = styled.div`
  background: #333;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  p {
    color: #fff;
  }
`;