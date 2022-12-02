import React from "react";
function Heading({ search }) {
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
          {search.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Heading;
