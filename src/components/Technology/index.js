import React, { useEffect, useState } from "react";
import TechnologyNavigation from "../TechnologyNavigation";
import { getTechnologyApi } from "../../service/api";
import "./Technology.css";

export default function Technology(props) {
  const { id } = props;

  const [isLoading, setLoading] = useState(true);
  const [destinationData, setDestinationData] = useState({});
  const [isActive, setActive] = useState(false);

  const getTechnologyData = (id) => {
    getTechnologyApi(id)
      .then((res) => {
        setActive(true);
        setTimeout(() => {
          setDestinationData(res);
          setActive(false);
        }, 600);
      })
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getTechnologyData(id);
  }, [isLoading, id]);

  const content = (data) => {
    return (
      <div className={`technology ${isActive ? "transition" : ""} `}>
        <div className="technology-content">
          <TechnologyNavigation />
          <div className="technology-info">
            <div className="technology-text">
              <h3>the technology...</h3>
              <div className="technology-name">{data.name}</div>
              <p className="technology-description">{data.description}</p>
            </div>
          </div>
        </div>
        <div className="technology-image">
          <img
            className="landscape-image"
            src={data.images?.landscape}
            alt=""
          />
          <img className="portrait-image" src={data.images?.portrait} alt="" />
        </div>
      </div>
    );
  };

  return isLoading ? (
    <h1 style={{ textAlign: "center" }}>loading</h1>
  ) : (
    content(destinationData)
  );
}
