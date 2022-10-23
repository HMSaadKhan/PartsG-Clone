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

      <Carousel breakPoints={breakPoints} ref={carRef} enableAutoPlay>
        {CategoriesData.map((Category) => {
          return (
            <div className="maindiv" key={Category.id}>
              <SmallCard Category={Category} />
            </div>
          );
        })}
      </Carousel>
      <Footer carRef={carRef} />
    </div>
  );
};

export default Categories;
