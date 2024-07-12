import { createContext, useEffect, useState } from "react";

export const adminContext = createContext();

function Admin({ children }) {
  const [admins, setAdmins] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const fetchAdmins = async () => {
    const response = await fetch("http://localhost:3000/admin");
    const data = await response.json();
    setAdmins(data.data);
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <adminContext.Provider value={{ admins, setAdmins, userInfo, setUserInfo }}>
      {children}
    </adminContext.Provider>
  );
}

export default Admin;
