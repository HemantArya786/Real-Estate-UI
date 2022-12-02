import "./App.css";
import Navbar from "./Navbar/Navbar";
import Filter from "./Filter/FilterSection";
import CartCard from "./Cartcard/CartCards";
import Heading from "./Heading/Heading";

function App() {
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
          />
          <Filter
            lable={" when"}
            Heading
            choose={["23.10.2019", "big", "23.10.21", "start"]}
          />
          <Filter lable={" price"} choose={["500"]} />
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
          <CartCard
            title={"Palm Harbor"}
            bed={"2 beds"}
            bathroom={"2 bathrooms"}
            area={"3x10m2"}
            price={"4,500"}
          />
          <CartCard
            classname={"px-3"}
            title={"home"}
            bed={"2 beds"}
            bathroom={"2 bathrooms"}
            area={"3x10m2"}
            price={"4,500"}
          />
          <CartCard
            title={"Faulkner Ave"}
            bed={"2 beds"}
            bathroom={"3 bathrooms"}
            area={"3x10m2"}
            price={"4,500"}
          />
          <CartCard
            title={"home"}
            bed={"2 beds"}
            bathroom={"1 bathrooms"}
            area={"3x10m2"}
            price={"4,500"}
          />
          <CartCard
            title={"home"}
            bed={"2 beds"}
            bathroom={" 2 bathrooms"}
            area={"3x10m2"}
            price={"4,500"}
          />
          <CartCard
            title={"home"}
            bed={"2 beds"}
            bathroom={"3 bathrooms"}
            area={"3x10m2"}
            price={"4,500"}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
