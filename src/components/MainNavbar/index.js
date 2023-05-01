import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/shared/logo.svg";
import "./MainNavbar.css";
import burger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

export default function MainNavbar(props) {
  const [icon, setIcon] = useState(true);
  const [data, setData] = useState([]);

  const [pathName, setPathName] = useState(
    window.location.pathname.split("/")[1]
  );

  const [homeActive, setHomeActive] = useState(false);
  const [destinationActive, setDestinationActive] = useState(false);
  const [crewActive, setCrewActive] = useState(false);
  const [technologyActive, setTechnologyActive] = useState(false);

  function setActivePath() {
    if (pathName === "home") {
      setHomeActive(true);
      setDestinationActive(false);
      setCrewActive(false);
      setTechnologyActive(false);
    } else if (pathName === "destination") {
      setHomeActive(false);
      setDestinationActive(true);
      setCrewActive(false);
      setTechnologyActive(false);
    } else if (pathName === "crew") {
      setHomeActive(false);
      setDestinationActive(false);
      setCrewActive(true);
      setTechnologyActive(false);
    } else if (pathName === "technology") {
      setHomeActive(false);
      setDestinationActive(false);
      setCrewActive(false);
      setTechnologyActive(true);
    }
  }

  function classNameHandler(state) {
    if (state) {
      return "active";
    }
    return "";
  }

  useEffect(() => {
    setActivePath();
  }, [pathName]);

  return (
    <Navbar bg="transparent">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <div
          className={`burger ms-auto ${icon ? "block" : "none"}`}
          onClick={() => setIcon(!icon)}
        >
          <img src={icon ? burger : close} alt="" />
        </div>
        <Nav
          className={`links-container ms-auto d-flex justify-content-center ${
            icon ? "" : "links-container-active"
          }`}
        >
          <div
            className={`burger close ms-auto ${icon ? "none" : "block"}`}
            onClick={() => setIcon(!icon)}
          >
            <img src={icon ? burger : close} alt="" />
          </div>
          <div className="line"></div>

          <Nav.Link
            as={Link}
            className={classNameHandler(homeActive)}
            onClick={() => {
              setIcon(true);
              setPathName("home");
              setActivePath();
            }}
            to="home"
          >
            00 HOME
          </Nav.Link>
          <Nav.Link
            as={Link}
            className={classNameHandler(destinationActive)}
            onClick={() => {
              setIcon(true);
              setPathName("destination");
              setActivePath();
            }}
            to="destination"
          >
            01 DESTINATION
          </Nav.Link>
          <Nav.Link
            as={Link}
            className={classNameHandler(crewActive)}
            onClick={() => {
              setIcon(true);
              setPathName("crew");
              setActivePath();
            }}
            to="crew"
          >
            02 CREW
          </Nav.Link>
          <Nav.Link
            as={Link}
            className={classNameHandler(technologyActive)}
            onClick={() => {
              setIcon(true);
              setPathName("technology");
              setActivePath();
            }}
            to="technology"
          >
            03 TECHNOLOGY
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
