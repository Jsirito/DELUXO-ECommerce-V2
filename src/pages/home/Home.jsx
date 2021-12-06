import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Slider from "../../components/slider/Slider"
import Categories from "../../components/categories/Categories";

function Home() {
  return (
    <div>
      <Announcement/>
      <NavBar />
      <Slider />
      <Categories />
    </div>
  );
}

export default Home;
