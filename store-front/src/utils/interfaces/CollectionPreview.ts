import CartItemInterface from './CartItem'

export default interface CollectionPreviewInterface {
  id:number,
  title: string,
  routeName: string,
  key: number,
  items: CartItemInterface[]
}
