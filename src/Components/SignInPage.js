import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const SignInPage = (props) => {
  return (
    <React.Fragment>
      <Row
        className='d-flex justify-content-center align-items-center'
        style={{
          marginTop: "5vh",
          backgroundImage: "url(https://wallpaperaccess.com/full/171177.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "25vh",
        }}
      >
        <Row
          className='d-flex justify-content-center align-items-center'
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            width: "100%",
            height: "7vh",
            fontSize: "5vh",
          }}
        >
          {" "}
          Welcome!
        </Row>
      </Row>
      <Container>
        <Row
          className='d-flex justify-content-center'
          style={{ marginTop: "5vh" }}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Enter Profile Info</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'></Card.Subtitle>

              <Form style={{ margin: "5vw" }}>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Display Name</Form.Label>
                  <Form.Control />
                  <Form.Text className='text-muted'>
                    Enter the name of your glorious creation
                  </Form.Text>
                </Form.Group>{" "}
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Twitch Handle</Form.Label>
                  <Form.Control />
                  <Form.Text className='text-muted'>
                    Enter the name of your glorious creation
                  </Form.Text>
                </Form.Group>
              </Form>

              <Container>
                <Row className='d-flex justify-content-center'>
                  <Button>Submit!</Button>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </React.Fragment>
  );
};

SignInPage.propTypes = {};

export default SignInPage;
