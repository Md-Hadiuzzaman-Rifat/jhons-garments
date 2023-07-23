import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";
import Cover from "@/components/Cover/Cover";
import DoughnutChart from "@/components/DoughnutChart/DoughnutChart";
import Fabrics from "@/components/Fabrics/Fabrics";
import FindFabrics from "@/components/FindFabrics/FindFabrics";
import Footer from "@/components/Footer/Footer";
import MovingBanner from "@/components/MovingBanner/MovingBanner";
import Projects from "@/components/Projects/Projects";
import Review from "@/components/Review/Review";
import Services from "@/components/Services/Services";
import SliderComponent from "@/components/Slider/SliderComponent";
import React from "react";


const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <FindFabrics></FindFabrics>
      <Counter></Counter>
      {/* <Services></Services> */}
      <Review></Review>
      <Fabrics></Fabrics>
      {/* <SliderComponent></SliderComponent> */}
      <MovingBanner></MovingBanner>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default Home;
