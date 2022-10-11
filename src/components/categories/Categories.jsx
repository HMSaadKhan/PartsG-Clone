import React, { useRef } from "react";
import { CategoriesData } from "../../common/CategoriesData";
import SmallCard from "../smallcard/SmallCard";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "./categories.css";
import { breakPoints } from "../../common/BreakPoints";
import Carousel from "react-elastic-carousel";
const Categories = () => {
  const carRef = useRef();
  return (
    <div className="categoriesMain">
      <div className="Header">
        <div></div>
        <div>
          <h2 className="CnPHeading">CATEGORIES</h2>
          <h6 className="CnPCaption">
            Diverse Range of Categories Available on the Platform
          </h6>
        </div>
        <div>{/* <button>View All Categories</button> */}</div>
      </div>
      <Carousel breakPoints={breakPoints} ref={carRef}>
        {CategoriesData.map((data) => {
          return (
            <div className="maindiv" key={data.id}>
              <SmallCard link={data.link} name={data.name} />
            </div>
          );
        })}
      </Carousel>
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
};

export default Categories;
