import React from "react";
import { useParams } from "react-router-dom";
import PlacesList from "../components/PlacesList";

const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    address: "20 W 34th St, New York, NY 10001",
    creatorId: "u1",
    location: {
      lat: 40.7485611,
      lng: -73.9945183,
    },
  },
  {
    id: "p2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    address: "20 W 34th St, New York, NY 10001",
    creatorId: "u2",
    location: {
      lat: 40.7485611,
      lng: -73.9945183,
    },
  },
  {
    id: "p3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    address: "20 W 34th St, New York, NY 10001",
    creatorId: "u1",
    location: {
      lat: 40.7485611,
      lng: -73.9945183,
    },
  },
];

const UserPlaces = () => {
  const userID = useParams().userID;
  const locations = DUMMY_PLACES.filter((item) => item.creatorId === userID);
  return <PlacesList places={locations} />;
};

export default UserPlaces;
