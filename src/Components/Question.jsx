import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Row,
  Container,
} from "reactstrap";
import { useState } from "react";

import Options from "../Components/Options";

export default function Question({ question, radioSelected, isSubmitted }) {
  return (
    <div>
      {" "}
      <CardBody>
        <CardTitle className="QuestionHeading" tag="h5">
          Question
        </CardTitle>
        <CardText className="Question">{question.question}</CardText>

        <div>
          <Container>
            <Row xs="2" className="Options">
              {question.options.map((option, index) => {
                return (
                  <Options
                    key={index}
                    option={option}
                    radioSelected={radioSelected}
                    trueOption={question.answer}
                    isSubmitted={isSubmitted}
                  />
                );
              })}
            </Row>
          </Container>
        </div>
      </CardBody>
    </div>
  );
}
