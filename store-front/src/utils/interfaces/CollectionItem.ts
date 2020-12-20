export default interface CollectionItemInterface {
  item: {
    id: number,
    name: string,
    imageUrl: string,
    price: number,
    quantity?: number
  }
}
