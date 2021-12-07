import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
