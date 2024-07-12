import { useContext, useState } from "react";
import { employeeContext } from "../context/Employee";
import { NavLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const EmployeList = () => {
  const { employee, setEmployee } = useContext(employeeContext);

  const [query, setQuery] = useState("");

  const filteredProducts = employee.filter((user) => {
    return (
      user.username.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user._id.toLowerCase().includes(query.toLowerCase()) ||
      user.designation.toLowerCase().includes(query.toLowerCase()) ||
      user.createdAt.includes(query)
    );
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/employee/${id}`, {
      method: "DELETE",
    });
    alert("Employee Deleted");
    setEmployee(employee.filter((emp) => emp._id !== id));
  };

  return (
    <div className=" flex flex-col gap-5">
      <div className=" flex gap-2 items-center">
        <label className=" font-bold">Search</label>
        <input
          className=" py-2 px-4 border rounded-full"
          type="text"
          placeholder="Search the employee"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3">
                S.NO
              </th>

              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile number
              </th>
              <th scope="col" className="px-6 py-3">
                Designation
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts?.map((member, index) => {
              return (
                <tr
                  key={member._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>

                  <td className="px-6 py-4">{member.createdAt}</td>
                  <td className="px-6 py-4">{member.username}</td>
                  <td className="px-6 py-4">{member.email}</td>
                  <td className="px-6 py-4">{member.mobileNumber}</td>
                  <td className="px-6 py-4">{member.designation}</td>
                  <td className="px-6 py-4">{member.course}</td>
                  <td className="px-6 py-4">{member.gender}</td>
                  <td className="px-6 py-4 flex gap-2 items-center justify-center">
                    <NavLink to={`/dashboard/employees/update/${member._id}`}>
                      <EditIcon />
                    </NavLink>
                    <button onClick={() => handleDelete(member._id)}>
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeList;
