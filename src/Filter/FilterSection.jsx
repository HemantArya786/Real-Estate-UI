import React from "react";
import "./Filter.css";
function Filter({ lable, choose }) {
  return (
    <main className="d-flex px-2 filter-border" style={{ flex: 1 }}>
      <div className="  w-100">
        <label for="inputState" className="form-label">
          <b> {lable}</b>
        </label>
        <select id="inputState" className="form-select ">
          <option selected>{choose}</option>
          <option>delhi</option>
          <option>pune</option>
          <option>kolkata</option>
          <option>goa</option>
        </select>
      </div>
    </main>
  );
}
export default Filter;
