import React from "react";
import { Route, Routes } from "react-router-dom";
import { LocationProvider } from "./location/location-provider.js";
import { LocationList } from "./location/location-list.js";
import { AnimalProvider } from "./animal/animal-provider.js";
import { AnimalList } from "./animal/animal-list.js";
import { EmployeeProvider } from "./employee/employee-provider.js";
import { EmployeeList } from "./employee/employee-list.js";
import { CustomerProvider } from "./customer/customer-provider.js";
import { CustomerList } from "./customer/customer-list.js";
import { AnimalForm } from "./animal/animal-form.js";

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
          path="/animals/create"
          element={
            <AnimalProvider>
              <LocationProvider>
                <CustomerProvider>
                  <AnimalForm />
                </CustomerProvider>
              </LocationProvider>
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

        <Route
          exact
          path="/employees/create"
          element={
            <AnimalProvider>
              <LocationProvider>
                <CustomerProvider>
                  <AnimalForm />
                </CustomerProvider>
              </LocationProvider>
            </AnimalProvider>
          }
        ></Route>
      </Routes>
    </>
  );
};
