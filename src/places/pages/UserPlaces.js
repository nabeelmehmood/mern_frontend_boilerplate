import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import { userInfo } from "os";


const UserPlaces = () => {
  const PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One the of most famous sky scrapers in the world",
      imageUrl: "https://source.unsplash.com/random",
      address: "20 W 34th St, New York, NY 10001, United States",
      location: {
        lat: 40.7484405,
        lng: -73.9878531
      },
      creator: "u1"
    },
    {
        id: "p2",
        title: "Empire State Building",
        description: "One the of most famous sky scrapers in the world",
        imageUrl: "https://source.unsplash.com/random",
        address: "20 W 34th St, New York, NY 10001, United States",
        location: {
          lat: 40.7484405,
          lng: -73.9878531
        },
        creator: "u2"
      }
  ];

  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
