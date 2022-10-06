import React from "react";
import "../App.css";

export default function Options({
  radioSelected,
  option,
  index,
  isSubmitted,
  checklist,
}) {
  return (
    <div className="Options">
      <input
        type="radio"
        value={option}
        name="options"
        onClick={(e) => radioSelected(e, index)}
        disabled={isSubmitted}
        defaultChecked={option === checklist[index]}
      />
      {option}
    </div>
  );
}
