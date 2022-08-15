import React from "react";
import { useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "./LandingPages.css";
import Fade from "react-reveal/Fade";
import { Col } from "react-bootstrap";
//import Image from "react-bootstrap/Image";

const LandingPage = ({ history }) => {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history]);
  return (
    <div className="main">
      <Container>
        <Row>
          {/* <Col xs={6} md={4}>
            <Image src=".frontpage.png " />
            <h1> Welcome Back</h1>
          </Col> */}
          <Col>
            <div className="intro-text">
              <div className="sidething"></div>
              <div className="text">
                <Fade left>
                  {" "}
                  <h1>
                    <b style={{ marginleft: "30px" }}>
                      Save your thinking and your data in few minutes.
                    </b>
                  </h1>{" "}
                  <p className="subtitle">
                    One safe place to your Notes and much more.
                  </p>
                </Fade>
              </div>

              <div className="buttons">
                <div className="buttoncontainer">
                  <a href="/login">
                    <Button size="lg" className="landingbutton">
                      Login
                    </Button>
                  </a>
                </div>

                <div>
                  <a href="/register">
                    <Button
                      size="lg"
                      className="landingbutton"
                      variant="outline-primary"
                    >
                      Signup
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
