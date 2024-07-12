import { useContext, useRef, useState } from "react";
import InputComponent from "../Components/InputComponent";
import { useNavigate } from "react-router-dom";
import { adminContext } from "../context/Admin";

const Login = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const { setUserInfo } = useContext(adminContext);

  const [errors, setErrors] = useState();
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const username = userNameRef.current.value;
      const password = passwordRef.current.value;

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (response.ok) {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
          setRedirect(true);
        });
      } else {
        alert("Wrong credentials");
      }
    } catch (error) {
      setErrors(error.message);
      console.log(error.message);
    } finally {
      userNameRef.current.value = "";
      passwordRef.current.value = "";
      setErrors(null);
    }
  };

  if (redirect) return navigate("/dashboard");

  return (
    <div className=" flex flex-col gap-5 items-center justify-center h-[500px]">
      <div className="text-3xl font-bold">Login</div>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
        <InputComponent
          title="User Name"
          storvar={userNameRef}
          type="text"
          id="username"
          placeholder="Enter your name"
        />
        <InputComponent
          title="Password"
          storvar={passwordRef}
          type="password"
          id="password"
          placeholder="Enter your Password"
        />

        <button className=" p-4 bg-blue-100" type="submit">
          Login
        </button>
      </form>
      {errors ? <p>{errors}</p> : ""}
    </div>
  );
};

export default Login;
