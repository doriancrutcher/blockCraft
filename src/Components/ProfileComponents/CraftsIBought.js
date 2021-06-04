import React from "react";
import PropTypes from "prop-types";
import { Carousel, Row, Container } from "react-bootstrap";

const CraftsIBought = (props) => {
  return (
    <Carousel style={{ width: "80vw" }}>
      {props.stuffIBought.map((x, i) => {
        return (
          <Carousel.Item key={i}>
            <img className='d-block w-100' src={x} alt='First slide' />
            <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
              <Container>
                <Row className='justify-content-center d-flex'>
                  <h3>Villager Apartment</h3>
                </Row>

                <Row className='justify-content-center d-flex'>
                  <p>Made by X to House the lovely minecraft digital interns</p>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

CraftsIBought.propTypes = {};

export default CraftsIBought;
