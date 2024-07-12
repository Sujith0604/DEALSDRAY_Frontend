import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { employeeContext } from "../context/Employee";
import { adminContext } from "../context/Admin";

const DashBoard = () => {
  const { employee } = useContext(employeeContext);
  const { admins } = useContext(adminContext);

  return (
    <div>
      <nav className=" flex gap-5 h-[100px] items-center justify-center p-4 bg-blue-100 font-semibold text-xl">
        <NavLink
          className=" hover:cursor-pointer hover:text-cyan-800"
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className=" hover:cursor-pointer hover:text-cyan-800"
          to="/dashboard/home"
        >
          Add-Employees
        </NavLink>
        <NavLink
          className=" hover:cursor-pointer hover:text-cyan-800"
          to="/dashboard/employees"
        >
          EmployeList
        </NavLink>
        <NavLink
          className=" hover:cursor-pointer hover:text-cyan-800"
          to="/dashboard/addadmin"
        >
          Add-Admin
        </NavLink>
      </nav>
      <main
        className="p-4 
      "
      >
        <section className=" flex items-center justify-center gap-5 flex-col">
          <p className=" text-4xl font-bold">Welcome to your dashboard</p>
          <div className=" flex items-center justify-center gap-5">
            <p className=" flex items-center justify-center bg-blue-100 text-xl font-semibold py-4 px-4 rounded-full h-[200px]">
              Total Employees : {employee.length}
            </p>
            <p className=" flex items-center justify-center bg-blue-100 text-xl font-semibold py-4 px-8 rounded-full h-[200px]">
              Total Admins : {admins.length}
            </p>
          </div>
        </section>
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoard;
