import styled from 'styled-components'
import Img from 'gatsby-image'

export const BgWrapper = styled.div`
   position: relative;
`;

export const BgImg = styled(Img)`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: ${({ mobileHeight, height }) =>
      mobileHeight ? mobileHeight : height};
   z-index: 0;
   border-radius: 10px;

   @media screen and (min-width: 768px) {
      height: ${({ height }) => height || 'auto'};
   }
`;

export const Content = styled.div`
   position: absolute;
   top: 0;
   height: 100%;
   width: 100%;
   z-index: 1;
`;