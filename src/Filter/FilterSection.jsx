import React from "react";
import "./Filter.css";
function Filter({ lable, choose, onChange }) {
  return (
    <main className="d-flex px-2 filter-border  " style={{ flex: 1 }}>
      <div className="  w-100">
        <label className="form-label">
          <b className="lable-color"> {lable}</b>
        </label>
        <select
          id="inputState"
          className="form-select border-0"
          onChange={onChange}
        >
          <option className="" selected>
            Choose
          </option>
          {choose.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
    </main>
  );
}
export default Filter;
