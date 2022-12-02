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
    let newPriselist = Data.filter((item) => item.price === price);
    setHouses(newPriselist);
  };
  return (
    <main className="App ">
      <div>
        <Navbar />
      </div>
      <section className=" container py-3 ">
        <div>
          <Heading search={["hello", "big", "name", "start"]} />
        </div>
        <div className="d-flex w-100   py-4 filter-background  my-5">
          <Filter
            lable={" Loacton"}
            Heading
            choose={["Noida", "Goa", "Pune", "Agra"]}
            onChange={filterLocation}
          />
          <Filter
            lable={" when"}
            Heading
            choose={["23.10.2019", "big", "23.10.21", "start"]}
          />
          <Filter
            lable={" price"}
            choose={["1100", "1200", "1500", "1000", "1600"]}
            onChange={filterPrice}
          />
          <Filter lable={" Property type"} choose={["house"]} />
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
