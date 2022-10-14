import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";

import "./brands.css";
import { BrandsData, breakPoints } from "../../common";
import SmallCard from "../smallcard/SmallCard";

export default function Brands() {
  const carRef = useRef();
  return (
    <>
      <div className="brandsmain">
        <Carousel
          ref={carRef}
          breakPoints={breakPoints}
          enableAutoPlay
          // onChange={() => {
          //   const activeIndex = carRef.current.state.activeIndex;
          //   const activePage = carRef.current.state.activePage;
          //   let lastIndex =
          //     carRef.current.props.children.length - activeIndex / activePage;
          //   console.log({ activeIndex, lastIndex, activePage });

          //   if (activeIndex === lastIndex) {
          //     carRef.current.goTo(carRef.current.state.pages[0]);
          //   }
          // }}
        >
          {BrandsData.map((Brand) => {
            return (
              <div className="maindiv" key={Brand.id}>
                <SmallCard link={Brand.link} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="parentDiv">
        <button className="Btn"> View All Brands</button>
      </div>
    </>
  );
}
