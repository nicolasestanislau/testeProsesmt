import React from 'react';

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
                            <Nav.Link href="/" style={{marginTop: '16px'}} >Listar Estados</Nav.Link>
                            <Nav.Link href="/data">Lstar por data</Nav.Link>
                            <Nav.Link href="/countries">Listar por pais</Nav.Link>
                            <Nav.Link href="/form">Formulario</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default MyNavBar;
