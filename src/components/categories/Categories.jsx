import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";

import "./categories.css";
import { breakPoints, CategoriesData } from "../../common";
import SmallCard from "../smallcard/SmallCard";
import { Footer, Header } from "../../components/CandPheaderandFooter";

const Categories = () => {
  const carRef = useRef();
  return (
    <div className="categoriesMain">
      <Header
        heading={"Categories"}
        caption={"Diverse Range of Categories Available on the Platform"}
      />

      <Carousel breakPoints={breakPoints} ref={carRef}>
        {CategoriesData.map((data) => {
          return (
            <div className="maindiv" key={data.id}>
              <SmallCard link={data.link} name={data.name} />
            </div>
          );
        })}
      </Carousel>
      <Footer carRef={carRef} />
    </div>
  );
};

export default Categories;
