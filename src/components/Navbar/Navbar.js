import React from "react";
import { Link } from "react-router-dom";
import Class from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Class.nav}>
      <h1>Track All Your Habits In One Go</h1>
      <div>
        <Link className={Class.link} to={"/"}>
          Home
        </Link>
        <Link className={Class.link} to={"/dashboard"}>
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
