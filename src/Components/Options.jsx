import React from "react";
import { Button, Col, Row } from "reactstrap";
import "../App.css";

export default function Options({
  radioSelected,
  option,
  trueOption,
  isSubmitted,
}) {
  return (
    <div>
      <input
        type="radio"
        value={option}
        name="options"
        onClick={(e) => radioSelected(e, trueOption)}
        disabled={isSubmitted}
      />
      {option}
    </div>
  );
}
