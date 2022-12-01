import React from "react";
function Heading() {
  return (
    <div className="d-flex justify-content-between">
      <div className="">
        <h1>
          <b>Search properties to rent</b>
        </h1>
      </div>
      <div className="  col-4">
        <select id="inputState" className="form-select border-0 ">
          <option selected>Search with Searchbar</option>
          <option>delhi</option>
          <option>pune</option>
          <option>kolkata</option>
          <option>goa</option>
        </select>
      </div>
    </div>
  );
}
export default Heading;
