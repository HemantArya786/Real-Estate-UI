import React from "react";
import { BiBed } from "react-icons/bi";
import { TbBath } from "react-icons/tb";
import { CiSquareAlert } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";

function CartCard({ classname, title, bed, bathroom, area, price }) {
  return (
    <main
      //  className={`col-sm-4 my-3 gap-3 border border-success d-flex justify-content-center ${classname}`}
      className="col-sm-4 my-2 gap-3 border border-success d-flex justify-content-center  px-1  "
    >
      <div className="card ">
        <img
          src="https://img.staticmb.com/mbcontent//images/uploads/2022/5/modern-kerala-house-design.jpg"
          className="card-img-top"
          alt="err"
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h6>{price}</h6>
            <button className="btn btn-outline-dark circle">
              <FiHeart />
            </button>
          </div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">bulk of the card's content.</p>
          <div className="d-flex">
            <div className="col-3 border">
              <BiBed />

              {bed}
            </div>
            <div className="col-5 border">
              <TbBath />
              {bathroom}
            </div>
            <div className="col-4 border">
              <CiSquareAlert />
              {area}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default CartCard;
