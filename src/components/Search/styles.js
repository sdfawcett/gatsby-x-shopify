import styled, { keyframes } from 'styled-components';

export const Heading = styled.h2`
  font-size: 1.5rem;
  font-family: 'Merriweather', serif;
`

const AnimText = keyframes`
  0% {
    content: "Try 'Buckeyes'";
  }
  20% {
    content: "Try 'Ohio State'";
  }
  40% {
    content: "Try 'Blue Jackets'";
  }
  60% {
    content: "Try 'History'";
  }
  80% {
    content: "Try 'Afroduck'";
  }
  100% {
    content: "Try 'Columbus'";
  }
`;

export const SearchForm = styled.form`
    display: flex;
    margin-left: auto;

    input:focus + #suggest {
        display: none;
    }
`;

export const InputContainer = styled.div`
    position: relative;
`;

export const Suggest = styled.div`
    
    &::after {
    line-height: 1.3em;
    pointer-events: none;
    display: block;
    width: 12em;
    content: "Try LON";
    position: absolute;
    top: 8px;
    left: 1px;
    padding: 5px;
    background-color: #fff;
    font-style: italic;
    color: #999;
    animation: ${AnimText} 20s linear infinite;
    }
`;

