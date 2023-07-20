import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";
import Cover from "@/components/Cover/Cover";
import FindFabrics from "@/components/FindFabrics/FindFabrics";
import Services from "@/components/Services/Services";
import React from "react";


const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <FindFabrics></FindFabrics>
      <Counter></Counter>
      <Services></Services>
    </div>
  );
};

export default Home;
