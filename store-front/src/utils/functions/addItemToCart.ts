import CartItemInterface from '../interfaces/CartItem'

const addItemToCart = (
  newItem:CartItemInterface,
  cart:CartItemInterface[],
  setCart:{([]):void},
) => {
  const existingCartItemIndex = cart.findIndex(cartItem => cartItem.id === newItem.id);
  if (0 <= existingCartItemIndex) {
    const newList:CartItemInterface[] = []
    const addedItem = Object.assign({},{...cart[existingCartItemIndex]})
    addedItem.quantity++
    for (let idx in cart) {
      if (idx !== existingCartItemIndex.toString()) newList.push(cart[idx])
      else newList.push(addedItem)
    }
    setCart(newList)
  } else {
    const newestCartItem = Object.assign({quantity:1}, newItem);
    setCart([...cart, newestCartItem])
  }
}

export default addItemToCart
