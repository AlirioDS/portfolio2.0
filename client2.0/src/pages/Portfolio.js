import React, { Component } from 'react'

import './styles/portfolio.css'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { FaExternalLinkAlt, FaGithub, FaHandPointer } from "react-icons/fa"

import diasan from '../images/diasan.jpg'
import eventify from '../images/eventify.png'
import exchange from '../images/exchange-rate.png'
import jorgesulbaran from '../images/jorgesulbaran.png'
import notes from '../images/notes.jpg'
import portfolio from '../images/portfolio.jpg'
import zavher from '../images/zavher.png'

export default class Portfolio extends Component {
  render(){
    return (
      <React.Fragment>
        <Container className="pt-5">
          <div className="pl-3">
            <FaHandPointer size={32} className="scroll-down" />
          </div>
          <Card className="card-resume">
            <Card.Body>
              <div className="pb-2">
                <h2 className="text-center">Portafolio
                  <hr className="line-bt-experience"/>
                </h2>
              </div>
              <Row>
                <Col xs={12} md={6} className="element-item pt-4">
                  <Card>
                    <div className="hover-content">
                      <Card.Img src={diasan} alt="Empresa de Electricidad" className="animation-l" />
                      <div className="overlay animation">
                        <div className="container-icon">
                          <div className="icon-link">
                            <a href="http://diasan.herokuapp.com" target="_blank">
                              <FaExternalLinkAlt size={18} />
                            </a>
                          </div>
                          <div className="icon-link">
                            <a href="https://github.com/AlirioDS/Frontend_DIASAN" target="_blank">
                              <FaGithub size={18} />
                            </a>
                          </div>
                        </div>
                        <div className="text-hover">
                          <p>DIASANCA</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="element-item pt-4">
                  <Card>
                    <div className="hover-content">
                      <Card.Img src={eventify} alt="Aplicacion de Tickets" className="animation-l" />
                      <div className="overlay animation">
                        <div className="container-icon">
                          <div className="icon-link">
                            <a href="https://eventtickets111.herokuapp.com" target="_blank">
                              <FaExternalLinkAlt size={18} />
                            </a>
                          </div>
                          <div className="icon-link">
                            <a href="https://github.com/AlirioDS/event-tickets" target="_blank">
                              <FaGithub size={18} />
                            </a>
                          </div>
                        </div>
                        <div className="text-hover">
                          <p>Eventify</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="element-item pt-4">
                  <Card>
                    <div className="hover-content">
                      <Card.Img src={exchange} alt="Aplicacion para el filtro y calculo de tasas de localbitcoins" className="animation-l" />
                      <div className="overlay animation">
                        <div className="container-icon">
                          <div className="icon-link">
                            <a href="https://exchange111pr.herokuapp.com" target="_blank">
                              <FaExternalLinkAlt size={18} />
                            </a>
                          </div>
                          <div className="icon-link">
                            <a href="https://github.com/AlirioDS/exchangeRate" target="_blank">
                              <FaGithub size={18} />
                            </a>
                          </div>
                        </div>
                        <div className="text-hover">
                          <p>Exchange-rate</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="element-item pt-4">
                  <Card>
                    <div className="hover-content">
                      <Card.Img src={jorgesulbaran} alt="Pagina Personal Fotografía" className="animation-l" />
                      <div className="overlay animation">
                        <div className="container-icon">
                          <div className="icon-link">
                            <a href="https://jorgesulbaran.cl" target="_blank">
                              <FaExternalLinkAlt size={18} />
                            </a>
                          </div>
                        </div>
                        <div className="text-hover">
                          <p>Fotografía</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="element-item pt-4">
                  <Card>
                    <div className="hover-content">
                      <Card.Img src={notes} alt="Aplicacion de Notas" className="animation-l" />
                      <div className="overlay animation">
                        <div className="container-icon">
                          <div className="icon-link">
                            <a href="https://notepad-staging.herokuapp.com/" target="_blank">
                              <FaExternalLinkAlt size={18} />
                            </a>
                          </div>
                          <div className="icon-link">
                            <a href="https://github.com/AlirioDS/notepad" target="_blank">
                              <FaGithub size={18} />
                            </a>
                          </div>
                        </div>
                        <div className="text-hover">
                          <p>Notify</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="element-item pt-4">
                  <Card>
                    <div className="hover-content">
                      <Card.Img src={portfolio} alt="Portafolio Antiguo" className="animation-l" />
                      <div className="overlay animation">
                        <div className="container-icon">
                          <div className="icon-link">
                            <a href="https://portfolio-ad111-pr.herokuapp.com/" target="_blank">
                              <FaExternalLinkAlt size={18} />
                            </a>
                          </div>
                          <div className="icon-link">
                            <a href="https://github.com/AlirioDS/portfolio" target="_blank">
                              <FaGithub size={18} />
                            </a>
                          </div>
                        </div>
                        <div className="text-hover">
                          <p>Old Portfolio</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="element-item pt-4">
                  <Card>
                    <div className="hover-content">
                      <Card.Img src={zavher} alt="Ecommerce creado en wordpress" className="animation-l" />
                      <div className="overlay animation">
                        <div className="container-icon">
                          <div className="icon-link">
                            <a href="https://zavher.cl/" target="_blank">
                              <FaExternalLinkAlt size={18} />
                            </a>
                          </div>
                        </div>
                        <div className="text-hover">
                          <p>ZAVHER</p>
                        </div>
                      </div>
                    </div>
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
