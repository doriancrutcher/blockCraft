import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import GreenHills from "../assets/Rectangle4.svg";

const SignInPage = (props) => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${GreenHills})`,
          backgroundSize: "cover",
          backgroundPosition: "5% 40vh",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Row
          className='d-flex justify-content-center align-items-center'
          style={{
            marginTop: "5vh",
            // backgroundImage: "url(https://wallpaperaccess.com/full/171177.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "10vh",
          }}
        >
          <Row
            className='d-flex justify-content-center align-items-center'
            style={{
              width: "40vw",
              fontSize: "4vw",
              backgroundColor: "#E7DAC0",
              textAlign: "center",
              justifyContent: "center",
              padding: "",
              borderRadius: "10px",
              color: "white",
            }}
          >
            Welcome!{" "}
          </Row>
        </Row>
        <Container>
          <Row
            className='d-flex justify-content-center'
            style={{ marginTop: "2vh" }}
          >
            <Card style={{ width: "20rem" }}>
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
      </div>
    </React.Fragment>
  );
};

SignInPage.propTypes = {};

export default SignInPage;
