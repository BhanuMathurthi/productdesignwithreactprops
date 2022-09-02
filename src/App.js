import "./App.css";
// import Person from "./components/Person";
// import ProductMain from "./components2/productmain";
import Product from "./components3/Products";

export default function App() {
  return (
    <div className="container my-5">
      {/* <ProductMain /> */}
      {/* <Person
        name="bhanu"
        email="bhanu2@gmail.com"
        age={24}
        isMarried={false}
        friends={["siri", "ganesh", "dev"]}
      /> */}

      <Product />
    </div>
  );
}
