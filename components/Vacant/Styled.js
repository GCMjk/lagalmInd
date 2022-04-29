import styled from 'styled-components'
import theme from '../../styles/theme'

export const Card = styled.div`
  overflow: hidden;

  background: ${theme.colors.white};
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 25px 25px 10px 10px;
  transition: .2s;

  :hover {
    transform: translateY(-.5%);
  }
`;

export const Header = styled.div`
  display: block;
  width: 100%;
  
  .header__image {
    object-fit: cover;
    object-position: center;
    transform: scale(1);
    transition: .3s ease-in-out;

    :hover {
      transform: scale(1.1);
    }
  }

  .header__bottom {

    .header__available {
    margin: 0;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    border-radius: 0px 0px 10px 10px;

    span {
      font-weight: 800;
    }
    
    &--green {
    background: #0a9bb0;
    }

    &--red {
      background: #f96d60;
    }
  }

  }

`;

export const Content = styled.div`
  padding: 1.5rem;

  .content__date {
    margin: 0 0 12px 0;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1rem;
    text-align: right;
    color: #6D6D6D;
  }

  .content__title {
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #000000;
  }

  .content__job {
    margin: 0;
    margin-bottom: 20px;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 1rem;
    text-transform: uppercase;
    color: #8F8F8F;
  }

  .content_description {
    margin: 0;
    margin-bottom: 20px;
    height: 4rem;
    overflow: hidden;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
  }

  .content__button {
    display: block;
    width: 100%;
    padding: 1rem 0;

    border-radius: 50px;

    color: ${theme.colors.primary};
    background: ${theme.colors.white};
    border: 3px solid ${theme.colors.muted};
    transition: all .4s ease-out;

    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;

    span {
      margin-left: 1rem;
    }

    :hover {
      color: ${theme.colors.white};
      background: ${theme.colors.muted};
      border: 2px solid ${theme.colors.muted};
    }
  }

`;