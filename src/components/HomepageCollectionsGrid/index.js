import React from 'react';
import { CollectionTile } from '../CollectionTile';
import { RemainingCollections } from './styles';

export function HomepageCollectionsGrid({collections}) {
    const saleCollection = collections.find(collection => collection.title === 'Sale');
    const remainingCollections = collections.filter(collection => collection.title !== 'Sale');

    return (
        <div>
            {!!saleCollection &&
                <CollectionTile  
                sale
                destination={`/all-products?c=${encodeURIComponent(saleCollection.shopifyId)}`}
                title={saleCollection.title}
                description={saleCollection.description}
                backgroundImage={saleCollection.image.localFile.childImageSharp.fluid}
                />
            }

                <RemainingCollections>
                    {remainingCollections.map(collection => (
                        <CollectionTile  
                        title={collection.title}
                        destination={`/all-products?c=${encodeURIComponent(collection.shopifyId)}`}
                        description={collection.description}
                        backgroundImage={collection.image.localFile.childImageSharp.fluid}
                        key={collection.shopifyId}
                        />
                    ))}
                </RemainingCollections>
        </div>

    );
}