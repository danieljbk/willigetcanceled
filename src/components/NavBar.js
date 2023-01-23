import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function NavBar() {
  return (
    <Navbar bg='dark' expand='lg'>
      <Container style={{ justifyContent: 'center' }}>
        <Navbar.Brand
          href='/'
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          willigetcanceled.com 🥴
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBar
