import React from 'react';
import { ProductTileWrapper, Title, Description, Price, ProductImage, ProductTextWrap, ProductInfo } from './styles';
import Img from 'gatsby-image';
import { Link } from 'gatsby'
import {StyledLink} from '../StyledLink';

export function ProductTile({ title, imageFluid, description, minPrice, handle }) {
    return (
        <Link to={`/products/${handle}`}>
            <ProductTileWrapper>
                <ProductImage fluid={imageFluid} />
                <ProductInfo>
                    <ProductTextWrap>
                        <Title>
                            {title}
                        </Title>

                        <Price>
                            from ${parseFloat(minPrice).toFixed(2)}
                        </Price>    
                    </ProductTextWrap>
                    <StyledLink to={`/products/${handle}`}>
                        View Product
                    </StyledLink>
                </ProductInfo>
            </ProductTileWrapper>
        </Link>
        );
}