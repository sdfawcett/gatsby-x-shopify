import React, { useEffect } from 'react';
import {CollectionTileWrapper, CollectionTileContent, Title, Description} from './styles';
import BackgroundImage from 'gatsby-background-image';
import {StyledLink} from '../StyledLink';
import Aos from "aos"
import "aos/dist/aos.css"

export function CollectionTile({destination, description, title, backgroundImage, sale}) {
    useEffect(() => {
        Aos.init({})
      }, [])
    return (
        <CollectionTileWrapper data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">

            <BackgroundImage fluid={backgroundImage} />

            <CollectionTileContent>
                <div>
                    <Title sale={sale}>{title}</Title>
                    <Description sale={sale}>{description}</Description>
                    <StyledLink to={destination}>
                        Shop now
                    </StyledLink>
                </div>
            </CollectionTileContent>
            
        </CollectionTileWrapper>
    );
}