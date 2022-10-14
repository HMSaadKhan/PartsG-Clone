import React from "react";

import "./component.css";
import { Icons } from "../../common";
const Footer = ({ carRef }) => {
  const { MD } = Icons;
  return (
    <div className="parentDiv">
      <MD.MdNavigateBefore
        className="roundedBtn"
        onClick={() => {
          // console.log(carRef);
          carRef.current.slidePrev();
          // const activeIndex = carRef.current.state.activeIndex;
          // const activePage = carRef.current.state.activePage;
          // if (carRef.current.state.pages[0] === activePage) {
          //   carRef.current.goTo(
          //     carRef.current.state.pages[carRef.current.state.pages.length - 1]
          //   );
          // }
        }}
      />

      <MD.MdNavigateNext
        className="roundedBtn"
        onClick={() => {
          carRef.current.slideNext();
          // const activeIndex = carRef.current.state.activeIndex;
          // const activePage = carRef.current.state.activePage;
          // let lastIndex =
          //   carRef.current.props.children.length - activeIndex / activePage;
          // if (activeIndex === lastIndex) {
          //   carRef.current.goTo(carRef.current.state.pages[0]);
          // }
        }}
      />
    </div>
  );
};

export default Footer;
