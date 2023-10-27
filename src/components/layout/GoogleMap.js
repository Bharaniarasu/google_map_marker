import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import "./map.scss";
import { useState } from "react";
import { useEffect } from "react";

export default function MapComponent() {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  if (!isLoaded) {
    return <>Loading...</>;
  } else {
    return <Map />;
  }
}

function Map() {
  const { userData } = useSelector((state) => state.UserDataState);
  const [coOrdinates, setCoOrdinates] = useState({
    lat: 0,
    lng: 0,
  });
  const center = coOrdinates;
  useEffect(() => {
    if (
      userData &&
      userData.company &&
      userData.company.address &&
      userData.company.address.coordinates
    ) {
      setCoOrdinates(userData.company.address.coordinates);
    }
  }, [userData]);
  return (
    <GoogleMap mapContainerClassName="map_container" center={center} zoom={4}>
      <MarkerF position={coOrdinates} draggable />
    </GoogleMap>
  );
}
