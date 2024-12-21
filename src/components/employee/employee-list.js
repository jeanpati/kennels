import { useContext, useEffect } from "react";
import { EmployeeContext } from "./employee-provider";

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  return (
    <section className="employees">
      {employees.map((employee) => {
        return (
          <div className="employee" key={`employee--${employee.id}`}>
            <div className="employee--name">{employee.name}</div>
            <div className="employee--role">{employee.role}</div>
          </div>
        );
      })}
    </section>
  );
};
