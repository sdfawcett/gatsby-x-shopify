import styled from 'styled-components';

export const Tab = styled.button`
  font-size: 1rem;
  font-family: 'Commissioner', sans-serif;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: #ccc;
  color: #262626;
  border: 0;
  outline: 0;
  transition: all 0.5s ease;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    background: #bb0000;
    color: white;
    opacity: 1;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
`;