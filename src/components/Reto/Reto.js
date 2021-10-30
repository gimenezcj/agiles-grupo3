import React, { useEffect } from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { GrEdit } from 'react-icons/gr';
import FormModificar from "../../components/FormModificar";

function Reto({ reto = {} }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [lessThanHour, setLessThanHour] = React.useState(false);

useEffect(()=>{
 const date1 = reto.dailyTimestamp
  const date2 = new Date().getTime()
  var OneDay = new Date().getTime() + (1 * 24 * 60 * 60 * 1000)
  const diffTime = Math.abs(date2 - date1);
  setLessThanHour(diffTime < OneDay)
})
  return (
    <Col sm={4}>
      <Card className="my-1 border-primary border-5 border-bottom-0 border-end-0 border-top-0 shadow-sm bg-body rounded">
        <Row>
          <Col md={3} className="align-self-center">
            <Image src={`/images/${reto?.categoria}.jpg`} />
          </Col>
          <Col md={6}>
            <Card.Body style={{ textAlign: "left" }}>
              <Card.Title>{reto?.title}</Card.Title>
              <Card.Text style={{ color: "gray" }}>{reto?.description}</Card.Text>
            </Card.Body>
          </Col>
          <Col md={3} class="align-self-center">
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              <GrEdit />
            </Button>
          </Col>
        </Row>
      </Card>

      <FormModificar
        reto={reto}
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </ Col>
  )
}

export default Reto;
