import { useContext, useEffect } from "react";
import { EmployeeContext } from "./employee-provider";
import { useNavigate } from "react-router-dom";

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  const navigate = useNavigate();

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  return (
    <section className="employees">
      <button
        onClick={() => {
          navigate("/employees/create");
        }}
      >
        Add Employee
      </button>
      {employees.map((employee) => {
        return (
          <div className="employee" key={`employee--${employee.id}`}>
            <div className="employee--name">Employee Name: {employee.name}</div>
            <div className="employee--role">Role: {employee.role}</div>
          </div>
        );
      })}
    </section>
  );
};
