import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function BarraN() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">⚡Tormenta⚡</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#menu1">Menu1</Nav.Link>
            <Nav.Link href="#menu2">Menu2</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown title="Alimentos y Bebidas" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#alimentos">Alimentos</NavDropdown.Item>
                    <NavDropdown.Item href="#CVL">Cervezas, Vinos y Licores</NavDropdown.Item>
                    <NavDropdown.Item href="#Refrescos">Refrescos</NavDropdown.Item>
                    <NavDropdown.Item href="#ropa">Todo en Alimentos y Bebidas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Electronicos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#Tv">Televisores</NavDropdown.Item>
                    <NavDropdown.Item href="#cel">Celulares</NavDropdown.Item>
                    <NavDropdown.Item href="#cam">Camaras</NavDropdown.Item>
                    <NavDropdown.Item href="#accesorios">Accesorios</NavDropdown.Item>
                    <NavDropdown.Item href="#ropa">Todo en Electronicos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Moda" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#ropa">Ropa</NavDropdown.Item>
                    <NavDropdown.Item href="#ropa">Zapatos</NavDropdown.Item>
                    <NavDropdown.Item href="#ropa">Accesorios</NavDropdown.Item>
                    <NavDropdown.Item href="#ropa">Todo en Moda</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="#ropa">Todas las Categorias</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#inicioS">Iniciar Sesion</NavDropdown.Item>
              <NavDropdown.Item href="#registro">Registrarse</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default BarraN;