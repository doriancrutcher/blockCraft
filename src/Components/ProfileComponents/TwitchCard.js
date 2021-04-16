import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import {
  TwitchEmbed,
  TwitchChat,
  TwitchPlayer,
  TwitchClip,
} from "react-twitch-embed";

const TwitchCard = (props) => {
  const Stream = () => {
    return (
      <Row
        style={{ marginTop: "10px" }}
        className='d-flex align-items-center justify-content-center'
      >
        <TwitchEmbed
          channel='Insomniac'
          id='moonstar_x'
          theme='dark'
          muted
          onVideoPause={() => console.log(":(")}
        />
      </Row>
    );
  };

  return <div>{Stream()}</div>;
};

export default TwitchCard;
