import React, { useContext, useEffect } from "react";
import { LocationContext } from "./location-provider";

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    console.log("LocationList: useEffect - getLocations");
    getLocations();
  }, [getLocations]);

  return (
    <section className="locations">
      {locations.map((location) => {
        return (
          <div className="location" key={`location--${location.id}`}>
            <div className="location__name">Name: {location.name}</div>
            <div className="location__address">Address: {location.address}</div>
          </div>
        );
      })}
    </section>
  );
};
