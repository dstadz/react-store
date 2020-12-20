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

const initCart = (): CartItemInterface[] => []
export const cartListState = atom({
  key: 'cartListState',
  default: initCart()
})