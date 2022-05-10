import React, { useEffect } from 'react';
import { ProductTileWrapper, Title, Price } from './styles';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Aos from "aos"
import "aos/dist/aos.css"

export function ProductTile({ title, imageFluid, description, minPrice, handle }) {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
      }, [])
    return (
        <ProductTileWrapper data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
            <Link to={`/products/${handle}`}>
                <Img fluid={imageFluid} />
                <Title>
                    {title}
                </Title>

                <Price>
                    ${parseFloat(minPrice).toFixed(2)}
                </Price>
            </Link>
        </ProductTileWrapper>
        );
}