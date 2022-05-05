import styled, { css } from 'styled-components'
import EmailBg from "../../images/cta-bg.webp"
import {StyledLink} from '../StyledLink'

const fullWidthStyles = ({fullWidth}) => {
  if (fullWidth) {
      return css`
          display: block;
          width: 100%;
      `
  }
}

export const EmailContainer = styled.div`
   background: linear-gradient(
   180deg,
   rgba(0, 0, 0, 0.5) 0%,
   rgba(0, 0, 0, 0.7) 100%
   ),
   url(${EmailBg}) no-repeat center;
   background-size: cover;
   height: 450px;
   width: 100%;
   padding: 2rem;
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 768px) {
    padding: 0;
   }

   @media screen and (max-width: 400px) {
    height: 545px;
   }
`;

export const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'Merriweather', serif;
    font-size: clamp(2.5rem,5vw,3.5rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    font-family: 'Commissioner', sans-serif;
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  form {
    z-index: 10;
  }
`;

export const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 25px;
    border-radius: .2rem;
    border: none;
    margin-right: 1rem;
  }

  ${StyledLink} {
    outline: none;
    padding: 1rem 0.5rem;
    box-shadow: none;
    font-size: 16px;
    font-family: 'Commissioner',sans-serif;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    -webkit-text-decoration: none;
    text-decoration: none;
    background: #bb0000;
    color: white;
    border: 4px solid #333;
    position: relative;
    white-space: nowrap;
    transition: all .1s ease-in;
    ${fullWidthStyles}

    &:hover:not(:disabled) {
        color: white;
        background: #700000;
    }

    &:active:not(:disabled) {
        top: .1rem;
    }

    &:active::after {
        border-top-width: .4rem;
        bottom: -1.15rem;
    }

    &::after {
        content: '';
        height: 0;
        border: .5rem solid transparent;
        border-top-color: #333;
        position: absolute;
        left: -.25rem;
        bottom: -1.25rem;
        display: inline-block;
        width: calc(100% - .5rem);
    }

    &:disabled {
        border-color: #999;
        cursor: not-allowed;
        color: #999;
    }
   }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }

    ${StyledLink} {
      text-align: center;
   }
  }

  @media screen and (max-width: 768px) {
    input {
      margin: 1rem;
      width: 70%;
    }
  }
`;