import React, { useEffect, useState } from "react";
import { getCrewApi } from "../../service/api";
import "./Crew.css";
import CrewNavigation from "../CrewNavigation";

export default function Crew(props) {
  const { id } = props;

  const [isLoading, setLoading] = useState(true);
  const [crewData, setCrewData] = useState({});
  const [isActive, setActive] = useState(false);

  const getCrewData = (id) => {
    getCrewApi(id)
      .then((res) => {
        setActive(true);
        setTimeout(() => {
          setCrewData(res);
          setActive(false);
        }, 600);
      })
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCrewData(id);
  }, [isLoading, id]);

  const content = (data) => {
    return (
      <div className={`crew ${isActive ? "transition" : ""} `}>
        <div className="crew-info">
          <div className="crew-text">
            <div className="crew-role">{data.role}</div>
            <div className="crew-name">{data.name}</div>
            <p className="crew-bio">{data.bio}</p>
          </div>
          <CrewNavigation />
        </div>
        <div className="crew-image">
          <img src={data.images?.webp} alt="" />
        </div>
      </div>
    );
  };

  return isLoading ? (
    <h1 style={{ textAlign: "center" }}>loading</h1>
  ) : (
    content(crewData)
  );
}
