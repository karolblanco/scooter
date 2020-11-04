import '../styles/App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function navbar(){

  return(
  <div>
  <header className="masthead">

    <div className="intro-body" styles={{borderRadius: '20', borderWidth: '10'}}>

    <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home" className="ml-5 mr-5">FunScooter</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features" className="ml-5 mr-3">Conócenos</Nav.Link>
          <Nav.Link href="#pricing" className="mr-3">Servicios</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets" className="mr-3">Iniciar Sesión</Nav.Link>
          <Button variant="primary" className="mr-5">Registrarse</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    </div>

  </header>
    </div>

  );
}


export default navbar;
