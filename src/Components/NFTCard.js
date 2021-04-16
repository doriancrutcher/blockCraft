import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Container, Row } from "react-bootstrap";

const NFTCard = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant='top' src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Creator: {props.creator}</Card.Text>
          <Card.Text>Current Owner: {props.owner}</Card.Text>
          <Button variant='primary'>Purchase NFT for {props.price} Near</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

NFTCard.propTypes = {};

export default NFTCard;
