import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaTimes } from "react-icons/fa"


export const CartDrawerContainer = styled.aside`
   position: fixed;
   z-index: 999;
   width: 40%;
   height: 100%;
   background: white;
   display: grid;
   align-items: center;
   top: 0;
   right: 0;
   transition: 0.3s ease-in-out;
   opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
   top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const DrawerButtonWrap = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const CartContentWrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    padding: 1rem;
    color: black;
    border-radius: 10px;
`;

export const CartHeading = styled.h1`
  font-family: 'Merriweather', serif;
  font-size: 2rem;
`;

export const CartHeader = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 2fr 1fr 40px;
border-bottom: 1px solid black;
font-weight: bold;
font-size: .95rem;
font-family: 'Merriweather', serif;

>div {
    padding: 8px;
}

`;

export const CartFooter = styled.div`
    display:grid;
    grid-template-columns: 5fr 1fr 40px;

    >div {
        padding: 8px;

        &:first-child {
            text-align:right;
        }
    }
`;

export const CartItem = styled.div`
    border-bottom: 1px solid black;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr 1fr 40px;

    >div {
        padding: 8px;
    }

    &:first-child {
        >div:first-child {
            font-weight: bold;
        }

        >div:last-child {
            color: #999;
            margin-top: 4px;
            font-size: 14px;
        }
    }
`;

export const Footer = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;

    >div:last-child {
        text-align: right;
    }
`;

export const CartContentMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const CartDrawerLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #f26a2e;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;


