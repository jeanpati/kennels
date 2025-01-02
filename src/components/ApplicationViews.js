import React from "react";
import { Route, Routes } from "react-router-dom";
import { LocationProvider } from "./location/location-provider";
import { LocationList } from "./location/location-list";
import { AnimalProvider } from "./animal/animal-provider";
import { AnimalList } from "./animal/animal-list";
import { EmployeeProvider } from "./employee/employee-provider";
import { EmployeeList } from "./employee/employee-list";
import { CustomerProvider } from "./customer/customer-provider";
import { CustomerList } from "./customer/customer-list";

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        {/* Render the location list when http://localhost:3000/ */}
        <Route
          exact
          path="/locations"
          element={
            <LocationProvider>
              <LocationList />
            </LocationProvider>
          }
        ></Route>

        {/* Render the animal list when http://localhost:3000/animals */}
        <Route
          exact
          path="/animals"
          element={
            <AnimalProvider>
              <AnimalList />
            </AnimalProvider>
          }
        ></Route>
        <Route
          exact
          path="/customers"
          element={
            <CustomerProvider>
              <CustomerList />
            </CustomerProvider>
          }
        ></Route>
        <Route
          exact
          path="/employees"
          element={
            <EmployeeProvider>
              <EmployeeList />
            </EmployeeProvider>
          }
        ></Route>
      </Routes>
    </>
  );
};
