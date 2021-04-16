import React, { useState } from "react";
import PropTypes from "prop-types";
import CraftsIBought from "./ProfileComponents/CraftsIBought";
import CraftsIMade from "./ProfileComponents/CraftsIMade";
import TwitchCard from "./ProfileComponents/TwitchCard";
import VillagerApt from "../assets/villager_Apartment.png";
import { Container, Row } from "react-bootstrap";

const Profile = (props) => {
  const [stuffIMade, changeStuffIMade] = useState([
    VillagerApt,
    VillagerApt,
    VillagerApt,
  ]);
  const [stuffIBought, chagneStuffIBought] = useState([
    VillagerApt,
    VillagerApt,
    VillagerApt,
  ]);
  return (
    <div>
      <Container>
        <Row
          className='d-flex justify-content-center'
          style={{ marginTop: "5vh" }}
        >
          <TwitchCard />
        </Row>
        <Row
          className='d-flex justify-content-center'
          style={{ marginTop: "5vh" }}
        >
          <h1>Your Creations!</h1>
        </Row>

        <Row
          className='d-flex justify-content-center'
          style={{ marginTop: "5vh" }}
        >
          <CraftsIMade stuffIMade={stuffIMade} />
        </Row>

        <Row
          className='d-flex justify-content-center'
          style={{ marginTop: "5vh" }}
        >
          <h1>Creations You Bought!</h1>
        </Row>
        <Row
          className='d-flex justify-content-center'
          style={{ marginTop: "5vh" }}
        >
          <CraftsIBought stuffIBought={stuffIBought} />
        </Row>
      </Container>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
