import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

function FooterBar() {
  return (
    // fixed-bottom - add this to fix it in the bottom
    <footer className=" p-3">
      <Row>
        <Col md={12} lg={6}>
          <h5 class="mb-3">Big Basket</h5>
          <p>
            The freshest of fruits and vegetables, top quality pulses and food
            grains, dairy products and hundreds of branded items could be
            handpicked and delivered to your home, all at the click of a button?
          </p>
        </Col>
        <Col md={6} lg={3}>
          <h5 className="mb-3">Links</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-none px-0">
              Frequently Asked Questions
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0">Delivery</ListGroup.Item>
            <ListGroup.Item className="bg-none px-0">Pricing</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={6} lg={3}>
          <h5>Opening hours</h5>
          <Table striped className="timings">
            <tbody>
              <tr>
                <td>Mon - Fri:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Sat - Sun:</td>
                <td>8am - 1am</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <div className="text-center mt-2 bg-dark main-color p-3">
        © 2020 Copyright: bigbasket@gmail.com
      </div>
    </footer>
  );
}

export default FooterBar;
