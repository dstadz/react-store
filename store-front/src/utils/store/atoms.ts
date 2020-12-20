import { atom } from 'recoil'
import { CartItemInterface } from '../../Components/CollectionItem/CollectionItem'


export const userState = atom({
  key: 'userState',
  default: null
})

  export const isDropDownVisible = atom({
    key: 'isDropDownVisible',
    default: false
})


// interface cartListInterFace {
//   [index:number]: CollectionItemInterface
// }
const initCart = (): CartItemInterface[] => []
export const cartListState = atom({
  key: 'cartListState',
  default: initCart()
})