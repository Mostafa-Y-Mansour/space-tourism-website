import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CrewNavigation.css";

export default function CrewNavigation(props) {
  const [pathName, setPathName] = useState("");

  const [commanderActive, setCommanderActive] = useState(false);
  const [missionSpecialistActive, setMissionSpecialistActive] = useState(false);
  const [pilotActive, setPilotActive] = useState(false);
  const [flightEngineerActive, setFlightEngineerActive] = useState(false);

  const links = ["commander", "mission-specialist", "pilot", "flight-engineer"];

  function setActivePath() {
    if (pathName === "commander") {
      setCommanderActive(true);
      setMissionSpecialistActive(false);
      setPilotActive(false);
      setFlightEngineerActive(false);
    } else if (pathName === "mission-specialist") {
      setCommanderActive(false);
      setMissionSpecialistActive(true);
      setPilotActive(false);
      setFlightEngineerActive(false);
    } else if (pathName === "pilot") {
      setCommanderActive(false);
      setMissionSpecialistActive(false);
      setPilotActive(true);
      setFlightEngineerActive(false);
    } else if (pathName === "flight-engineer") {
      setCommanderActive(false);
      setMissionSpecialistActive(false);
      setPilotActive(false);
      setFlightEngineerActive(true);
    }
  }
  const linksLoop = () => {
    links.forEach((link) => {
      if (window.location.pathname.includes(link)) {
        setPathName(link);
      }
    });
  };

  function classNameHandler(state) {
    if (state) {
      return "active";
    }
    return "";
  }

  useEffect(() => {
    linksLoop();
    setActivePath();
  }, [pathName]);

  return (
    <div className="CrewNavigation">
      <Link
        className={`link ${classNameHandler(commanderActive)}`}
        to={"/crew/commander"}
        onClick={() => setPathName("commander")}
      ></Link>
      <Link
        className={`link ${classNameHandler(missionSpecialistActive)}`}
        to={"/crew/mission-specialist"}
        onClick={() => setPathName("mission-specialist")}
      ></Link>
      <Link
        className={`link ${classNameHandler(pilotActive)}`}
        to={"/crew/pilot"}
        onClick={() => setPathName("pilot")}
      ></Link>
      <Link
        className={`link ${classNameHandler(flightEngineerActive)}`}
        to={"/crew/flight-engineer"}
        onClick={() => setPathName("flight-engineer")}
      ></Link>
    </div>
  );
}
