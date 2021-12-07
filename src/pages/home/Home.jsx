import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Slider from "../../components/slider/Slider"
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";

function Home() {
  return (
    <div>
      <Announcement/>
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
