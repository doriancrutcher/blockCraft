import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";
import NFTCard from "./NFTCard";
import VillagerApt from "../assets/villager_Apartment.png";
import PlashapeLogo from "../assets/PlashapeLogo.png";

const Home = (props) => {
  const [funPhrases, changeFunPhrase] = useState([
    "How do you make a circle out of cubes?",
    "Cure a zombie villager and make a new friend!",
    "Mints taste good! But this is a different kind of mint...",
    "Create your dreams and the dreams of others!",
    "Create, Build, Mint!",
  ]);

  const backGroundStyling = {
    backgroundImage: `url("https://cdn.vox-cdn.com/thumbor/tOwRguKr-dcwmSZAvaw-2z50LpU=/0x0:1801x884/1820x1213/filters:focal(749x21:1037x309):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66547009/Minecraft_Horizontal_Key_Art.0.jpg")`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    width: "100vw",
    height: "30vh",
    margin: "0",
  };

  const [tokenArray, changeTokenArray] = useState([
    {
      imgURL: VillagerApt,
      owner: "MohawkBro3000",
      creator: "someKidNamedDorian",
      price: "50",
      title: "Villager Home",
    },
    {
      imgURL: VillagerApt,
      owner: "CoolKid",
      creator: "someKidNamedDorian",
      price: "40",
      title: "Villager Digs",
    },
  ]);

  return (
    <div>
      <Row
        className='d-flex justify-content-center align-items-center'
        style={backGroundStyling}
      >
        <Row
          style={{
            width: "100%",
            padding: "1vh",
            marginBottom: "0",
          }}
          className='d-flex justify-content-center align-items-center'
        >
          <h1 style={{ color: "white" }}>
            <img style={{ width: "20vh" }} src={PlashapeLogo}></img>
          </h1>
        </Row>{" "}
        <Row
          className='d-flex justify-content-center align-items-center'
          style={{
            width: "60vw",
            backgroundColor: "#E7DAC0",
            textAlign: "center",
            justifyContent: "center",
            color: "black",
            padding: "10px",
            borderRadius: "10px",
          }}
          className='d-flex justify-content-center align-items-center'
        >
          {funPhrases[Math.floor(Math.random() * funPhrases.length)]}
        </Row>
      </Row>

      <Container>
        <Row className='justify-content-center d-flex align-items-center'>
          {tokenArray.map((x, index) => {
            return (
              <Col
                key={index}
                className='align-items-center'
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <NFTCard
                  key={index}
                  title={x.title}
                  creator={x.creator}
                  owner={x.owner}
                  price={x.price}
                  image={x.imgURL}
                />
              </Col>
            );
          })}
        </Row>
        <Row
          style={{ marginTop: "10px", fontSize: "10px" }}
          className='justify-content-center d-flex align-items-center'
        >
          Not affiliated with Mojang
        </Row>
      </Container>
    </div>
  );
};

export default Home;
