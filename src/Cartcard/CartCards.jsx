import React from "react";
import "./CartCards.css";
import { BiBed } from "react-icons/bi";
import { TbBath } from "react-icons/tb";
import { CiSquareAlert } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";

function CartCard({ classname, title, bed, bathroom, area, price }) {
  return (
    <main
      //  className={`col-sm-4 my-3 gap-3 border border-success d-flex justify-content-center ${classname}`}
      className="col-sm-4 my-2 gap-3  d-flex justify-content-center  px-2  "
    >
      <div className="card ">
        <img
          src="https://img.staticmb.com/mbcontent//images/uploads/2022/5/modern-kerala-house-design.jpg"
          className="card-img-top"
          alt="err"
        />
        <div className="card-body">
          <div className="d-flex justify-content-between ">
            <h1 className="d-flex">
              <h5>
                <b className="price-color">${price}</b>
              </h5>
              <h6>/months</h6>
            </h1>
            <button className="btn border m-1 rounded-circle">
              <FiHeart className="icon-color" />
            </button>
          </div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">bulk of the card's content.</p>
          <div className="d-flex">
            <div className="col-sm-4 gap-2 d-flex justify-content-center align-items-center">
              <div>
                <BiBed className="icon-color" />
              </div>

              <div>{bed}</div>
            </div>
            <div className="col-4 gap-1 d-flex justify-content-center align-items-center ">
              <div>
                <TbBath className="icon-color" />
              </div>
              <div className=""> {bathroom}</div>
            </div>
            <div className="col-4 gap-2  d-flex justify-content-center align-items-center">
              <div>
                <CiSquareAlert className="icon-color" />
              </div>
              <div>{area}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default CartCard;
