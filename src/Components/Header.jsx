import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminContext } from "../context/Admin";

const Header = () => {
  const { userInfo, setUserInfo } = useContext(adminContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const logout = () => {
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    });
    setUserInfo(null);
    navigate("/");
  };

  const username = userInfo?.username;

  return (
    <div className=" h-[100px] flex items-center text-2xl justify-between  font-bold p-4 bg-blue-400 ">
      DEALSDRAY ONLINE PVT. LTD
      {username ? (
        <div className=" flex gap-5 items-center justify-center">
          <p>{username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
