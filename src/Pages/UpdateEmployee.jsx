import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateEmployee = () => {
  const { id } = useParams();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState();
  const [designation, setDesignation] = useState("");

  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");

  const fetchSingleEmployee = async () => {
    try {
      const response = await fetch(`http://localhost:3000/employee/${id}`);
      const data = await response.json();
      setUsername(data.data.username);
      setEmail(data.data.email);
      setMobileNumber(data.data.mobileNumber);
      setDesignation(data.data.designation);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSingleEmployee();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3000/employee/${id}`, {
        method: "PATCH",
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
      }).then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        setUsername("");
        setEmail("");
        setMobileNumber("");
        setDesignation("");

        setGender("");
        setCourse("");

        alert("employee updated successfully");
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className=" flex flex-col gap-5 items-center justify-center mt-10">
      <div className=" text-3xl font-bold">Edit Employees</div>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
        <div className=" w-full flex items-center gap-3 justify-between">
          <label className=" font-semibold">Name</label>
          <input
            className="border"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
        </div>
        <div className=" w-full flex items-center gap-3 justify-between">
          <label className=" font-semibold">Email</label>
          <input
            className="border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div className=" w-full flex items-center gap-3 justify-between">
          <label className=" font-semibold">Mobile No</label>
          <input
            className="border"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            type="number"
          />
        </div>
        <div className=" w-full flex items-center gap-3 justify-between">
          <label className=" font-semibold">Designation</label>
          <select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          >
            <option value=""></option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className=" w-full flex items-center gap-3 justify-between">
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
        <div className=" w-full flex items-center gap-3 justify-between">
          <label className="font-semibold">Course</label>
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
          <button className="border p-4" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployee;
