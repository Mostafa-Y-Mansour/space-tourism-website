import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TechnologyNavigation.css";

export default function TechnologyNavigation(props) {
  const [pathName, setPathName] = useState("");

  const [oneActive, setOne] = useState(false);
  const [twoActive, setTwo] = useState(false);
  const [threeActive, setThree] = useState(false);

  const links = ["one", "two", "three"];

  function setActivePath() {
    if (pathName === "one") {
      setOne(true);
      setTwo(false);
      setThree(false);
    } else if (pathName === "two") {
      setOne(false);
      setTwo(true);
      setThree(false);
    } else if (pathName === "three") {
      setOne(false);
      setTwo(false);
      setThree(true);
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
    <div className="technologyNavigation">
      <Link
        className={`link  ${classNameHandler(oneActive)}`}
        to={"/technology/one"}
        onClick={() => {
          setPathName("one");
        }}
      >
        1
      </Link>
      <Link
        className={`link ${classNameHandler(twoActive)}`}
        to={"/technology/two"}
        onClick={() => setPathName("two")}
      >
        2
      </Link>
      <Link
        className={`link ${classNameHandler(threeActive)}`}
        to={"/technology/three"}
        onClick={() => setPathName("three")}
      >
        3
      </Link>
    </div>
  );
}
