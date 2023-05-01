import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DestinationNavigation.css";

export default function DestinationLinks(props) {
  const [pathName, setPathName] = useState(
    window.location.pathname.split("/")[2]
  );

  const [moonActive, setMoonActive] = useState(false);
  const [marsActive, setMarsActive] = useState(false);
  const [europaActive, setEuropaActive] = useState(false);
  const [titanActive, setTitanActive] = useState(false);

  function setActivePath() {
    if (pathName === "moon") {
      setMoonActive(true);
      setMarsActive(false);
      setEuropaActive(false);
      setTitanActive(false);
    } else if (pathName === "mars") {
      setMoonActive(false);
      setMarsActive(true);
      setEuropaActive(false);
      setTitanActive(false);
    } else if (pathName === "europa") {
      setMoonActive(false);
      setMarsActive(false);
      setEuropaActive(true);
      setTitanActive(false);
    } else if (pathName === "titan") {
      setMoonActive(false);
      setMarsActive(false);
      setEuropaActive(false);
      setTitanActive(true);
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
    <div className="DestinationNavigation ">
      <Link
        className={` link ${classNameHandler(moonActive)}`}
        to={"/destination/moon"}
        onClick={() => setPathName("moon")}
      >
        Moon
      </Link>
      <Link
        className={`link ${classNameHandler(marsActive)}`}
        to={"/destination/mars"}
        onClick={() => setPathName("mars")}
      >
        mars
      </Link>
      <Link
        className={`link ${classNameHandler(europaActive)}`}
        to={"/destination/europa"}
        onClick={() => setPathName("europa")}
      >
        Europa
      </Link>
      <Link
        className={`link ${classNameHandler(titanActive)}`}
        to={"/destination/titan"}
        onClick={() => setPathName("titan")}
      >
        Titan
      </Link>
    </div>
  );
}
