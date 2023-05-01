import axios from "axios";

export const getDestinationApi = (id) =>
  axios
    .get(
      `https://mostafa-y-mansour.github.io/space-tourism-website-api/api.json`
    )
    .then((res) => res.data)
    .then((data) => data.destinations[id - 1]);

export const getCrewApi = (id) =>
  axios
    .get(
      `https://mostafa-y-mansour.github.io/space-tourism-website-api/api.json`
    )
    .then((res) => res.data)
    .then((data) => data.crew[id - 1]);

export const getTechnologyApi = (id) =>
  axios
    .get(
      `https://mostafa-y-mansour.github.io/space-tourism-website-api/api.json`
    )
    .then((res) => res.data)
    .then((data) => data.technology[id - 1]);
