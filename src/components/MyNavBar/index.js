import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MyNavBar = () => {


    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Teste React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav>
                                    <Link to="/" style={{ marginTop: '16px' }} >Listar Estados</Link>
                            </Nav>
                            <Nav>
                                <Link to="/data">Listar por pais</Link>
                            </Nav>
                            <Nav>
                                <Link to="/countries" >Listar por pais</Link>
                            </Nav>
                            <Nav>
                                <Link to="/form" >Formulario</Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default MyNavBar;
