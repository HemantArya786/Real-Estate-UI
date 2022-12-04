import "./App.css";
import Navbar from "./Navbar/Navbar";
import Filter from "./Filter/FilterSection";
import CartCard from "./Cartcard/CartCards";
import Heading from "./Heading/Heading";
import Data from "./Content/Data";
import { useState } from "react";

function App() {
  const [houses, setHouses] = useState(Data);
  const [filter, setFilter] = useState({
    title: "",
    location: "",
    price: "",
    property: "",
    date: "",
  });

  const selectData = () => {
    let result = Data;

    if (filter.location !== "") {
      result = Data.filter((item) => item.location === filter.location);
    }

    if (filter.title !== "") {
      result = Data.filter((item) => item.title === filter.title);
    }

    if (filter.price !== "") {
      result = Data.filter((item) => item.price === filter.price);
    }

    if (filter.property !== "") {
      result = Data.filter((item) => item.property === filter.property);
    }
    if (filter.date !== "") {
      result = Data.filter((item) => item.date === filter.date);
    }

    setHouses(result);
  };

  const filterLocation = (e) => {
    setFilter({ ...filter, location: e.target.value });
  };
  const filterPrice = (e) => {
    setFilter({ ...filter, price: e.target.value });
  };

  const filterProperty = (e) => {
    setFilter({ ...filter, property: e.target.value });
  };

  const searchByTitle = (e) => {
    setFilter({ ...filter, title: e.target.value });
  };
  const filterDate = (e) => {
    setFilter({ ...filter, date: e.target.value });
  };

  return (
    <main className="App ">
      <div className="">
        <Navbar />
      </div>
      <section className=" container py-3 ">
        <div>
          <Heading
            search={[
              "townhouse 1",
              "townhouse 2",
              "townhouse 3",
              "townhouse 4",
              "townhouse 5",
              "townhouse 6",
              "townhouse 7",
              "townhouse 8",
              "townhouse 9",
              "townhouse 10",
              "townhouse 11",
              "townhouse 12",
            ]}
            onChange={(e) => {
              searchByTitle(e);
              selectData();
            }}
          />
        </div>
        <div className="d-flex w-100 flex-wrap  py-4 filter-background  my-5">
          <Filter
            label={"Location"}
            Heading
            choose={["Noida", "Goa", "Pune", "Agra"]}
            onChange={filterLocation}
          />
          <Filter
            label={"when"}
            Heading
            choose={[
              "23.10.2019",
              "24.10.2019",
              "22.10.2019",
              "25.10.2019",
              "27.10.2019",
              "26.10.2019",
            ]}
            onChange={filterDate}
          />
          <Filter
            label={"price"}
            choose={["1100", "1200", "1500", "1000", "1600", "900", "2200"]}
            onChange={filterPrice}
          />
          <Filter
            label={"Property type"}
            choose={[
              "house",
              "flat",
              "penthouse",
              "apartment",
              "land",
              "guesthouse",
            ]}
            onChange={filterProperty}
          />
          <div
            style={{ flex: 1 }}
            className=" d-flex justify-content-center flex-wrap  my-2 "
          >
            <button
              className=" border-0 text-white button-search px-4 "
              onClick={selectData}
            >
              Search
            </button>
          </div>
        </div>
        <div className="d-flex flex-wrap   ">
          {houses.map((item) => (
            <CartCard data={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
