import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='section-p1'>
      <Container>
        <Row>
          <Col md={3}>
            <div className='footer-section'>
              
              <address>
                <strong>Address:</strong>
                <br />
                Tòa nhà FPT Polytechnic,
                <br />
                đường Trịnh Văn Bô, phường Phương Canh,
                <br />
                quận Nam Từ Liêm, Hà Nội
              </address>
              <p>
                <strong>Phone:</strong> (024) 7300 1955 / (024) 6259 4013
              </p>
              <p>
                <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
              </p>
              
            </div>
          </Col>
          <Col md={3}>
            <div className='footer-section'>
              <h4>About us</h4>
              <ul>
                <li>
                  <a href='#'>About us</a>
                </li>
                <li>
                  <a href='#'>Delivery Information</a>
                </li>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li>
                  <a href='#'>Terms & Conditions</a>
                </li>
                <li>
                  <a href='#'>Contact Us</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className='footer-section'>
              <h4>My Account</h4>
              <ul>
                <li>
                  <a href='#'>Sign In</a>
                </li>
                <li>
                  <a href='#'>View Cart</a>
                </li>
                <li>
                  <a href='#'>My Wishlist</a>
                </li>
                <li>
                  <a href='#'>Track My Order</a>
                </li>
                <li>
                  <a href='#'>Help</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className='footer-section install'>
              <h4>Install App</h4>
              <p>From App Store or Google Play</p>
              <div className='row'>
                <div className='col-6'>
                  <img src='img/pay/app.jpg' alt='App Store' />
                </div>
                <div className='col-6'>
                  <img src='img/pay/play.jpg' alt='Google Play' />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='copyright'>
        <Container>
          <p>© 2023, Tech2 etc - HTML CSS Ecommerce Template</p>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
