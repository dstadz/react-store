import { atom } from 'recoil'
import CartItemInterface from '../interfaces/CartItem'


export const userState = atom({
  key: 'userState',
  default: null
})

  export const isDropDownVisible = atom({
    key: 'isDropDownVisible',
    default: false
})
const prevSession: CartItemInterface[] = JSON.parse(window.sessionStorage.getItem('cart'))
const initCart = (): CartItemInterface[] => prevSession || []
export const cartListState = atom({
  key: 'cartListState',
  default: initCart()
})