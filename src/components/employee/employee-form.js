import { useContext, useState } from "react";
import { EmployeeContext } from "./employee-provider";
import { LocationContext } from "../location/location-provider";

export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [employee, setEmployee] = useState({
    name: "",
    role: "",
    locationId: 0,
  });
};
