import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}

export default HomePage;
