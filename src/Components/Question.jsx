import React from "react";
import { CardBody, CardText, CardTitle, Row, Container } from "reactstrap";
import Options from "../Components/Options";

export default function Question({
  question,
  radioSelected,
  isSubmitted,
  Qnumber,
  checklist,
}) {
  return (
    <div>
      {" "}
      <CardBody>
        <CardTitle className="QuestionHeading" tag="h5">
          Question # {Qnumber + 1}
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
                    index={Qnumber}
                    isSubmitted={isSubmitted}
                    checklist={checklist}
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
