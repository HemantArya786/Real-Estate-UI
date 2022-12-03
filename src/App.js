import "./App.css";
import Navbar from "./Navbar/Navbar";
import Filter from "./Filter/FilterSection";
import CartCard from "./Cartcard/CartCards";
import Heading from "./Heading/Heading";
import Data from "./Content/Data";
import { useState } from "react";

function App() {
  const [houses, setHouses] = useState(Data);

  const filterLocation = (e) => {
    const location = e.target.value;

    let newHousesList = Data.filter((item) => item.location === location);
    setHouses(newHousesList);
  };
  const filterPrice = (e) => {
    const price = e.target.value;
    let newPricelist = Data.filter((item) => item.price === price);
    setHouses(newPricelist);
  };
  const filterProperty = (e) => {
    const Property = e.target.value;
    const newProperty = Data.filter((item) => item.property === Property);
    setHouses(newProperty);
  };

  const searchByTitle = (e) => {
    const Title = e.target.value;
    const newTitle = Data.filter((item) => item.title === Title);
    setHouses(newTitle);
  };
  return (
    <main className="App ">
      <div>
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
            onChange={searchByTitle}
          />
        </div>
        <div className="d-flex w-100   py-4 filter-background  my-5">
          <Filter
            lable={" Loacton"}
            Heading
            choose={["Noida", "Goa", "Pune", "Agra"]}
            onChange={filterLocation}
          />
          <Filter lable={" when"} Heading choose={["23.10.2019"]} />
          <Filter
            lable={" price"}
            choose={["1100", "1200", "1500", "1000", "1600", "900", "2200"]}
            onChange={filterPrice}
          />
          <Filter
            lable={" Property type"}
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
            className=" d-flex justify-content-center  my-2 "
          >
            <button className=" border-0 text-white button-search px-4 ">
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
