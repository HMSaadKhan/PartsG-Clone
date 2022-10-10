import React, { useRef } from "react";
import { CategoriesData } from "../../common/CategoriesData";
import SmallCard from "../smallcard/SmallCard";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "./product.css";
import { breakPoints } from "../../common/BreakPoints";
import Carousel from "react-elastic-carousel";
import LargeCard from "../largeCard/LargeCard";

export default function Products() {
  const carRef = useRef();
  return (
    <div className="categoriesMain">
      <div className="Header">
        <div></div>
        <div>
          <h2 className="Heading">Products</h2>
          <h6 className="Caption">
            Diverse Range of Products Available on the Platform
          </h6>
        </div>
        <div>{/* <button>View All Categories</button> */}</div>
      </div>
      <LargeCard />
      {/* <Carousel breakPoints={breakPoints} ref={carRef}>
        {CategoriesData.map((data) => {
          return (
            <div className="maindiv" key={data.id}>
              <SmallCard link={data.link} name={data.name} />
            </div>
          );
        })}
      </Carousel> */}
      <div className="parentDiv">
        <MdNavigateBefore
          className="roundedBtn"
          onClick={() => {
            console.log(carRef);
            carRef.current.slidePrev();
          }}
        />

        <MdNavigateNext
          className="roundedBtn"
          onClick={() => {
            console.log(carRef);
            carRef.current.slideNext();
          }}
        />
      </div>
    </div>
  );
}
