import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function Banner(props) {
    return (
        <Navbar bg="light" expand="lg" className="main-header">
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        props.links.map(
                            (link_data) =>
                                <Nav.Link href={link_data.loc} key={link_data.name}>{link_data.name}</Nav.Link>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Banner;