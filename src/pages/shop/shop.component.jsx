import React from 'react';
import { Route } from 'react-router';

import { default as CollectionOverview } from '../../components/collection-overview/collection-overview.container';
import { default as CollectionPage } from '../collection/collection.container';

const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
