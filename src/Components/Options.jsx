import React from "react";
import { Button, Col, Row } from "reactstrap";

export default function Options({
  radioSelected,
  option,
  trueOption,
  isSubmitted,
}) {
  return (
    <div style={{ display: "flex" }}>
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
