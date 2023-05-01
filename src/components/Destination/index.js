import React, { useEffect, useState } from "react";
import DestinationNavigation from "../DestinationNavigation";
import "./Destination.css";
import { getDestinationApi } from "../../service/api";

export default function DestinationOption(props) {
  const { id } = props;

  const [isLoading, setLoading] = useState(true);
  const [destinationData, setDestinationData] = useState({});
  const [isActive, setActive] = useState(false);

  const getDestinationApiData = (id) => {
    getDestinationApi(id)
      .then((res) => {
        setLoading(true);
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
    getDestinationApiData(id);
  }, [isLoading, id]);

  const content = (data) => {
    return (
      <div className={`destination ${isActive ? "transition" : ""} `}>
        <div className="planet-image">
          <img src={data.images?.webp} alt="" />
        </div>
        <div className="planet-info">
          <DestinationNavigation />
          <div className="planet">
            <h3 className="planet-name">{data.name}</h3>
            <p className="planet-description">{data.description}</p>
            <div className="line-break" />
            <div className="trip-data">
              <span>
                <h3>AVG. DISTANCE</h3>
                <p>{data.distance}</p>
              </span>
              <span>
                <h3>Est. travel time</h3>
                <p>{data.travel}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return isLoading ? (
    <h1 style={{ textAlign: "center" }}>
      <span className="loader"></span>
    </h1>
  ) : (
    content(destinationData)
  );
}
