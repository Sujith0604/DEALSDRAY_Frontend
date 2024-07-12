import { createContext, useEffect, useState } from "react";

export const employeeContext = createContext();

function Employee({ children }) {
  const [employee, setEmployee] = useState([]);

  const fetchEmployees = async () => {
    const response = await fetch("http://localhost:3000/employee");
    const data = await response.json();
    setEmployee(data.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <employeeContext.Provider value={{ employee, setEmployee }}>
      {children}
    </employeeContext.Provider>
  );
}

export default Employee;
