import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaTimes } from "react-icons/fa"


export const CartDrawerContainer = styled.aside`
   position: fixed;
   z-index: 999;
   width: 50%;
   height: 100%;
   background: white;
   display: grid;
   top: 0;
   right: 0;
   overflow: auto;
   box-shadow: -3px 0px 5px 0px rgba(0, 0, 0, 0.2);
   transition: 0.3s ease-in-out;
   opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
   top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

   @media screen and (max-width: 1024px) {
     width: 80%;
   }

   @media screen and (max-width: 600px) {
     width: 100%;
   }
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
    width: 90%;
    padding: 1rem;
    color: #262626;
    border-radius: 10px;

    @media screen and (max-width: 420px) {
     .hidden-mobile {
       display: none;
     }
   }
`;

export const CartHeading = styled.h1`
  font-family: 'Merriweather', serif;
  font-size: 2rem;
`;

export const CartHeader = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 2fr 1fr 40px;
border-bottom: 1px solid #ccc;
font-weight: bold;
font-size: .95rem;
font-family: 'Commissioner', sans-serif;

>div {
    padding: 8px;
}

@media screen and (max-width: 420px) {
  grid-template-columns: 2fr 1fr 1fr 20px;
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
    border-bottom: 1px solid #ccc;
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

    @media screen and (max-width: 420px) {
      grid-template-columns: 2fr 1fr 1fr 20px;
      font-size: .85rem;

        >div:last-child {
            padding-left: 2rem;
          }
     }
`;

export const Footer = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;

    >div:last-child {
        text-align: right;
    }

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;

      >div {
        margin-bottom: 2rem;
      }

      >div:last-child {
        text-align: center;
    }

    >div button {
        width: 100%;
    }
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

export const EmptyCartContentWrapper = styled.div`
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 10px;
`;

export const EmptyCartRow = styled.div`
  display: flex;
`

export const EmptyCartCol = styled.div`
  width: 50%;
  flex-direction: column;
`


