import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const Mint = (props) => {
  const creationNameRef = useRef();
  const creationDescriptionNameRef = useRef();
  const creatorNameRef = useRef();
  const serverNameRef = useRef();
  const serverOwnerNameRef = useRef();
  const nearValueRef = useRef();

  const test = () => {
    console.log(creationDescriptionNameRef.current.value);
  };

  return (
    <div>
      <Form style={{ margin: "5vw" }}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Creation Name</Form.Label>
          <Form.Control ref={creationNameRef} placeholder='Cration Name' />
          <Form.Text className='text-muted'>
            Enter the name of your glorious creation
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Creation Description</Form.Label>
          <Form.Control
            placeholder='give us a short description '
            ref={creationDescriptionNameRef}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Creator Name </Form.Label>
          <Form.Control
            ref={creatorNameRef}
            placeholder='Enter the name of the creator'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Server Name</Form.Label>
          <Form.Control ref={serverNameRef} placeholder='Enter Server Id ' />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Server Owner Name (on this DApp) </Form.Label>
          <Form.Control
            ref={serverOwnerNameRef}
            placeholder='Enter Server Id '
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Near Value</Form.Label>
          <Form.Control
            ref={nearValueRef}
            placeholder='Enter your selling price'
          />
        </Form.Group>

        <Button onClick={test} variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

Mint.propTypes = {};

export default Mint;
