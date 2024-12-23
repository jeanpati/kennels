import { useContext, useEffect } from "react";
import { CustomerContext } from "./customer-provider";

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  return (
    <section className="customers">
      {customers.map((customer) => {
        return (
          <div className="customer" key={`customer--${customer.id}`}>
            <div className="customer__name">Customer Name: {customer.name}</div>
            <div className="customer__address">Address: {customer.address}</div>
          </div>
        );
      })}
    </section>
  );
};
