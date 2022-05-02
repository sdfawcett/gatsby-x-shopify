import React, { useEffect } from 'react';
import { ProductTileWrapper, Title, Description, Price } from './styles';
import Img from 'gatsby-image';
import {StyledLink} from '../StyledLink';
import Aos from "aos"
import "aos/dist/aos.css"

export function ProductTile({ title, imageFluid, description, minPrice, handle }) {
    useEffect(() => {
        Aos.init({})
      }, [])
    return (
        <ProductTileWrapper data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
            <StyledLink to={`/products/${handle}`}>
                <Img fluid={imageFluid} />
                <Title>
                    {title}
                </Title>

                <Price>
                    ${parseFloat(minPrice).toFixed(2)}
                </Price>
            </StyledLink>
        </ProductTileWrapper>
        );
}