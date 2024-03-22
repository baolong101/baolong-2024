import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
const Header = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='#home'>
          <img className='logo1' src='../../public/logo.jpg' alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto m-auto '>
            <Nav.Link className='fs-5 ' href='#home'>
              Home
            </Nav.Link>
            <Nav.Link style={{marginLeft: '50px'}} className='fs-5' href='shop'>
              Shop
            </Nav.Link>
            <Nav.Link style={{marginLeft: '50px'}} className='fs-5' href='/login'>
              login
            </Nav.Link>
            <Nav.Link style={{marginLeft: '50px'}} className='fs-5' href='/register'>
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
