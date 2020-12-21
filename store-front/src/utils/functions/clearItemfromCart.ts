import CartItemInterface from '../interfaces/CartItem'

const clearItemFromCart = (
  id:CartItemInterface['id'],
  cart:CartItemInterface[],
  setCart:{([]):void},
) => {
  const cartItemIndex = cart.findIndex(cartItem => cartItem.id === id);
  const newList:CartItemInterface[] = []
  for (let idx in cart) {
    if (idx !== cartItemIndex.toString()) newList.push(cart[idx])
  }
  setCart(newList)
}

export default clearItemFromCart
