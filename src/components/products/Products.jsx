import React, { useRef } from "react";
import { CategoriesData } from "../../common/CategoriesData";
import SmallCard from "../smallcard/SmallCard";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "./product.css";
import { breakPointsForLargeCard } from "../../common/BreakPoints";
import Carousel from "react-elastic-carousel";
import LargeCard from "../largeCard/LargeCard";
import { ProductsData } from "../../common/ProductsData";

export default function Products() {
  const carRef = useRef();
  return (
    <div className="categoriesMain">
      <div className="Header">
        <div></div>
        <div>
          <h2 className="CnPHeading">Products</h2>
          <h6 className="CnPCaption">
            Diverse Range of Products Available on the Platform
          </h6>
        </div>
        <div>{/* <button>View All Categories</button> */}</div>
      </div>
      {/* <LargeCard /> */}
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
      <div className="parentDiv">
        <MdNavigateBefore
          className="roundedBtn"
          onClick={() => {
            carRef.current.slidePrev();
          }}
        />

        <MdNavigateNext
          className="roundedBtn"
          onClick={() => {
            carRef.current.slideNext();
          }}
        />
      </div>
    </div>
  );
}
