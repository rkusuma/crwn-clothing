import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIcon
} from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={toggleHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
