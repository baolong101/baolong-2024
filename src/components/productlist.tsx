import React, { useEffect, useState } from 'react'
import { productType } from '~/types/product'
import instance from '~/apis'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })

    // Cach 2:
    // (async () => {
    //   const data = await getAllProducts()
    //   setProducts(data)
    // })()

    // Cach 3:
    // const getProducts = async () => {
    //   try {
    //     const { data } = await instance.get('/products')
    //     setProducts(data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // getProducts()
  }, [])

  
  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...'
    }
    return title
  }

  return (
    <div className='mt-8'>
      <h2>Sản phẩm bán chạy:</h2>
      <Row xs={1} md={2} lg={4} className='g-4'>
        {products.map((product: productType) => (
          <Col key={product.id}>
            <Card style={{ height: '380px' }}>
              <div style={{ height: '170px' }}>
                <Card.Img style={{ height: '170px' }} variant='top' src={product.thumbnail} alt={product.title} />
              </div>
              <Card.Body>
                <Card.Title style={{ width: '200px', height: '50px' }}>{truncateTitle(product.title, 20)}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Link to={`/shop/${product.id}`}>
                  <Button variant='primary'>mua ngay</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProductList
