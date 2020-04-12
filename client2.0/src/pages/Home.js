import React, { Component } from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { FaTelegramPlane, FaDownload } from "react-icons/fa";

import "./styles/home.css"
import pdfFile from '../documents/cv_es.pdf'
import Social from '../components/Social'
import Modal from '../components/Modal'

export default class Home extends Component {
  state = {
    modalIsOpen: false
  }

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true })
  }

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false })
  }
  
  render() {

    return (
      <React.Fragment>
        <div className="bg-home">
          <Container fluid className="first-container">
            <Row>
              <Col xs={12} sm={5} className="py-1" >
                <Social/>
              </Col>
              <Col xs={12} sm={3} className="d-flex justify-content-end py-1">
                <Button onClick={this.handleOpenModal} className="btn-home d-flex justify-content-around" variant="info">
                  <FaTelegramPlane className="mr-2"/>
                  Contactame
                </Button>
              </Col>
              <Col xs={12} sm={4} className="d-flex justify-content-end py-1">
                <Button className="btn-home d-flex justify-content-around" variant="info" onClick={() => window.open(pdfFile)}>
                  <FaDownload className="mr-2" />
                  Descarga Mi CV
                </Button>
              </Col>
            </Row>
          </Container>
          <Container className="second-container">
            <Row>
              <Col md={12} className="hvr-pulse img-mr-profile text-center">
                <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQETlEzIsDbJWg/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=8LyeMw3N1f6d_LBy5ippVlac-XWO9tcSHSe1W3vuTm8" roundedCircle className="img-rounded-border"/>
              </Col>
              <Col md={12} className="text-center">
                <h1 className="py-5">Alirio Jose Díaz Sánchez</h1>
              </Col>
              <Col md={12} className="text-center">
                <div className="title">
                  Full Stack Developer
                </div>
              </Col>
              <Col md={12} className="text-center">
                <p className="pb-5">
                  Emprendedor, me encanta la tecnología. Siempre aprendiendo. Creo que mi verdadera plus es ser muy colaborativo. Creo en el trabajo de equipo, "si caminas solo llegaras lejos, si caminas acompañado dejaras huella". Amante del Front-End, pero el Back-End también es mi amigo. Siempre he tenido la noción que nunca voy a dejar de estudiar. Amante de la Arepa y los juegos FPS. BLockchain y criptomonedas son tecnologías que quisiera aplicar más.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <Modal 
          onCloseModal={ this.handleCloseModal }
          onOpenModal={ this.handleOpenModal }
          modalIsOpen={ this.state.modalIsOpen }
        /> 
      
      </React.Fragment>
    )
  }
}
