import React, { Component } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

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
                      <LazyLoadImage
                        alt="Empresa de Electricidad"
                        src={diasan}
                        className="animation-l card-img"
                        effect="blur"
                      />
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
                      <LazyLoadImage
                        alt="Aplicacion de Tickets"
                        src={eventify}
                        className="animation-l card-img"
                        effect="blur"
                      />
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
                      <LazyLoadImage
                        alt="Aplicacion para el filtro y calculo de tasas de localbitcoins"
                        src={exchange}
                        className="animation-l card-img"
                        effect="blur"
                      />
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
                      <LazyLoadImage
                        alt="Pagina Personal Fotografía"
                        src={jorgesulbaran}
                        className="animation-l card-img"
                        effect="blur"
                      />
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
                      <LazyLoadImage
                        alt="Aplicacion de Notas"
                        src={notes}
                        className="animation-l card-img"
                        effect="blur"
                      />
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
                      <LazyLoadImage
                        alt="Portafolio Antiguo"
                        src={portfolio}
                        className="animation-l card-img"
                        effect="blur"
                      />
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
                      <LazyLoadImage
                        alt="Ecommerce creado en wordpress"
                        src={zavher}
                        className="animation-l card-img"
                        effect="blur"
                      />
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
