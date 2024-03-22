import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import instance from '~/apis'
import { productType } from '~/types/product'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams<{ id: string }>() // Ensure id is a string
  const [product, setProduct] = useState<productType | null>(null)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await instance.get(`/products/${id}`)
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [id]) // Added id to the dependency array to re-fetch when id changes

  return (
    <Container style={{marginTop: '20px' ,width: '2990px'}}>
      <div >
      {product && (
        <Card>
          <Card.Body>
            <Row>
              <Col><Card.Img style={{borderRadius: '8px'}} variant='top' src={product.thumbnail} alt={product.title} /></Col>
              <Col style={{textAlign: 'left'}}>
                <h1> <Card.Text>{product.title}</Card.Text></h1>
                <h3><Card.Text>Giá: {product.price}</Card.Text></h3>
                <h5>Chi tiết sản phẩm</h5>
                <div style={{border: '1px solid', height: '90px'}}>
                <Card.Text style={{margin: '10px'}}>{product.description}</Card.Text>
                </div>
                <div className='button'>
                <Button href="#">Mua ngay</Button> <Button type="submit">Thêm vào giỏ hàng</Button>{' '}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </div>
    </Container>
  )
}

export default ProductDetail
