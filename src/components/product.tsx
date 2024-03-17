import React from 'react'

type TProduct = {
  name: string
  price: number
}

// UI Component  = dumb component
const Product = (props: { product: TProduct }) => {
  return (
    <>
      <h2>{props.product.name}</h2>
      <p>{props.product.price}</p>
    </>
  )
}

export default Product
