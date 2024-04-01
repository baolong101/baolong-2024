import { productType } from '~/types/product'
import Banner from './banner'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

type Props = {
  products: productType[]
}
const Home = ({products }: Props) => {
  return (
    <>
      <Banner/>
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
                <Card.Title style={{ width: '200px', height: '50px' }}>{product.title}</Card.Title>
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
    </>
  )
}

export default Home
