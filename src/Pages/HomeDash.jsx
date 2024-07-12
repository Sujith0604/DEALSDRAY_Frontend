import { useContext, useRef, useState } from "react";
import { employeeContext } from "../context/Employee";
import { useNavigate } from "react-router-dom";

const HomeDash = () => {
  const { employee, setEmployee } = useContext(employeeContext);

  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  const designationref = useRef();
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = nameRef.current.value;
    const email = emailRef.current.value;
    const mobileNumber = mobileRef.current.value;

    const designation = designationref.current.value;

    const response = await fetch("http://localhost:3000/create_employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        mobileNumber,
        designation,
        gender,
        course,
      }),
    });

    const data = await response.json();
    setEmployee([...employee, data.data]);
    nameRef.current.value = "";
    emailRef.current.value = "";
    mobileRef.current.value = "";

    designationref.current.value = "";
    setGender("");
    setCourse("");

    alert("employee added successfully");
    navigate("/dashboard/employees");
  };

  return (
    <div className=" flex flex-col gap-5 items-center mt-10">
      <div className=" text-3xl font-bold">Add Employees</div>
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
          <label className=" font-semibold">Mobile No</label>
          <input ref={mobileRef} className="border" type="number" />
        </div>
        <div className=" w-full flex items-center justify-between">
          <label className=" font-semibold">Designation</label>
          <select ref={designationref} className=" border">
            <option value=""></option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className=" w-full flex items-center justify-between">
          <label className=" font-semibold">Gender</label>
          <input
            type="radio"
            onChange={(e) => setGender(e.target.value)}
            value="Male"
            name="gender"
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
            name="gender"
          />{" "}
          Female
        </div>
        <div className=" w-full flex items-center justify-between">
          <label className=" font-semibold">Course</label>
          MCA{" "}
          <input
            className="border"
            value="MCA"
            name="course"
            type="Checkbox"
            onChange={(e) => setCourse(e.target.value)}
          />
          BCA{" "}
          <input
            value="BCA"
            className="border"
            name="course"
            type="Checkbox"
            onChange={(e) => setCourse(e.target.value)}
          />
          BSC{" "}
          <input
            value="BSC"
            className="border"
            name="course"
            type="Checkbox"
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        <div>
          <button
            className="border p-4 bg-blue-100 flex items-center justify-center font-semibold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default HomeDash;
