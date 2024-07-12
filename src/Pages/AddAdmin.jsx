import { useContext, useRef } from "react";
import { adminContext } from "../context/Admin";

const AddAdmin = () => {
  const { admins } = useContext(adminContext);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    fetch("http://localhost:3000/register_admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    }).catch((err) => {
      console.log(err);
    });

    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    alert("Admin Added Successfully");
    nameRef.focus();
  };

  return (
    <div className=" flex  items-center justify-around gap-11 mt-10">
      <div className=" flex flex-col gap-5 items-center justify-center">
        <h1 className=" text-4xl font-bold">Add Admins</h1>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
          <div className=" w-full flex items-center justify-between">
            <label className=" font-semibold">Name</label>
            <input ref={nameRef} className="border" type="text" />
          </div>
          <div className=" w-full flex items-center justify-between">
            <label className=" font-semibold">Email</label>
            <input ref={emailRef} className="border" type="email" />
          </div>
          <div className=" w-full flex items-center justify-between">
            <label className=" font-semibold">Password</label>
            <input ref={passwordRef} className="border" type="password" />
          </div>
          <div>
            <button className="border p-4 bg-blue-100" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className=" flex flex-col gap-5 items-center justify-center">
        <h1 className=" text-4xl font-bold">Admin Table</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.NO
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {admins?.map((admin, index) => (
                <tr
                  key={admin._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{admin.username}</td>
                  <td className="px-6 py-4">{admin.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
