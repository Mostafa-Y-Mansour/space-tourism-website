import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "./../pages/HomePage";
import Home from "../layouts/Home";
import Information from "../layouts/Information/";
import Destination from "../components/Destination";
import Crew from "../components/Crew";
import Technology from "./../components/Technology/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "",
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Information pageName="destination" />,
        children: [
          {
            path: "",
            element: <Navigate to="moon" />,
          },
          {
            path: "moon",
            element: <Destination id={"1"} />,
          },
          {
            path: "mars",
            element: <Destination id={"2"} />,
          },
          {
            path: "europa",
            element: <Destination id={"3"} />,
          },
          {
            path: "titan",
            element: <Destination id={"4"} />,
          },
        ],
      },
      {
        path: "crew",
        element: <Information pageName="crew" />,
        children: [
          {
            path: "",
            element: <Navigate to="commander" />,
          },
          {
            path: "commander",
            element: <Crew id={"1"} />,
          },
          {
            path: "mission-specialist",
            element: <Crew id={"2"} />,
          },
          {
            path: "pilot",
            element: <Crew id={"3"} />,
          },
          {
            path: "flight-engineer",
            element: <Crew id={"4"} />,
          },
        ],
      },
      {
        path: "technology",
        element: <Information pageName="technology" />,
        children: [
          {
            path: "",
            element: <Navigate to="one" />,
          },
          {
            path: "one",
            element: <Technology id="1" />,
          },
          {
            path: "two",
            element: <Technology id="2" />,
          },
          {
            path: "three",
            element: <Technology id="3" />,
          },
        ],
      },
    ],
  },
]);
