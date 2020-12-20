import { selector } from 'recoil'
import { cartListState } from './atoms'

export const cartCountState = selector({
  key: 'cartCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const cart = get(cartListState);
    let count = 0
    cart.forEach(item => {
      count += item.quantity
    });

    return count;
  },
});