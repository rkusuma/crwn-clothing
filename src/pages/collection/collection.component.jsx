import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionsContext from '../../contexts/collections/collections.context';

import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitleContainer
} from './collection.styles.jsx';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitleContainer>{title}</CollectionTitleContainer>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
