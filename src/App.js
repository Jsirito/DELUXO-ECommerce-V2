import Home from "./views/home/Home";
import ProductList from "./views/productList/ProductList";
import SingleProduct from "./views/product/SingleProduct";
import ShoppingCart from "./views/cart/ShoppingCartV2";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
