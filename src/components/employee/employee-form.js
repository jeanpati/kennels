import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./employee-provider";
import { LocationContext } from "../location/location-provider";
import { useNavigate } from "react-router-dom";

export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [employee, setEmployee] = useState({
    name: "",
    role: "",
    locationId: 0,
  });

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getLocations().then(setLoading(false));
  }, [getLocations]);

  const handleControlledInputChange = (event) => {
    const newEmployee = { ...employee };
    newEmployee[event.target.id] = event.target.value;
    setEmployee(newEmployee);
  };

  const handleClickSaveEmployee = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const locationId = parseInt(employee.locationId);

    if (locationId === 0) {
      window.alert("Please select a location and a customer");
    } else {
      //Invoke addemployee passing the new employee object as an argument
      //Once complete, change the url and display the employee list

      const newEmployee = {
        name: employee.name,
        role: employee.role,
        locationId: locationId,
      };
      addEmployee(newEmployee).then(() => navigate("/employees"));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee name:</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="Employee name"
            value={employee.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee role:</label>
          <input
            type="text"
            id="role"
            required
            autoFocus
            className="form-control"
            placeholder="Employee breed"
            value={employee.role}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            name="locationId"
            id="locationId"
            className="form-control"
            value={employee.locationId}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a location</option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
        Save Employee
      </button>
    </form>
  );
};
