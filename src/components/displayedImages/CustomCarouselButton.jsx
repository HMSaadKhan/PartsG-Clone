import React from "react";

const CustomCarouselButton = ({
  index,
  setNext,
  setPrev,
  selectedButton,
  setSelectedButton,
}) => {
  return (
    <button
      onClick={() => {
        setPrev(index);
        setNext(index + 1);
        setSelectedButton(index);
        console.log(selectedButton);
      }}
      className={`SelectionButton   ${
        selectedButton === index ? "buttonBgonSelect" : ""
      }`}
    />
  );
};

export default CustomCarouselButton;
