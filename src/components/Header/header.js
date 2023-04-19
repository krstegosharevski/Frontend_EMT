import React from "react";
import { Link } from "react-router-dom";
import {Navbar,Nav} from "react-bootstrap"
const header = (props) => {
    return (
        <Navbar  expand="lg" style={{ backgroundColor: '#008000', fontFamily: 'Arial, sans-serif' }}>
            <Navbar.Brand style={{ color: '#FFFFFF',fontFamily:"Roboto",fontSize:"20px"}} as={Link} to="/">BOOK SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link style={{fontSize:"20px", fontFamily:"Roboto"}}
                          to="/books/add"
                          type="button"
                          className="btn btn-close-white"
                    >
                        Add new book
                        <span className="align-content-center">

              </span>
                    </Link>
                    <Nav.Link as={Link} style={{ color: '#FFFFFF',fontFamily:"Roboto",fontSize:"18px"}} to="/categories">Categories</Nav.Link>
                    <Nav.Link as={Link} style={{ color: '#FFFFFF',fontFamily:"Roboto",fontSize:"18  px"}} to="/books">Library</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default header;