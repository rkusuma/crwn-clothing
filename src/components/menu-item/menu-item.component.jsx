import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.jsx';
import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer
} from './menu-item.styles.jsx';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
