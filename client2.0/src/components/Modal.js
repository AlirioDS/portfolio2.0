import React from 'react'
import { Modal, Form, Row, Col, Button } from "react-bootstrap"
import { FaTelegramPlane, FaDownload } from "react-icons/fa";

function ModalEmail(props) {
  
  const [validated, setValidated] = React.useState(false)

  const handleSubmit = e => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    setValidated(true)
  }

  return(
    <Modal 
      show={ props.modalIsOpen }
      onHide={ props.onCloseModal } 
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="d-flex justify-content-center bg-nabvar">
        <Modal.Title>Creemos Cosas Maravillosas!!!</Modal.Title>
      </Modal.Header>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Row>
            <Form.Group as={Col} xs={12} md={6} controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Nombre"
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} controlId="validationCustom02">
              <Form.Control
                required
                type="text"
                placeholder="Apellido"
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} controlId="validationCustom03">
              <Form.Control
                required
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} controlId="validationCustom04">
              <Form.Control
                required
                type="text"
                placeholder="Asunto"
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={12} controlId="validationCustom05">
              <Form.Control
                as="textarea"
                rows="3"
                required
                placeholder="Mensaje..."
              />
            </Form.Group>
          </Form.Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onCloseModal} variant="danger">
            Cancel
          </Button>
          <Button type="submit" className="btn-home d-flex justify-content-around" variant="info" size="lg">
            <FaTelegramPlane className="mr-2"/>
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ModalEmail
