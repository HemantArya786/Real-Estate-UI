import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";
import logo from "../logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.innerWidth > 500 ? setShowMenu(true) : setShowMenu(false);
  }, []);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <main className=" d-flex flex-column flex-sm-row  mb-2 Navbar  p-sm-3 ">
      <div className=" col-sm-2 nav-icon-container justify-content-sm-center justify-content-between align-items-center d-flex">
        <img src={logo} className="icon-size " alt="error" />
        <button onClick={toggleMenu} className="d-sm-none btn ">
          {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      {showMenu ? (
        <div className=" col-sm-8  d-flex flex-sm-row flex-column gap-sm-3 gap-0  nav-mid-section ">
          <span className=" p-3 buttoncolor  rounded d-flex flex-wrap align-items-center">
            <p className="m-0">
              <b>Rent</b>
            </p>
          </span>
          <div className=" buttoncolor p-3  d-flex rounded align-items-center">
            <p className="m-0">
              <b>Buy</b>
            </p>
          </div>
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
      ) : null}
      <div className=" d-flex gap-3 col-sm-2 p-sm-0 p-3  justify-content-between justify-content-sm-center button-section-div  ">
        <div className=" d-flex align-items-center ">
          <button className="btn border border-2 button-color-login px-4 py-2 ">
            <b>Login</b>
          </button>
        </div>

        <div className="d-flex align-items-center ">
          <button className=" border-round border-0 text-white button-color-sign-up px-4 py-2">
            <b className="d-flex ">Signup</b>
          </button>
        </div>
      </div>
    </main>
  );
}
export default Navbar;
