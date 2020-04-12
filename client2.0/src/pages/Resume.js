import React, { Component } from 'react'

import "./styles/resume.css"
import { Card, Container, Row, Col } from 'react-bootstrap'
import { FaMapMarkerAlt, FaExternalLinkAlt, FaHandPointer, FaGlobeAfrica } from "react-icons/fa"
import { MdSchool, MdAccountBalance } from "react-icons/md"

export default class Resume extends Component {
  render(){
    return (
      <React.Fragment>
        <Container className="pt-5">
          <div className="pl-3">
            <FaHandPointer size={32} className="scroll-down" />
          </div>
          <Card className="card-resume">
            <Card.Body>
              <div className="pb-5">
                <h2 className="text-center">Experiencia
                  <hr className="line-bt-experience"/>
                </h2>
              </div>
              <Row className="line-lt-experience">
                <Col sm={6} className="item">
                  <div className="d-flex">
                    <h3>Centro Medico del Trabajador
                    <a href="https://www.cmtsalud.cl/" target="_blank">
                      <FaExternalLinkAlt size={18}  className="ml-2 link-job"/>
                    </a>
                    </h3>
                  </div>
                </Col>
                <Col sm={6} className="d-flex justify-content-end direction">
                  <FaMapMarkerAlt size={24}  className="mr-2"/>
                  <p>Santiago de Chile</p>
                </Col>
                <Col sm={12} className="pb-4">
                  <h3 className="title-experience">Desarrollador Front End</h3>
                  <div className="time">2019 - 2020</div>
                </Col>
              </Row>
              <Row className="line-lt-experience">
                <Col sm={6} className="item">
                  <h3>Slinky
                    <a href="https://slinky.cl/" target="_blank">
                        <FaExternalLinkAlt size={18}  className="ml-2 link-job"/>
                      </a>
                  </h3>
                </Col>
                <Col sm={6} className="d-flex justify-content-end direction">
                  <FaMapMarkerAlt size={24}  className="mr-2"/>
                  <p>Santiago de Chile</p>
                </Col>
                <Col sm={12} className="pb-4">
                  <h3 className="title-experience">Full Stack</h3>
                  <div className="time">2019 - 2019</div>
                </Col>
              </Row>
              <Row className="line-lt-experience">
                <Col sm={6} className="item">
                  <h3>FREELANCER</h3>
                </Col>
                <Col sm={6} className="d-flex justify-content-end direction">
                  <FaMapMarkerAlt size={24}  className="mr-2"/>
                  <p>Venezuela</p>
                </Col>
                <Col sm={12} className="pb-4">
                  <h3 className="title-experience">Full Stack</h3>
                  <div className="time">2017 - 2019</div>
                </Col>
              </Row>
              <Row className="line-lt-experience">
                <Col sm={6} className="item">
                  <h3>SLICE GROUP
                    <a href="https://slicegroup.co/" target="_blank">
                      <FaExternalLinkAlt size={18}  className="ml-2 link-job"/>
                    </a>
                  </h3>
                </Col>
                <Col sm={6} className="d-flex justify-content-end direction">
                  <FaMapMarkerAlt size={24}  className="mr-2"/>
                  <p>Venezuela</p>
                </Col>
                <Col sm={12} className="pb-4">
                  <h3 className="title-experience">Desarrollador Junior</h3>
                  <div className="time">2016 - 2017</div>
                </Col>
              </Row>
              <Row className="line-lt-experience">
                <Col sm={6} className="item">
                  <h3>ALTAIR TECH</h3>
                </Col>
                <Col sm={6} className="d-flex justify-content-end direction">
                  <FaMapMarkerAlt size={24}  className="mr-2"/>
                  <p>Venezuela</p>
                </Col>
                <Col sm={12} className="pb-4">
                  <h3 className="title-experience">Empredimiento</h3>
                  <div className="time">2015 - 2016</div>
                </Col>
              </Row>
              <Row className="line-lt-experience">
                <Col sm={6} className="item">
                  <h3>A1TV</h3>
                </Col>
                <Col sm={6} className="d-flex justify-content-end direction">
                  <FaMapMarkerAlt size={24}  className="mr-2"/>
                  <p>Venezuela</p>
                </Col>
                <Col sm={12}>
                  <h3 className="title-experience">Especialista en IT</h3>
                  <div className="time">2013 - 2014</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <Card className="card-resume">
            <Card.Body>
              <div className="pb-3">
                <h2 className="text-center">Educación
                  <hr className="line-bt-experience"/>
                </h2>
              </div>
              <Row>
                <Col xs={3} md={2} className="pb-3" >
                  <div className="rounded-icon">
                    <MdAccountBalance size={52} className="pt-1 pl-2" />
                  </div>
                </Col>
                <Col xs={9} md={10} className="pb-3" >
                  <Card className="card-education">
                    <Card.Header as="h5" className="text-center header-education-card">
                      Ingeniero en Sistemas
                    </Card.Header>
                    <Card.Text className="p-2 text-center">
                      Universidad Experimental de las Fuerzas Armadas (UNEFA)
                    </Card.Text>
                  </Card>
                </Col>
                <Col xs={3} md={2} className="pt-3" >
                  <div className="rounded-icon">
                    <MdSchool size={52} />
                  </div>
                </Col>
                <Col xs={9} md={10} className="pt-3" >
                  <Card className="card-education">
                    <Card.Header as="h5" className="text-center header-education-card">
                      Bachiller en Ciencias
                    </Card.Header>
                    <Card.Text className="p-2 text-center">
                      Colegio San Francisco Javier
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </React.Fragment>
    )
  }
}
