import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";

const CraftsIMade = (props) => {
  return (
    <Carousel style={{ width: "80vw", mar}}>
      {props.stuffIMade.map((x) => {
        return (
          <Carousel.Item>
            <img className='d-block w-100' src={x} alt='First slide' />
            <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
              <h3>Villager Apartment</h3>
              <p>Made by X to House the lovely minecraft digital interns</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

CraftsIMade.propTypes = {};

export default CraftsIMade;
