import { useState } from "react";

const Home = () => {
  const productInitial = {
    name: 'Ten san pham chua cap nhat',
    price: 0
  }
  const [product, setProduct] = useState(productInitial)

  const getProduct = () => {
    setProduct({
      name: 'Laptop',
      price: 2000
    })
    console.log(product)
  }
  return (
    <>
      <button onClick={() => getProduct()}>Cap nhat san pham</button>
      {product.name}
    </>
  )
}

export default Home
