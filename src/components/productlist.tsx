import React, { useEffect, useState } from 'react'
import { productType } from '~/types/product'

const ProductList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5173/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])
  return (
    <div>
      <h2>San pham danh cho nam:</h2>
      {products.map((product: productType, index) => (
        <div key={product.id}>
          <table>
            <tr>
              <th>stt</th>
              <th>name</th>
              <th>price</th>
              <th>image</th>
              <th>description</th>
            </tr>
            <tr>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <img width={360} src={product.thumbnail} alt={product.title} />
              </td>
              <td>{product.description}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  )
}

export default ProductList
