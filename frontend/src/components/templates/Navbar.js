import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import { Navbar, Nav } from 'react-bootstrap';

import './Navbar.css';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar className='color-nav' expand="lg" sticky='top'>
                <Navbar.Brand href="/" style={{color: "#fff"}}><img src='https://t4.ftcdn.net/jpg/00/80/91/63/360_F_80916319_83VVkECyXahP0ahpjS1mQPfcWEKEAqP8.jpg' style={{width:50, marginTop: -7, borderRadius: 50}}></img><b> Shramik Sandhan</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" style={{color: "#fff"}}>Home</Nav.Link>
                        <Nav.Link href="/profile"  style={{color: "#fff"}}>My Profile</Nav.Link>
                        <Nav.Link href="/dashboard"  style={{color: "#fff"}}>Dashboard</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}