import CartItemInterface from '../interfaces/CartItem'
import clearItemFromCart from './clearItemfromCart'

const removeItemFromCart = (
  id:CartItemInterface['id'],
  cart:CartItemInterface[],
  setCart:{([]):void},
  ) => {
  const cartItemIndex = cart.findIndex(cartItem => cartItem.id === id);
  const subbedItem = Object.assign({},{...cart[cartItemIndex]})
  if (subbedItem.quantity === 1) clearItemFromCart(id,cart,setCart)
  else {
    const newList:CartItemInterface[] = []
    subbedItem.quantity--
    for (let idx in cart) {
      if (idx !== cartItemIndex.toString()) newList.push(cart[idx])
      else newList.push(subbedItem)
    }
    setCart(newList)
  }
  window.sessionStorage.setItem('cart', cart.toString())
}

export default removeItemFromCart
