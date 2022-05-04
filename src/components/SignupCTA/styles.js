import styled from 'styled-components'
import EmailBg from "../../images/cta-bg.webp"
import {StyledLink} from '../StyledLink'

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
      padding: 10px;
      background: white;
      border: 1px solid black;
      font-weight: bold;
      font-size: 16px;
      text-transform: uppercase;
      display: inline-block;
      color: black;
      text-decoration: none;
      cursor: pointer;

      &:hover {
            color: white;
            background: black;
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