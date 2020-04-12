import React from 'react'
import { NavLink } from 'react-router-dom'

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { FaEnvelope, FaPhoneSquare, FaMapMarkedAlt, FaHandPointLeft } from "react-icons/fa";

import "./styles/nabvar.css"

class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-nabvar">
          <Container fluid className="third-container">
            <Row>
              <Col md={4} className="pt-3">
                <a href="mailto:aliriodiaz111@gmail.com?subject=FreelanceWork" className="d-flex justify-content-center a-customize" target="_blank">
                  <FaEnvelope size={22} className="mr-2"/>
                  <p>aliriodiaz111@gmail.com</p>
                  <div className="pl-1">
                    <FaHandPointLeft size={24} className="link-to" />
                  </div>
                </a>
              </Col>
              <Col md={4} className="pt-3">
                <a href="https://wa.me/56997931571" className="d-flex justify-content-center a-customize" target="_blank">
                  <FaPhoneSquare size={22} className="mr-2"/>
                  <p>+56 997 93 1571</p>
                  <div className="pl-1">
                    <FaHandPointLeft size={24} className="link-to" />
                  </div>
                </a>
              </Col>
              <Col md={4} className="d-flex justify-content-center pt-3">
                <FaMapMarkedAlt size={22} className="mr-2"/>
                <p>Santiago, Chile</p>
              </Col>
            </Row>
          </Container>
          <Navbar sticky="bottom" className="d-flex justify-content-center">
            <Nav>
              <Nav.Link exact as={NavLink} to="/" className="mr-1 navbar-css">Inicio</Nav.Link>

              <Nav.Link as={NavLink} to="/resume" className="mr-1 ml-1 navbar-css">Resumen</Nav.Link>

              <Nav.Link as={NavLink} to="/portfolio" className="ml-1 navbar-css">Portafolio</Nav.Link>
            </Nav>
          </Navbar>
        </div>
    </React.Fragment>
    )
  }
}

export default NavBar
