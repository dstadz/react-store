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
  }
});

export const totalPriceState = selector({
  key: 'totalPriceState',
  get: ({get}) => {
    const cart = get(cartListState);
    let total = 0
    cart.forEach(item => {
      total += (item.price * item.quantity)
    });

    return total;
  }
})