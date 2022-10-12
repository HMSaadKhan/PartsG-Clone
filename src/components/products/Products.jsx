import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";

import "./product.css";
import LargeCard from "../largeCard/LargeCard";
import { ProductsData, breakPointsForLargeCard } from "../../common";
import { Footer, Header } from "../../components/CandPheaderandFooter";

export default function Products() {
  const carRef = useRef();

  return (
    <div className="categoriesMain">
      <Header
        heading={"Products"}
        caption={"Diverse Range of Products Available on the Platform"}
      />
      <Carousel breakPoints={breakPointsForLargeCard} ref={carRef}>
        {ProductsData.map((data) => {
          return (
            <div className="maindiv" key={data.id}>
              <LargeCard
                link={data.link}
                name={data.name}
                price={data.price}
                model={data.model}
                stock={data.stock}
              />
            </div>
          );
        })}
      </Carousel>{" "}
      <Footer carRef={carRef} />
    </div>
  );
}
