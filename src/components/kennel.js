import React from "react";
import { LocationList } from "./location-list/location.js";
import { AnimalProvider } from "./animal/animal-provider.js";
import { AnimalList } from "./animal/animal-list.js";
import { LocationProvider } from "./location/location-provider.js";

export const Kennel = () => {
  <>
    <h2>Nashville Kennels</h2>
    <AnimalProvider>
      <AnimalList />
    </AnimalProvider>
    <LocationProvider>
      <LocationList />
    </LocationProvider>
  </>;
};
