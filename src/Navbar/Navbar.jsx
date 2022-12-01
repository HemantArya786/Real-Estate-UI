import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";
import logo from "../logo.png";

function Navbar() {
  return (
    <main className=" d-flex   mb-2 Navbar ">
      <div className=" col-2  justify-content-center align-items-center d-flex">
        <img src={logo} className="icon-size " alt="error" />
      </div>
      <div className=" col-8 d-flex gap-3  mt-2 mb-4  ">
        <span className=" p-3 buttoncolor rounded d-flex align-items-center">
          <p className="m-0">
            <b>Rent</b>
          </p>
        </span>
        <span className=" buttoncolor px-3  d-flex rounded align-items-center">
          <p className="m-0">
            <b>Buy</b>
          </p>
        </span>
        <span className=" p-3  buttoncolor d-flex rounded align-items-center">
          <p className="m-0">
            <b>Sell</b>
          </p>
        </span>
        <span className=" p-3 buttoncolor rounded d-flex align-items-center">
          <p className="m-0">
            <b>
              Manage Property <FaChevronDown />
            </b>
          </p>
        </span>
        <span className=" p-3 rounded buttoncolor d-flex align-items-center">
          <p className="m-0">
            <b>
              Resources <FaChevronDown />
            </b>
          </p>
        </span>
      </div>
      <div className=" d-flex gap-3 col-3  ">
        <div className=" d-flex align-items-center ">
          <button className="btn border button-color-login px-4 py-2 ">
            <b>Login</b>
          </button>
        </div>

        <div className="d-flex align-items-center">
          <button className=" border-round border-0 text-white button-color-sign-up px-4 py-2">
            <b>Sign up</b>
          </button>
        </div>
      </div>
    </main>
  );
}
export default Navbar;
