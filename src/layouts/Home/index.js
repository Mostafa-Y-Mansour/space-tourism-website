import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home(props) {
  return (
    <div className="home">
      <div className="main">
        <div className="content container">
          <div className="text-box">
            <h1>So, you want to travel to</h1>
            <span>space</span>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="explore">
            <Link to="/destination" onClick={() => ""}>
              explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
