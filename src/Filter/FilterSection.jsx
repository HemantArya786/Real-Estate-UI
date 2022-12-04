import React from "react";
import "./Filter.css";
function Filter({ label, choose, onChange }) {
  return (
    <main className="col-sm-3 px-2  filter-border  " style={{ flex: 1 }}>
      <div className="  w-100 ">
        <label className="form-label">
          <b className="  px-sm-3 lable-color"> {label}</b>
        </label>
        <select
          id="inputState"
          className="form-select border-0 "
          onChange={onChange}
        >
          <option className="" selected>
            Choose
          </option>
          {choose.map((item) => (
            <option key={item.title}>{item}</option>
          ))}
        </select>
      </div>
    </main>
  );
}
export default Filter;
