import CartItemInterface from '../interfaces/CartItem'
import clearItemFromCart from './clearItemfromCart'

const removeItemFromCart = (
  id:CartItemInterface['id'],
  cart:CartItemInterface[],
  setCart:{([]):void},
  ) => {
  const newList:CartItemInterface[] = []
  const cartItemIndex = cart.findIndex(cartItem => cartItem.id === id);
  const subbedItem = Object.assign({},{...cart[cartItemIndex]})
  if (subbedItem.quantity == 1) {
    for (let idx in cart) {
      if (idx !== cartItemIndex.toString()) newList.push(cart[idx])
    }
    setCart(newList)
  }
  else {
    subbedItem.quantity--
    for (let idx in cart) {
      if (idx !== cartItemIndex.toString()) newList.push(cart[idx])
      else newList.push(subbedItem)
    }
    setCart(newList)
  }
}

export default removeItemFromCart
