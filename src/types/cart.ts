type productsType = [
  {
    id: 59
    title: string
    price: number
    quantity: number
    total: number
    discountPercentage: number
    discountedPrice: number
    thumbnail: string
  }
]
export type cartsType = {
  id: number
  products: productsType
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}
