import React, { useEffect, useState } from "react";
import "./Information.css";
import { Outlet } from "react-router-dom";

export default function Information(props) {
  const { pageName } = props;

  const [page, setPage] = useState({});

  const setLayout = () => {
    if (pageName === "destination") {
      setPage({
        title: "Pick your destination",
        number: "01",
        className: "destination",
      });
    } else if (pageName === "crew") {
      setPage({
        title: "Meet your crew",
        number: "02",
        className: "crew",
      });
    } else if (pageName === "technology") {
      setPage({
        title: "SPACE LAUNCH 101",
        number: "03",
        className: "technology",
      });
    } else {
      setPage({
        title: "unknown",
        number: "00",
        className: "",
      });
    }
  };

  useEffect(() => {
    setLayout();
  }, [pageName]);

  return (
    <div className={`information ${page.className}`}>
      <div className="main">
        <div className="content container">
          <div className="static">
            <h2>
              <span>{page.number}</span> {page.title}
            </h2>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
