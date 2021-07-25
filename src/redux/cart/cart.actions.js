import { CartActionTypes } from './card.types';

export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  };
};
